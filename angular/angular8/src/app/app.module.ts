import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { XssComponent } from './rules/xss/xss.component';
import { JsinjectionComponent } from './rules/jsinjection/jsinjection.component';
import { CookiemanipulationComponent } from './rules/cookiemanipulation/cookiemanipulation.component';
import { DomainmanipulationComponent } from './rules/domainmanipulation/domainmanipulation.component';
import { RequestHeaderManipulationComponent } from './rules/request-header-manipulation/request-header-manipulation.component';
import { OpenRedirectionComponent } from './rules/open-redirection/open-redirection.component';
import { LinkManipulationComponent } from './rules/link-manipulation/link-manipulation.component';
import { WebMessageManipulationComponent } from './rules/web-message-manipulation/web-message-manipulation.component';

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
import { WindowLocationComponent } from './sources/url/window-location/window-location.component';
import { DocumentUrlComponent } from './sources/url/document-url/document-url.component';

import { DocumentCookieComponent } from './sources/communication/document-cookie/document-cookie.component';
import { MessageEventDataComponent } from './sources/communication/message-event-data/message-event-data.component';

import { StorageGetitemComponent } from './sources/window-document/storage-getitem/storage-getitem.component';
import { DocumentReferrerComponent } from './sources/window-document/document-referrer/document-referrer.component';
import { ElementValueComponent } from './sources/window-document/element-value/element-value.component';
import { WindowFrameElementComponent } from './sources/window-document/window-frame-element/window-frame-element.component';
import { WindowFramesComponent } from './sources/window-document/window-frames/window-frames.component';
import { WindowNameComponent } from './sources/window-document/window-name/window-name.component';
import { WindowPromptComponent } from './sources/window-document/window-prompt/window-prompt.component';

import { SourcesComponent } from './sources/sources.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RuleComponent } from './templates/rule/rule.component';
import { LocalFilePathManipulationComponent } from './rules/local-file-path-manipulation/local-file-path-manipulation.component';
import { Html5StorageManipulationComponent } from './rules/html5-storage-manipulation/html5-storage-manipulation.component';
import { JsonInjectionComponent } from './rules/json-injection/json-injection.component';
import {NgModule} from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    XssComponent,
    JsinjectionComponent,
    CookiemanipulationComponent,
    DomainmanipulationComponent,
    RequestHeaderManipulationComponent,
    SourcesComponent,
    DocumentBaseUriComponent,
    LocationDocumentUriComponent,
    WindowLocationComponent,
    LocationHashComponent,
    LocationHostComponent,
    LocationHostnameComponent,
    LocationHrefComponent,
    LocationOriginComponent,
    LocationPathnameComponent,
    LocationSearchComponent,
    LocationUrlComponent,
    DocumentCookieComponent,
    MessageEventDataComponent,
    StorageGetitemComponent,
    DocumentUrlComponent,
    DocumentBaseUriComponent,
    DocumentReferrerComponent,
    ElementValueComponent,
    WindowFrameElementComponent,
    WindowFramesComponent,
    WindowNameComponent,
    WindowPromptComponent,
    RuleComponent,
    OpenRedirectionComponent,
    LinkManipulationComponent,
    WebMessageManipulationComponent,
    LocalFilePathManipulationComponent,
    Html5StorageManipulationComponent,
    JsonInjectionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
