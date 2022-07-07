import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CoursesService} from '../../../../services/courses/courses.service';

@Component({
  selector: 'app-students-viewing',
  templateUrl: './students-viewing.component.html',
  styleUrls: ['./students-viewing.component.scss']
})
export class StudentsViewingComponent implements OnInit {

  courses$: Observable<any>;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.courses$ = this.coursesService.getCourses('students');
  }

}
