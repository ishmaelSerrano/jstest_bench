import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../../../../../models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() heading: string;
  @Input() link: string;
  @Input() courses: ICourse[];


  constructor() { }

  ngOnInit() {
  }

}
