import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

import { IUser } from 'src/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public user: IUser = null;
  userStateSubscription = new Subscription();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userStateSubscription = this.authService.userState.subscribe(userState => this.user = userState);
  }

}
