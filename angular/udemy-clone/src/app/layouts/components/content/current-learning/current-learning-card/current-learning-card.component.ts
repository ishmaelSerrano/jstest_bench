import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-learning-card',
  templateUrl: './current-learning-card.component.html',
  styleUrls: ['./current-learning-card.component.scss']
})
export class CurrentLearningCardComponent implements OnInit {

  @Input() currentLearning: { courseTitle: string; lectureTitle: string; duration: string; img: string };

  constructor() {
  }

  ngOnInit() {
  }

}
