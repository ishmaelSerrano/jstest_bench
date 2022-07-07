import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xpath-injection',
  templateUrl: './xpath-injection.component.html',
  styleUrls: ['./xpath-injection.component.scss']
})
export class XpathInjectionComponent implements OnInit {

  rule = {
    heading: "XPath Injection Component",
    tagline: "Modifying page data with XPath Injection",
    sinks: [
      {
        id: 10,
        category: 'featured',
        img: 'xpath-injection.jpeg',
        title: 'Using XPath.evaluate()',
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
