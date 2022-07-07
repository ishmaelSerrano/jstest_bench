import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-manipulation',
  templateUrl: './cookie-manipulation.component.html',
  styleUrls: ['./cookie-manipulation.component.scss']
})
export class CookieManipulationComponent implements OnInit {

  rule = {
    heading: "Cookie Manipulation",
    tagline: "Manipulating page data with cookies",
    sinks: [
      {
        id: 10,
        category: 'featured',
        img: 'cookie-manipulation.png',
        title: 'Using document.cookie',
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
