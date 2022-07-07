import { DocumentCookieComponent } from './sources/communication/document-cookie/document-cookie.component';
import { MessageEventDataComponent } from './sources/communication/message-event-data/message-event-data.component';

import { WindowLocationComponent } from './sources/url/window-location/window-location.component';
import { DocumentBaseUriComponent } from './sources/url/document-base-uri/document-base-uri.component';
import { LocationDocumentUriComponent } from './sources/url/location-document-uri/location-document-uri.component';
import { LocationHashComponent } from './sources/url/location-hash/location-hash.component';
import { LocationHostComponent } from './sources/url/location-host/location-host.component';
import { LocationHostnameComponent } from './sources/url/location-hostname/location-hostname.component';
import { LocationHrefComponent } from './sources/url/location-href/location-href.component';
import { LocationOriginComponent } from './sources/url/location-origin/location-origin.component';
import { LocationPathnameComponent } from './sources/url/location-pathname/location-pathname.component';
import { LocationSearchComponent } from './sources/url/location-search/location-search.component';
import { LocationUrlComponent } from './sources/url/location-url/location-url.component';
import { DocumentUrlComponent } from './sources/url/document-url/document-url.component';

import { StorageGetitemComponent } from './sources/window-document/storage-getitem/storage-getitem.component';
import { DocumentReferrerComponent } from './sources/window-document/document-referrer/document-referrer.component';
import { ElementValueComponent } from './sources/window-document/element-value/element-value.component';
import { WindowFrameElementComponent } from './sources/window-document/window-frame-element/window-frame-element.component';
import { WindowFramesComponent } from './sources/window-document/window-frames/window-frames.component';
import { WindowNameComponent } from './sources/window-document/window-name/window-name.component';
import { WindowPromptComponent } from './sources/window-document/window-prompt/window-prompt.component';

export const types = ['url', 'window-document', 'communication'];

export const sources = [
  //url based
  { path: 'url/document-base-uri', component: DocumentBaseUriComponent, title: 'document.baseURI', type: 'url'},
  { path: 'url/document-url', component: DocumentUrlComponent, title: 'document.url', type: 'url'},
  { path: 'url/location-document-uri', component: LocationDocumentUriComponent, title: 'location.documentURI', type: 'url'},
  { path: 'url/location-hash', component: LocationHashComponent, title: 'location.hash', type: 'url'},
  { path: 'url/location-host', component: LocationHostComponent, title: 'location.host', type: 'url'},
  { path: 'url/location-hostname', component: LocationHostnameComponent, title: 'location.hostname', type: 'url'},
  { path: 'url/location-search', component: LocationSearchComponent, title: 'location.search', type: 'url'},
  { path: 'url/location-href', component: LocationHrefComponent, title: 'location.href', type: 'url'},
  { path: 'url/location-origin', component: LocationOriginComponent, title: 'location.origin', type: 'url'},
  { path: 'url/location-pathname', component: LocationPathnameComponent, title: 'location.pathname', type: 'url'},
  { path: 'url/location-url', component: LocationUrlComponent, title: 'location.url', type: 'url'},
  { path: 'communication/window-location', component: WindowLocationComponent, title: 'window.location', type: 'url'},
  // communication based
  { path: 'communication/document-cookie', component: DocumentCookieComponent, title: 'document.cookie', type: 'communication'},
  { path: 'communication/message-event-data', component: MessageEventDataComponent, title: 'message.event.data', type: 'communication'},
  // { path: ''}
  // window document based
  { path: 'window-document/document-referrer', component: DocumentReferrerComponent, title: 'document.referrer', type: 'window-document'},
  { path: 'window-document/element-value', component: ElementValueComponent, title: 'element.value', type: 'window-document'},
  { path: 'window-document/storage-getitem', component: StorageGetitemComponent, title: 'storage.getItem', type: 'window-document'},
  { path: 'window-document/window-frame-element', component: WindowFrameElementComponent, title: 'window.frame.element', type: 'window-document'},
  { path: 'window-document/window-frames', component: WindowFramesComponent, title: 'window.frames', type: 'window-document'},
  { path: 'window-document/window-name', component: WindowNameComponent, title: 'window.name', type: 'window-document'},
  { path: 'window-document/window-prompt', component: WindowPromptComponent, title: 'window.prompt', type: 'window-document'},

]
