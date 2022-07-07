import { Component } from '@angular/core';

import { routesConfig } from './routeConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rules = routesConfig.filter(route => route.type === 'rule');

  title = 'angular8';
}
