import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KitchenService {
  constructor(private _http: HttpClient) {}
  save(data: any) {
    return this._http.post('http://localhost:8080/revelation', data);
  }

  findAll() {
    return this._http.get('http://localhost:8080/revelation');
  }

  findByKey(key: string) {
    return this._http.get(`http://localhost:8080/revelation/key?key=${key}`);
  }
}
