import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent implements OnInit {

  reviews = [
    {
      author: 'Alan P.',
      rating: 4,
      comment: 'It\'s a detailed and in-depth course that teaches you all the things you could possibly need and use while working with Angular. The style and quality is as expected from Max. It has great value and I would recommend the course, because is has great value. Having said all that, I would like to point out some areas that could be improved. Some sections of the course were dated and there was a need to read additional notes that were provided or look up comments which were helpful, to solve a dependency issue or a syntax change in Angular and such.',
    },
    {
      author: 'Source F.',
      rating: 5,
      comment: 'Super Course'
    },
    {
      author: 'Lexcom I.',
      rating: 5,
      comment: 'All in all, the course is awesome, especially for beginners which does not require developers to have strong front-end background. I would add that the course could be restructured a little bit: the Typescript Introduction chapter could have been placed right before/after The Basics chapter (whoever is already familiar with Typescript can of course skip), the deep dive CLI chapter could have been moved before/after deploying an Angular App. It would be nice if the advanced features like Angular Universal, animations, service workers could have been applied to the course project.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
