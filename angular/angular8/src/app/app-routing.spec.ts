import {Location} from '@angular/common';
import {TestBed, async, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

import { routes } from './app-routing.module';

import { XssComponent } from './rules/xss/xss.component';
import { JsinjectionComponent } from './rules/jsinjection/jsinjection.component';
import { CookiemanipulationComponent } from './rules/cookiemanipulation/cookiemanipulation.component';
import { DomainmanipulationComponent } from './rules/domainmanipulation/domainmanipulation.component';
import { AppComponent } from './app.component';
import { RequestHeaderManipulationComponent } from './rules/request-header-manipulation/request-header-manipulation.component';
import { SourcesComponent } from './sources/sources.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DocumentBaseUriComponent} from './sources/url/document-base-uri/document-base-uri.component';
import {DocumentUrlComponent} from './sources/url/document-url/document-url.component';
import {LocationDocumentUriComponent} from './sources/url/location-document-uri/location-document-uri.component';
import {LocationHashComponent} from './sources/url/location-hash/location-hash.component';
import {LocationHostComponent} from './sources/url/location-host/location-host.component';
import {LocationHostnameComponent} from './sources/url/location-hostname/location-hostname.component';
import {LocationSearchComponent} from './sources/url/location-search/location-search.component';
import {LocationHrefComponent} from './sources/url/location-href/location-href.component';
import {LocationOriginComponent} from './sources/url/location-origin/location-origin.component';
import {LocationPathnameComponent} from './sources/url/location-pathname/location-pathname.component';
import {LocationUrlComponent} from './sources/url/location-url/location-url.component';
import {WindowLocationComponent} from './sources/url/window-location/window-location.component';
import {DocumentCookieComponent} from './sources/communication/document-cookie/document-cookie.component';
import {MessageEventDataComponent} from './sources/communication/message-event-data/message-event-data.component';
import {DocumentReferrerComponent} from './sources/window-document/document-referrer/document-referrer.component';
import {ElementValueComponent} from './sources/window-document/element-value/element-value.component';
import {StorageGetitemComponent} from './sources/window-document/storage-getitem/storage-getitem.component';
import {WindowFrameElementComponent} from './sources/window-document/window-frame-element/window-frame-element.component';
import {WindowFramesComponent} from './sources/window-document/window-frames/window-frames.component';
import {WindowNameComponent} from './sources/window-document/window-name/window-name.component';
import {WindowPromptComponent} from './sources/window-document/window-prompt/window-prompt.component';
import { OpenRedirectionComponent } from './rules/open-redirection/open-redirection.component';
import { LinkManipulationComponent } from './rules/link-manipulation/link-manipulation.component';
import { WebMessageManipulationComponent } from './rules/web-message-manipulation/web-message-manipulation.component';
import { LocalFilePathManipulationComponent } from './rules/local-file-path-manipulation/local-file-path-manipulation.component';
import { Html5StorageManipulationComponent } from './rules/html5-storage-manipulation/html5-storage-manipulation.component';
import { JsonInjectionComponent } from './rules/json-injection/json-injection.component';
import { RuleComponent } from './templates/rule/rule.component';

describe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), NgbModule],
      declarations: [
        AppComponent,
        CookiemanipulationComponent,
        ElementValueComponent,
        Html5StorageManipulationComponent,
        XssComponent,
        JsinjectionComponent,
        JsonInjectionComponent,
        RequestHeaderManipulationComponent,
        SourcesComponent,
        DomainmanipulationComponent,
        DocumentBaseUriComponent,
        DocumentCookieComponent,
        DocumentReferrerComponent,
        DocumentUrlComponent,
        LinkManipulationComponent,
        LocalFilePathManipulationComponent,
        LocationDocumentUriComponent,
        LocationHashComponent,
        LocationHostComponent,
        LocationHostnameComponent,
        LocationSearchComponent,
        LocationHrefComponent,
        LocationOriginComponent,
        LocationPathnameComponent,
        LocationSearchComponent,
        LocationUrlComponent,
        MessageEventDataComponent,
        StorageGetitemComponent,
        OpenRedirectionComponent,
        WebMessageManipulationComponent,
        WindowLocationComponent,
        WindowFrameElementComponent,
        WindowFramesComponent,
        WindowNameComponent,
        WindowPromptComponent,
        RuleComponent
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('navigate to /rules/xss works', fakeAsync(() => {
      router.navigate(['/rules/xss']);
      tick();
      expect(location.path()).toBe('/rules/xss');
  }));

});
