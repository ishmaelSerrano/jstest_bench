import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-web-message-manipulation',
  templateUrl: './web-message-manipulation.component.html',
  styleUrls: ['./web-message-manipulation.component.css']
})
export class WebMessageManipulationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  loadInput(dangerousInput: string) {
    window.addEventListener('message', function(e) {
      document.getElementById('vulnerableId').innerHTML = e.data;
    });
    window.postMessage(dangerousInput,'*')
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
    this.loadInput(this.route.snapshot.queryParams['webMessage']);
  }

  rule = {
    name: 'Web Message Manipulation',
    OWASP_Link: '',
    OWASP_Title: '',
    CWE_Link: '',
    CWE_Title: '',
    PortSwigger_Link: 'https://portswigger.net/web-security/dom-based/controlling-the-web-message-source',
    PortSwigger_Title: 'Controlling the web message source',
    description: `If a page handles incoming web messages in an unsafe way, for example, by not verifying the origin of incoming messages correctly in the event listener, properties and functions that are called by the event listener can potentially become sinks. For example, an attacker could host a malicious iframe and use the postMessage() method to pass web message data to the vulnerable event listener, which then sends the payload to a sink on the parent page. This behavior means that you can use web messages as the source for propagating malicious data to any of those sinks.`,
    sinks: `vulnerability webmessage-manipulation: <dom::Window>.postMessage(*) [~sanitized]
vulnerability webmessage-manipulation: <dom::Window>.postMessage(_, *) [~sanitized]
vulnerability webmessage-manipulation: <dom::Window>.postMessage(_, _, *) [~sanitized]`,
  };


  ngOnInit() {

  }

}
