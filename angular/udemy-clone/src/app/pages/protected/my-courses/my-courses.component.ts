import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/users/user.service';
import {Observable} from 'rxjs';
import {ICourse} from '../../../../models/course';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {

  myCourses$: Observable<ICourse[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.myCourses$ = this.userService.myCourses();
  }

}
