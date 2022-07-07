import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-header-manipulation',
  templateUrl: './request-header-manipulation.component.html',
  styleUrls: ['./request-header-manipulation.component.css']
})
export class RequestHeaderManipulationComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  loadInput(dangerousInput: string) {
		this.makeApiCall(dangerousInput);
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
    this.loadInput(cookies['badHeader']);
  };

  makeApiCall(headerValue: string) {
    fetch('http://example.com/movies.json', {
      headers: {
        'maliciousHeader': headerValue
      }
    });
  }

  rule = {
    name: 'Request Header Manipulation',
    OWASP_Link: 'https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html',
    OWASP_Title: 'OWASP HTTP Security Response Headers Cheat Sheet',
    CWE_Link: 'https://cwe.mitre.org/data/definitions/345.html',
    CWE_Title: 'CWE-345: Insufficient Verification of Data Authenticity',
    PortSwigger_Link: 'https://portswigger.net/web-security/dom-based/ajax-request-header-manipulation',
    PortSwigger_Title: 'DOM-based Ajax request-header manipulation',
    description: `Ajax request-header manipulation vulnerabilities arise when a script writes attacker-controllable data into the request header of an Ajax request that is issued using an XmlHttpRequest object. An attacker may be able to use this vulnerability to construct a URL that, if visited by another user, will set an arbitrary header in the subsequent Ajax request. This can then be used as a starting point to chain together other kinds of attack, thereby increasing the potential severity of this vulnerability.`,
    sinks: `vulnerability header-manipulation: <dom::WindowOrWorkerGlobalScope>.fetch(*) [~sanitized]
vulnerability header-manipulation: fetch(*)                                  [~sanitized]
vulnerability header-manipulation: <dom::XMLHttpRequest>.setRequestHeader(*)                     [~sanitized]
vulnerability header-manipulation: <dom::XMLHttpRequest>.setRequestHeader(_, *)                  [~sanitized]
vulnerability ajax-response-header-manipulation: <dom::XMLHttpRequest>.getResponseHeader(*)           [~sanitized]`,
  };

  ngOnInit() {
  }

}
