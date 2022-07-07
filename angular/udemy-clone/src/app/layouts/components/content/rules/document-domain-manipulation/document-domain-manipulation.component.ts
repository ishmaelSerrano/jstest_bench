import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-domain-manipulation',
  templateUrl: './document-domain-manipulation.component.html',
  styleUrls: ['./document-domain-manipulation.component.scss']
})
export class DocumentDomainManipulationComponent implements OnInit {

  rule = {
    heading: "Document Domain Manipulation",
    tagline: "Manipulating the document domain name",
    sinks: [
      {
        id: 10,
        category: 'featured',
        img: 'domain-manipulation.png',
        title: 'Using document.domain',
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
