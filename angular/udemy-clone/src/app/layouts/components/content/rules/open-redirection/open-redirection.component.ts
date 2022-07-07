import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-redirection',
  templateUrl: './open-redirection.component.html',
  styleUrls: ['./open-redirection.component.scss']
})
export class OpenRedirectionComponent implements OnInit {

  rule = {
    heading: "Open Redirection",
    tagline: "Manipulating redirections in URL paths",
    sinks: [
      {
        id: 10,
        category: 'featured',
        img: 'open-redirection.jpeg',
        title: 'Using location.host',
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
