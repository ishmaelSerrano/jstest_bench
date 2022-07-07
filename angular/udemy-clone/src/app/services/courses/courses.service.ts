import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_BASE_URL} from '../endpoints';
import {Observable} from 'rxjs';
import {ICourse} from '../../../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private baseUrl = API_BASE_URL + 'courses';

  constructor(private httpClient: HttpClient) { }

  public getCourses(category: string) {
    return this.httpClient.get(`${this.baseUrl}?category=${category}`);
  }

  getCourseById(id: number): Observable<ICourse> {
    return this.httpClient.get<ICourse>(`${API_BASE_URL}course/${id}`);
  }
}
