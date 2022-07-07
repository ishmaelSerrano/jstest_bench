import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, SecurityContext } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import postscribe from 'postscribe';
import * as $ from 'jquery';



@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.css']
})

@Injectable()
export class XssComponent implements OnInit, AfterViewInit {

  @ViewChild('subscriberNameInput', { static: false }) subscriberNameInput: ElementRef;
  @ViewChild('incomeInput', { static: false }) incomeInput: ElementRef;
  @ViewChild('incomeValueOutput', { static: false }) incomeValueOutput: ElementRef;
  @ViewChild('taxesValueOutput', { static: false }) taxesValueOutput: ElementRef;
  @ViewChild('tabset', { static: true }) tabset: any;

  username = "";
  activeIdString = "tab1";
  query = "";
  incomeValue = "0";
  public theoreticallySafeUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {

  }

  private parseHash() {
    let params = new HttpParams({ fromString: window.location.hash.substring(1) });
    var obj = {};
    for (var i = 0; i < params.keys().length; i++) {
      obj[params.keys()[i]] = decodeURI(params.get(params.keys()[i]));
    }
    return obj;
  }

  ngOnInit() {

    let hashObj = this.parseHash();
    if (hashObj['tab']) {
      this.activeIdString = hashObj['tab'];
    }
    if (hashObj['q']) {
      this.query = hashObj['q'];
    }

    switch (this.activeIdString) {
      case "tab2":
        this.incomeValue = this.query;
        break;
      default:
        break;
    }
  }

  ngAfterViewInit() {
    switch (this.activeIdString) {
      case "tab1":
        this.showSearchQuery(this.query);
        break;
      default:
        break;
    }
  }


  // private setTheoreticallySafeUrl(): void {
  //   let hash = window.location.hash.substring(1);
  //   this.theoreticallySafeUrl = this.sanitizer.bypassSecurityTrustUrl(hash);

  // }

  //Dcoument write using postscribe
  private searchForSubscriber() {
    let val = this.subscriberNameInput.nativeElement.value
    if (val) {
      window.location.hash = 'q=' + val
      this.showSearchQuery(val)
    }
  }

  private showSearchQuery(val) {
    postscribe('#searchQuery', val);
    $('#searchQuery').removeClass('hidden');
  }


  //nativeElement innerHtml
  private calculateIncomeAndTaxes() {
    let val = this.incomeInput.nativeElement.value
    if (val) {
      window.location.hash = 'tab=tab2&q=' + val
      this.incomeValue = val
      this.incomeValueOutput.nativeElement.innerHTML = this.incomeValue;

    }
  }

  //Wrong - no sanitize call
  private getIncome() {
    if (this.incomeValue) {

      let val = this.incomeValue
      //val = this.sanitizer.sanitize(SecurityContext.HTML, this.incomeValue);
      return this.sanitizer.bypassSecurityTrustHtml(val);
    }
  }

  //Correct
  private getTaxes() {
    if (this.incomeValue) {

      let val = "Your income for taxes: " + this.incomeValue
      val = this.sanitizer.sanitize(SecurityContext.HTML, this.incomeValue);
      return this.sanitizer.bypassSecurityTrustHtml(val);
    }
  }

}
