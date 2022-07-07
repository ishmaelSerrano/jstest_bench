import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(public storage: StorageService, public router: Router) { }

  canActivate(): boolean {
    if (!this.storage.getUser()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
