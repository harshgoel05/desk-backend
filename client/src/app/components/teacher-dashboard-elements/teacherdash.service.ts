import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TeacherdashService {

  constructor(private http: HttpClient) { }
  BaseURL = environment.BaseURL;
  getClasslist() {
    let URL = this.BaseURL + 'class/';
    return this.http.get<any>(URL);
  }
  createClass(data) {
    let URL = this.BaseURL + 'class/new';
    return this.http.post<any>(URL,data);
  }
  deleteClass(data) {
    let URL = this.BaseURL + `class/remove/${data}`;
    return this.http.delete(URL);
  }
}
