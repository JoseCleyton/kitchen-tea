import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}
  save(data: any) {
    return this._http.post('https://kitchen-tea-api.herokuapp.com/auth/create', data);
  }

  authenticate(data: any) {
    return this._http.post('https://kitchen-tea-api.herokuapp.com/auth', data);
  }
}
