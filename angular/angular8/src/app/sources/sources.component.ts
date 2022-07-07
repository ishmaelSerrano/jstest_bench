import { Component, OnInit } from '@angular/core';

import { sources, types } from '../sourceConfig';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {

  communicationSources = sources.filter(source => source.type === 'communication');
  urlSources = sources.filter(source => source.type === 'url');
  windowDocumentSources = sources.filter(source => source.type === 'window-document');
  types = types;

  constructor() { }

  ngOnInit() {
  }

}
