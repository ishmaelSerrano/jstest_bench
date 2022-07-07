import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-domainmanipulation',
  templateUrl: './domainmanipulation.component.html',
  styleUrls: ['./domainmanipulation.component.css']
})
export class DomainmanipulationComponent implements OnInit {

  rule = {
    name: 'Document Domain Manipulation',
    OWASP_Link: 'https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/11-Client-side_Testing/07-Testing_Cross_Origin_Resource_Sharing',
    OWASP_Title: 'OWASP Testing Cross Origin Resource Sharing',
    CWE_Link: 'https://cwe.mitre.org/data/definitions/284.html',
    CWE_Title: 'CWE-284: Improper Access Control',
    PortSwigger_Link: 'https://portswigger.net/web-security/dom-based/document-domain-manipulation',
    PortSwigger_Title: 'DOM-based document-domain manipulation',
    description: `The document.domain property is used by browsers in their enforcement of the same origin policy. If two pages from different origins explicitly set the same document.domain value, then those two pages can interact in unrestricted ways. If an attacker can cause a page of a targeted website and another page they control (either directly, or via an XSS-like vulnerability) to set the same document.domain value, then the attacker may be able to fully compromise the target page via the page they already control. This opens up the same possibilities for exploitation as regular cross-site scripting (XSS) vulnerabilities.`,
    sinks: `vulnerability domain-manipulation: <dom::Document>.domain [~sanitized]`,
  };

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  loadInput(dangerousCookieInput: string) {
		document.domain = dangerousCookieInput
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
    document.domain = cookies['redirect']
  };

}
