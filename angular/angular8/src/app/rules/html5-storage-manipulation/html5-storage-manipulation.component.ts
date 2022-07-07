import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-html5-storage-manipulation',
  templateUrl: './html5-storage-manipulation.component.html',
  styleUrls: ['./html5-storage-manipulation.component.css']
})
export class Html5StorageManipulationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  loadLocalStorage() {
    document.getElementById('vulnerableContent').innerHTML = localStorage.getItem('userName');
  }

  loadInput(dangerousInput: string) {
    localStorage.setItem('userName', dangerousInput);
  }

  checkForCookie() {
    const cookies = document.cookie.split(',').reduce((prev, current) => {
      const [name, ...value] = current.split('=');
      prev[name] = value.join('=');
      return prev;
    }, {});
    this.loadInput(cookies['webMessage'])
  };

  loadHash() {
    this.loadInput(this.route.snapshot.queryParams['localStorage']);
  }

  rule = {
    name: 'HTML5 Storage Manipulation',
    OWASP_Link: 'https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html',
    OWASP_Title: 'HTML5 Security Cheat Sheet',
    CWE_Link: 'https://cwe.mitre.org/data/definitions/921.html',
    CWE_Title: 'CWE-921: Storage of Sensitive Data in a Mechanism without Access Control',
    PortSwigger_Link: 'https://portswigger.net/web-security/dom-based/html5-storage-manipulation',
    PortSwigger_Title: 'DOM-based HTML5-storage manipulation',
    description: `HTML5-storage manipulation vulnerabilities arise when a script stores attacker-controllable data in the HTML5 storage of the web browser (either localStorage or sessionStorage). An attacker may be able to use this behavior to construct a URL that, if visited by another user, will cause the user's browser to store attacker-controllable data.

    This behavior does not in itself constitute a security vulnerability. However, if the application later reads data back from storage and processes it in an unsafe way, an attacker may be able to leverage the storage mechanism to deliver other DOM-based attacks, such as cross-site scripting and JavaScript injection.`,
    sinks: `vulnerability storage-manipulation: <dom::Storage>.setItem(_, *) [~sanitized]`,
  };

  ngOnInit() {
  }

}
