import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../../../../../../models/course';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course: ICourse;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickCard = () => {
    this.router.navigate(['/courses', this.course.id]);
  }

}
