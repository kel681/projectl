import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        display: 'block'
      })),
      state('closed', style({
        display: 'none',
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.25s')
      ]),
      transition('closed => open', [
        animate('0.25s')
      ]),
    ]),
  ]
})
export class AppComponent {
  menuOpen = false;
  title = 'projectl';

  currentRoute = '';

  constructor(private router: Router) {
    console.log(router.url);
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e))
      .subscribe(event => {
        this.currentRoute = event.url;
        console.log(event.url);
      });
  }

  toggle() {
    this.menuOpen = !this.menuOpen;
  }
}



