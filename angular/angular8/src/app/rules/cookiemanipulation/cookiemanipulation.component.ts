import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cookiemanipulation',
  templateUrl: './cookiemanipulation.component.html',
  styleUrls: ['./cookiemanipulation.component.css']
})
export class CookiemanipulationComponent implements OnInit {
  cookies;
  constructor(
    private route: ActivatedRoute
  ) { }

  loadInput(dangerousCookieInput: string) {
		document.cookie = `userName=${dangerousCookieInput}`
    this.cookies = this.getCookiesMap(document.cookie);
  }

  // checkForCookie(name: string) {
  //   let cookieString = document.cookie.match(name + '=[^;]+')
  //   return cookieString ? cookieString[0] : cookieString
  // }

  getCookiesMap(cookiesString: string) {
    return cookiesString.split(";")
      .map(function(cookieString) {
          return cookieString.trim().split("=");
      })
      .reduce(function(acc, curr) {
          acc[curr[0]] = curr[1];
          return acc;
      }, {});
  }

  loadHash() {
    this.loadInput(this.route.snapshot.queryParams['userName']);
  }

  ngOnInit(): void {
    this.cookies = this.getCookiesMap(document.cookie);
    console.log(this.cookies);
  }

}
