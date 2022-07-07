import {Component, OnInit, Input} from '@angular/core';
import {Observable} from 'rxjs';
import { IUser } from 'src/models/user';
import {CoursesService} from '../../../../services/courses/courses.service';

@Component({
  selector: 'app-current-learning',
  templateUrl: './current-learning.component.html',
  styleUrls: ['./current-learning.component.scss']
})
export class CurrentLearningComponent implements OnInit {

  currentLearning$: Observable<any>;
  @Input() user: IUser[];

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.currentLearning$ = this.coursesService.getCourses('current');
  }

}
