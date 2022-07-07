import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CoursesService} from '../../../../services/courses/courses.service';

@Component({
  selector: 'app-wishlist-courses',
  templateUrl: './wishlist-courses.component.html',
  styleUrls: ['./wishlist-courses.component.scss']
})
export class WishlistCoursesComponent implements OnInit {

  courses$: Observable<any>;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.courses$ = this.coursesService.getCourses('wishlist');
  }

}
