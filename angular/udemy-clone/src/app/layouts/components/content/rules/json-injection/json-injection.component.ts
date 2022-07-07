import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-injection',
  templateUrl: './json-injection.component.html',
  styleUrls: ['./json-injection.component.scss']
})
export class JsonInjectionComponent implements OnInit {

  rule = {
    heading: "JSON Injection",
    tagline: "Manipulating page data with JSON Injection",
    sinks: [
      {
        id: 10,
        category: 'featured',
        img: 'json-injection.png',
        title: 'Using JSON.parse()',
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
