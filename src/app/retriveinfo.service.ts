import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Retriveinfo {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>("http://localhost:3000/Latest-Progress")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getJobdata() {
    return this.http.get<any>("http://localhost:3000/Sample-jobs")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getRecvid() {
    return this.http.get<any>("http://localhost:3000/Videos-links")
      .pipe(map((res: any) => {
        return res;
      }))
  }


  getProData() {
    return this.http.get<any>("http://localhost:3000/Profile")
      .pipe(map((res: any) => {
        return res;
      }))
  }
}

