import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private http: Http) {
    this.http.get('/api/data.json').subscribe((value) => {
      this.result = value.json();
    });
  }
}
