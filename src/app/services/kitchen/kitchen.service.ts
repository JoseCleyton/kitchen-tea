import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KitchenService {
  constructor(private _http: HttpClient) {}
  save(data: any) {
    return this._http.post('https://kitchen-tea-api.herokuapp.com/revelation', data);
  }

  findAll() {
    return this._http.get('https://kitchen-tea-api.herokuapp.com/revelation');
  }

  findByKey(key: string) {
    return this._http.get(`https://kitchen-tea-api.herokuapp.com/revelation/key?key=${key}`);
  }
}
