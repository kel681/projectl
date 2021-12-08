import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../services/example.service';
import { ExampleModel } from '../../models/example.model';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  examples: ExampleModel[] = [];

  constructor(private exampleService: ExampleService) { }

  ngOnInit(): void {
    //subscribing to a observable as a cold observable
    //cold obserables are one and done calls to a service
    this.exampleService.getExampleDataColdVersion()
      .subscribe({
        next: (exampleData) => this.examples = exampleData, //setting the data from what we get back from the subscription to our local variable,
        error: (e) => console.error(e), //handle error
      });
  }

  add(toAdd: ExampleModel) {
    this.exampleService.saveExample(toAdd).subscribe({
      next: (exampleData) => this.examples.push(exampleData), //setting the data from what we get back from the subscription to our local variable,
      error: (e) => console.error(e), //handle error
    })
  }

}
