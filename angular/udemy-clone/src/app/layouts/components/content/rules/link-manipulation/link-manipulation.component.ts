import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-manipulation',
  templateUrl: './link-manipulation.component.html',
  styleUrls: ['./link-manipulation.component.scss']
})
export class LinkManipulationComponent implements OnInit {
  rule = {
    heading: "Link Manipulation",
    tagline: "Manipulating links",
    sinks: [
      {
        id: 10,
        category: 'featured',
        img: 'link-manipulation.png',
        title: 'Using element.href',
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
