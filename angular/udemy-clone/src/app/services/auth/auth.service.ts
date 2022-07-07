import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { IUser } from '../../../models/user';
import {API_BASE_URL} from '../endpoints';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = API_BASE_URL + 'user';
  public userState = new BehaviorSubject<IUser|null>(null);

  constructor(private httpClient: HttpClient, private storageService: StorageService, private router: Router) {
  }

  login(login: {
    username: string,
    password: string
  }) {
    return this.httpClient.post<IUser>(`${this.baseUrl}/login`, login)
    .pipe(take(1))
    .subscribe((loginResponse: IUser) => {
      // TODO : Backend should return proper response here instead of empty object and this check for user.id should be
      // removed when this is fixed.
      if (loginResponse.id) {
        console.log(loginResponse);
        this.storageService.saveUser(loginResponse);
        this.router.navigate(['my-courses']);
        this.userState.next(loginResponse);
      } else {
        console.warn('unsuccessfull authentication');
      }
      return loginResponse;
    });
  }

  logout() {
    this.userState.next(null);
    this.storageService.signOut();
    this.router.navigate([''])
  }
}
