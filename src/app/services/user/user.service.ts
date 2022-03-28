import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from 'src/app/shared/constants/url_api.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}
  save(data: any) {
    return this._http.post(`${URL.URL_API}/auth/create`, data);
  }

  authenticate(data: any) {
    return this._http.post(`${URL.URL_API}/auth`, data);
  }
}
