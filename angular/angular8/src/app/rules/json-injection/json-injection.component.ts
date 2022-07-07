import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-json-injection',
  templateUrl: './json-injection.component.html',
  styleUrls: ['./json-injection.component.css']
})
export class JsonInjectionComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  loadInput(dangerousInput: string) {
    document.getElementById('vulnerableId').innerHTML = JSON.parse(dangerousInput).text;
  }

  checkForCookie() {
    const cookies = document.cookie.split(',').reduce((prev, current) => {
      const [name, ...value] = current.split('=');
      prev[name] = value.join('=');
      return prev;
    }, {});
    this.loadInput(cookies['json'])
  };

  loadHash() {
    this.loadInput(JSON.parse(this.route.snapshot.queryParams['json']));
  }

  rule = {
    name: 'JSON Injection',
    OWASP_Link: 'https://owasp.org/www-project-top-ten/2017/A1_2017-Injection',
    OWASP_Title: 'JSON Injection at OWASP',
    CWE_Link: 'https://cwe.mitre.org/data/definitions/74.html',
    CWE_Title: 'CWE-74: Improper Neutralization of Special Elements in Output Used by a Downstream Component ("Injection")',
    PortSwigger_Link: 'https://portswigger.net/web-security/dom-based/client-side-json-injection',
    PortSwigger_Title: 'DOM-based client-side JSON injection',
    description: `DOM-based JSON-injection vulnerabilities arise when a script incorporates attacker-controllable data into a string that is parsed as a JSON data structure and then processed by the application. An attacker may be able to use this behavior to construct a URL that, if visited by another user, will cause arbitrary JSON data to be processed.`,
    sinks: `vulnerability json-injection: <stdlib::JSON>.parse(*) [~sanitized]`,
  };

  ngOnInit() {}

}
