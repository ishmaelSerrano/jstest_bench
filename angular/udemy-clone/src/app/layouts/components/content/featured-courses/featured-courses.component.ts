import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CoursesService} from '../../../../services/courses/courses.service';

@Component({
  selector: 'app-featured-courses',
  templateUrl: './featured-courses.component.html',
  styleUrls: ['./featured-courses.component.scss']
})
export class FeaturedCoursesComponent implements OnInit {

  courses$: Observable<any>;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.courses$ = this.coursesService.getCourses('featured');
  }

}
