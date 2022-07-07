import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-header-manipulation',
  templateUrl: './request-header-manipulation.component.html',
  styleUrls: ['./request-header-manipulation.component.scss']
})
export class RequestHeaderManipulationComponent implements OnInit {

  rule = {
    heading: "Request Header Manipulation",
    tagline: "Modifying headers to access data",
    sinks: [
      {
        id: 10,
        category: 'featured',
        img: 'header-manipulation.png',
        title: 'Using fetch()',
        courseAuthor: 'Brad Traversy',
        courseRating: '4.9',
        ratingNumbers: '256',
        coursePrice: 'A$99.99',
        currentPrice: 'A$19.99',
        tag: 'Bestseller',
        tagColor: '#ffe799',
    }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
