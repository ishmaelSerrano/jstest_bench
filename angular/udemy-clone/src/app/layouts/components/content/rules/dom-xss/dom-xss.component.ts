import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-xss',
  templateUrl: './dom-xss.component.html',
  styleUrls: ['./dom-xss.component.scss']
})
export class DomXssComponent implements OnInit {

  rule = {
    heading: "Dom XSS",
    tagline: "DOM Based Cross Site Scripting",
    sinks: [
      {
        id: 10,
        category: 'featured',
        img: 'dom-xss2.png',
        title: 'Using document.write',
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
