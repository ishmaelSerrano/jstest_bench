import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-websocket-url-poisoning',
  templateUrl: './websocket-url-poisoning.component.html',
  styleUrls: ['./websocket-url-poisoning.component.scss']
})
export class WebsocketUrlPoisoningComponent implements OnInit {

  rule = {
    heading: "Websocket URL Poisoning",
    tagline: "Modifying page data with websockets",
    sinks: [
      {
        id: 10,
        category: 'featured',
        img: 'websocket-url-poisoning.png',
        title: 'Using the WebSocketConstructor',
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
