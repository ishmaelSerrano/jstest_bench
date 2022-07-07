import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-open-redirection',
  templateUrl: './open-redirection.component.html',
  styleUrls: ['./open-redirection.component.css']
})
export class OpenRedirectionComponent implements OnInit {

  loadInput(dangerousCookieInput: string) {
		window.location.href = dangerousCookieInput;
  }

  loadHash() {
    this.loadInput(this.route.snapshot.fragment);
  }

  checkForCookie() {
    const cookies = document.cookie.split(',').reduce((prev, current) => {
      const [name, ...value] = current.split('=');
      prev[name] = value.join('=');
      return prev;
    }, {});
    this.loadInput(cookies['redirect']);
  };

  rule = {
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
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {}

}
