import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExampleModel } from '../models/example.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  dataExampleData: ExampleModel[] = [
    {
      id: uuidv4(),
      name: 'aName',
      address: '3124 Example Road'
    }
  ]

  getExampleDataColdVersion(): Observable<ExampleModel[]> {
    return of(this.dataExampleData); //send back data only when called
  }

  /*
    Any data changes (like a save or delete happen to the data) are propgated to all listeners (see exampleHot.component.ts for this one)
  */
  getExampleDataHotVersion(): any {
    
  }

  saveExample(exampleToSave: ExampleModel): Observable<ExampleModel> {
    if (!exampleToSave.id) {
      exampleToSave.id = uuidv4(); //if no id, set it here
    }
    this.dataExampleData.push(exampleToSave);
    return of(exampleToSave);
  }

  saveMultipleExamples(exampleToSave: ExampleModel[]): Observable<ExampleModel[]> {
    this.dataExampleData.push(...exampleToSave);
    return this.getExampleDataColdVersion();
  }
}
