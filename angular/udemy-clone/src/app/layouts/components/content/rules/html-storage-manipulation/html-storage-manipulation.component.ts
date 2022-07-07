import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-storage-manipulation',
  templateUrl: './html-storage-manipulation.component.html',
  styleUrls: ['./html-storage-manipulation.component.scss']
})
export class HtmlStorageManipulationComponent implements OnInit {

  rule = {
    heading: "HTML Storage Manipulation",
    tagline: "Manipulating page data with HTML Storage",
    sinks: [
      {
        id: 10,
        category: 'featured',
        img: 'html-storage.png',
        title: 'Using storage.setItem()',
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
