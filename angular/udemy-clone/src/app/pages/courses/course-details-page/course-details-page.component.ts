import {
  Component,
  OnDestroy,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {Subscription} from 'rxjs';
import {ICourse} from '../../../../models/course';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styleUrls: ['./course-details-page.component.scss']
})
export class CourseDetailsPageComponent implements OnInit, OnDestroy, AfterViewInit {

  courseSubscription$ = new Subscription();
  course: ICourse;
  shareEmail: string = this.activatedRoute.snapshot.queryParams['shareEmail'];

  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {
    this.courseSubscription$ = this.coursesService
      .getCourseById(this.activatedRoute.snapshot.params.id)
      .subscribe( response => this.course = response);
  }

  ngAfterViewInit() {
    if (this.shareEmail && document.getElementById('shareEmail')) {
      document.getElementById('shareEmail').innerHTML = `Shared with you by ${this.shareEmail}`;
    }
  }

  ngOnDestroy() {
    this.courseSubscription$.unsubscribe();
  }

  handleShareClick(email: string) {
    const link = `//localhost:4200/courses/${this.activatedRoute.snapshot.params.id}?shareEmail=${email}`;
    document.getElementById('shareForm').innerHTML = `<p>Visit <a href="${link}">${link}</a> to view shared course!</p>`;
  }

  submitReview(data) {
    // TODO: Add vulnerability sink here
  }

}
