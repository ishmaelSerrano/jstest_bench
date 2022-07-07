import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-filepath-manipulation',
  templateUrl: './local-filepath-manipulation.component.html',
  styleUrls: ['./local-filepath-manipulation.component.scss']
})
export class LocalFilepathManipulationComponent implements OnInit {

  rule = {
    heading: "Local Filepath Manipulation",
    tagline: "Access local files with filepath manipulation",
    sinks: [
      {
        id: 10,
        category: 'featured',
        img: 'filepath-manipulation.png',
        title: 'Using FileReader.readAsArrayBuffer()',
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
