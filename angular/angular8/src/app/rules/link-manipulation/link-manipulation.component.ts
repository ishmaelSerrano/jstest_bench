import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-link-manipulation',
  templateUrl: './link-manipulation.component.html',
  styleUrls: ['./link-manipulation.component.css']
})
export class LinkManipulationComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  loadInput(dangerousInput: string) {
		const link = document.getElementById('vulnerableLink') as HTMLAnchorElement
    link.href = dangerousInput;
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
    this.loadInput(cookies['manipulatedLink']);
  };

  rule = {
    name: 'Link Manipulation',
    OWASP_Link: 'https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html',
    OWASP_Title: 'OWASP Unvalidated Redirects and Forwards Cheat Sheet',
    CWE_Link: 'https://cwe.mitre.org/data/definitions/233.html',
    CWE_Title: 'CWE-233: Improper Handling of Parameters',
    PortSwigger_Link: 'https://portswigger.net/web-security/dom-based/link-manipulation',
    PortSwigger_Title: 'DOM-based link manipulation',
    description: `DOM-based link-manipulation vulnerabilities arise when a script writes attacker-controllable data to a navigation target within the current page, such as a clickable link or the submission URL of a form. An attacker might be able to use this vulnerability to construct a URL that, if visited by another application user, will modify the target of links within the response.`,
    sinks: `vulnerability link-manipulation: <dom::Element>.href   [~sanitized]
vulnerability link-manipulation: <dom::HTMLLinkElement>.href   [~sanitized]
vulnerability link-manipulation: <dom::HTMLEmbedElement>.src   [~sanitized]
vulnerability link-manipulation: <dom::HTMLFrameElement>.src   [~sanitized]
vulnerability link-manipulation: <dom::HTMLIFrameElement>.src  [~sanitized]
vulnerability link-manipulation: <dom::HTMLImageElement>.src   [~sanitized]
vulnerability link-manipulation: <dom::HTMLInputElement>.src   [~sanitized]
vulnerability link-manipulation: <dom::HTMLMediaElement>.src   [~sanitized]
vulnerability link-manipulation: <dom::HTMLSourceElement>.src  [~sanitized]
vulnerability link-manipulation: <dom::HTMLTrackElement>.src   [~sanitized]
vulnerability link-manipulation: <dom::HTMLFormElement>.action [~sanitized]`,
  };

  ngOnInit() {
  }

}
