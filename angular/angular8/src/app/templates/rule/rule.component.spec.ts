import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleComponent } from './rule.component';

describe('RuleComponent', () => {
  let component: RuleComponent;
  let fixture: ComponentFixture<RuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleComponent);
    component = fixture.componentInstance;
    component.rule = {
        name: 'Open Redirection',
        OWASP_Link: 'https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html',
        OWASP_Title: 'OWASP Unvalidated Redirects and Forwards Cheat Sheet',
        CWE_Link: 'https://cwe.mitre.org/data/definitions/601.html',
        CWE_Title: 'CWE-601: URL Redirection to Untrusted Site (Open Redirect)',
        PortSwigger_Link: 'https://portswigger.net/web-security/dom-based/open-redirection',
        PortSwigger_Title: 'DOM-based open redirection',
        description: `Unvalidated redirects and forwards are possible when a web application accepts untrusted input that could cause the web application to redirect the request to a URL contained within untrusted input. By modifying untrusted URL input to a malicious site, an attacker may successfully launch a phishing scam and steal user credentials.`,
        sinks: `vulnerability open-redirection: new <dom::LocationConstructor>(*)  [~sanitized] // this may or may not work, the problem is \`location = ...\`
    vulnerability open-redirection: <dom::Location>.host            [~sanitized]
    vulnerability open-redirection: <dom::Location>.hostname        [~sanitized]
    vulnerability open-redirection: <dom::Location>.href            [~sanitized]
    vulnerability open-redirection: <dom::Location>.assign(*)       [~sanitized]
    vulnerability open-redirection: <dom::Location>.replace(*)      [~sanitized]
    vulnerability open-redirection: open(*)                         [~sanitized]
    vulnerability open-redirection: <dom::Document>.open(*)         [~sanitized]
    vulnerability open-redirection: <dom::Window>.open(*)           [~sanitized]
    vulnerability open-redirection: <dom::HTMLIFrameElement>.srcdoc [~sanitized]`,
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
