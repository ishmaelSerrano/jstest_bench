import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CoursesService} from '../../../../services/courses/courses.service';

@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrls: ['./top-courses.component.scss']
})
export class TopCoursesComponent implements OnInit {

  courses$: Observable<any>;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.courses$ = this.coursesService.getCourses('top');
  }

}
