import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss']
})
export class ReviewItemComponent implements OnInit {

  @Input() review;
  rating = [];


  constructor() { }

  ngOnInit() {
    this.rating = Array(this.review.rating).fill('filled');
    if (this.review.rating < 5) {
      for (let i = 0; i < (5 - this.review.rating); i++ ) {
        this.rating.push('empty');
      }
    }
  }

}
