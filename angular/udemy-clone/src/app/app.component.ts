import {Component, OnInit} from '@angular/core';
import {StorageService} from './services/storage/storage.service';
import {AuthService} from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'udemy-clone';

  constructor(private storageService: StorageService, private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.storageService.getUser()) {
      this.authService.userState.next(this.storageService.getUser());
    }
  }
}
