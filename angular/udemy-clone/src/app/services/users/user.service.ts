import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICourse} from '../../../models/course';
import {Observable} from 'rxjs';
import {API_BASE_URL} from '../endpoints';

import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = API_BASE_URL + 'user';

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }

  myCourses(): Observable<ICourse[]> {
    const userId = this.storageService.getUser().id;
    return this.httpClient.post<ICourse[]>(`${this.baseUrl}/courses`, {userId});
  }
}
