import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-next',
  templateUrl: './learning-next.component.html',
  styleUrls: ['./learning-next.component.scss']
})
export class LearningNextComponent implements OnInit {
  learningTopics = [
    'React JS',
    'Node JS',
    'Next JS',
    'GraphQL',
    'MERN Stack',
    'Mongo DB',
    'Web Development',
    'JavaScript',
    'Python',
    'Mobile Development',
  ];
  constructor() { }

  ngOnInit() {
  }

}
