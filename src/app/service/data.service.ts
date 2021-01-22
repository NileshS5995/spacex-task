import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient,) { }

  getList() {
    return new Observable((observer) => {
      this.http.get('https://api.spacexdata.com/v3/launches?limit=100').subscribe((res) => {
        observer.next(res);
    }, (err) => {
    });
    });
  }
}
