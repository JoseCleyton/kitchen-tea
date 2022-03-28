import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from 'src/app/shared/constants/url_api.enum';

@Injectable({
  providedIn: 'root',
})
export class GiftService {
  constructor(private _http: HttpClient) {}

  save(data: any) {
    return this._http.post(`${URL.URL_API}/gift'`, data);
  }

  findByGuestName(guestName: string) {
    return this._http.get(`${URL.URL_API}/gift/guest?guestName=${guestName}`);
  }

  findAll() {
    return this._http.get(`${URL.URL_API}/gift`);
  }
}
