import { XssComponent } from './rules/xss/xss.component';
import { JsinjectionComponent } from './rules/jsinjection/jsinjection.component';
import { CookiemanipulationComponent } from './rules/cookiemanipulation/cookiemanipulation.component';
import { DomainmanipulationComponent } from './rules/domainmanipulation/domainmanipulation.component';
import { RequestHeaderManipulationComponent } from './rules/request-header-manipulation/request-header-manipulation.component';
import { SourcesComponent } from './sources/sources.component';

import { sources } from './sourceConfig';
import { OpenRedirectionComponent } from './rules/open-redirection/open-redirection.component';
import { LinkManipulationComponent } from './rules/link-manipulation/link-manipulation.component';
import { WebMessageManipulationComponent } from './rules/web-message-manipulation/web-message-manipulation.component';
import { LocalFilePathManipulationComponent } from './rules/local-file-path-manipulation/local-file-path-manipulation.component';
import { Html5StorageManipulationComponent } from './rules/html5-storage-manipulation/html5-storage-manipulation.component';
import { JsonInjectionComponent } from './rules/json-injection/json-injection.component';

export const routesConfig = [
  { path: 'rules/xss', component: XssComponent, title: 'XSS', type: 'rule'},
  { path: 'rules/jsinjection', component: JsinjectionComponent, title: 'Javascript Injection', type: 'rule'},
  { path: 'rules/cookiemanipulation', component: CookiemanipulationComponent, title: 'Cookie Manipulation', type: 'rule'},
  { path: 'rules/domainmanipulation', component: DomainmanipulationComponent, title: 'Document Domain Manipulation', type: 'rule'},
  { path: 'rules/request-header-manipulation', component: RequestHeaderManipulationComponent, title: 'Ajax request-header manipulation', type: 'rule'},
  { path: 'rules/open-redirection', component: OpenRedirectionComponent, title: 'Open Redirection', type: 'rule' },
  { path: 'rules/link-manipulation', component: LinkManipulationComponent, title: 'Link Manipulation', type: 'rule' },
  { path: 'rules/web-message-manipulation', component: WebMessageManipulationComponent, title: 'Web Message Manipulation', type: 'rule' },
  { path: 'rules/filepath-manipulation', component: LocalFilePathManipulationComponent, title: 'Local File Path Manipulation', type: 'rule' },
  { path: 'rules/storage-manipulation', component: Html5StorageManipulationComponent, title: 'HTML5 Storage Manipulation', type: 'rule' },
  { path: 'rules/json-injection', component: JsonInjectionComponent, title: 'JSON Injection', type: 'rule' },
  { path: 'sources', children: [
    { path: '', component: SourcesComponent, title: 'Sources', type: 'category' },
    ...sources
  ]}
];
