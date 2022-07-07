import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-injection',
  templateUrl: './javascript-injection.component.html',
  styleUrls: ['./javascript-injection.component.scss']
})
export class JavascriptInjectionComponent implements OnInit {

  rule = {
    heading: "Javascript Injection",
    tagline: "Manipulating page data with JS Injection",
    sinks: [
      {
        id: 10,
        category: 'featured',
        img: 'js-injection.png',
        title: 'Using eval()',
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
