import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routesConfig } from './routeConfig';

// return an array of properly formatted routes from the routesConfig using the above helper function
// Due to an irregularity in Angular, you can't define the routes array and map routes into it at the same time
export const routes: Routes = [];
routes.push(...routesConfig);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
