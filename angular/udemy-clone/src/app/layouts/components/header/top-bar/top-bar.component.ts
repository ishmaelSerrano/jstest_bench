import {Component, OnDestroy, OnInit} from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { IUser } from 'src/models/user';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, OnDestroy {

  public user: IUser = null;
  userStateSubscription = new Subscription();

  constructor(private storageService: StorageService, private authService: AuthService) { }

  getShortName = (name: string) => {
    const matches = name.match(/\b(\w)/g);
    return matches.join('');
  }

  ngOnInit() {
    this.userStateSubscription = this.authService.userState.subscribe(userState => this.user = userState);
  }

  ngOnDestroy() {
    this.userStateSubscription.unsubscribe();
  }

}
