import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-message-manipulation',
  templateUrl: './web-message-manipulation.component.html',
  styleUrls: ['./web-message-manipulation.component.scss']
})
export class WebMessageManipulationComponent implements OnInit {

  rule = {
    heading: "Web Message Manipulation",
    tagline: "Manipulating page data with insecure web message validation",
    sinks: [
      {
        id: 10,
        category: 'featured',
        img: 'webmessage-manipulation.jpeg',
        title: 'Using window.postMessage()',
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
