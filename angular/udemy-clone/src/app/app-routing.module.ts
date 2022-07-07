import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {LoginComponent} from './pages/login/login.component';
import {MyCoursesComponent} from './pages/protected/my-courses/my-courses.component';
import { GuardService } from './services/auth/guard.service';
import {CourseDetailsPageComponent} from './pages/courses/course-details-page/course-details-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'my-courses', component: MyCoursesComponent, canActivate: [GuardService]},
  {path: 'courses/:id', component: CourseDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
