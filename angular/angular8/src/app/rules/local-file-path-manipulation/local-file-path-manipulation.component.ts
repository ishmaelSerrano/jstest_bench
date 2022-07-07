import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-local-file-path-manipulation',
  templateUrl: './local-file-path-manipulation.component.html',
  styleUrls: ['./local-file-path-manipulation.component.css']
})
export class LocalFilePathManipulationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  readFiles(event) {
    var fileList = event.target.files;
    console.log(fileList);
  }

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
    name: 'Local File Path Manipulation',
    OWASP_Link: 'https://owasp.org/www-community/attacks/Path_Traversal',
    OWASP_Title: 'Path Traversal',
    CWE_Link: 'https://cwe.mitre.org/data/definitions/73.html',
    CWE_Title: 'CWE-73: External Control of File Name or Path',
    PortSwigger_Link: 'https://portswigger.net/web-security/dom-based/local-file-path-manipulation',
    PortSwigger_Title: 'DOM-based local file-path manipulation',
    description: `Local file-path manipulation vulnerabilities arise when a script passes attacker-controllable data to a file-handling API as the filename parameter. An attacker may be able to use this vulnerability to construct a URL that, if visited by another user, will cause the user's browser to open an arbitrary local file.`,
    sinks: `vulnerability filepath-manipulation: <dom::FileReader>.readAsArrayBuffer(*)  [~sanitized]
vulnerability filepath-manipulation: <dom::FileReader>.readAsBinaryString(*) [~sanitized]
vulnerability filepath-manipulation: <dom::FileReader>.readAsDataURL(*)      [~sanitized]
vulnerability filepath-manipulation: <dom::FileReader>.readAsText(*)         [~sanitized]`,
  };

  ngOnInit() {
  }

}
