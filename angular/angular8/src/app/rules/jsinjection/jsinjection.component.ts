import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jsinjection',
  templateUrl: './jsinjection.component.html',
  styleUrls: ['./jsinjection.component.css']
})
export class JsinjectionComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  loadInput(dangerousString: string) {
		eval(dangerousString);
	}

  loadHash() {
    eval(this.route.snapshot.fragment);
  }

  checkForCookie() {
    const cookies = document.cookie.split(',').reduce((prev, current) => {
      const [name, ...value] = current.split('=');
      prev[name] = value.join('=');
      return prev;
    }, {});
    eval(cookies['username'])
  };

  ngOnInit() {
  }

}
