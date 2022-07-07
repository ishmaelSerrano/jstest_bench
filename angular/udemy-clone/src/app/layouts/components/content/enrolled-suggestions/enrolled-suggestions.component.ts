import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CoursesService} from '../../../../services/courses/courses.service';

@Component({
  selector: 'app-enrolled-suggestions',
  templateUrl: './enrolled-suggestions.component.html',
  styleUrls: ['./enrolled-suggestions.component.scss']
})
export class EnrolledSuggestionsComponent implements OnInit {

  courses$: Observable<any>;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.courses$ = this.coursesService.getCourses('enrolled');
  }

}
