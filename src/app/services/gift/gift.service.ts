import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GiftService {
  constructor(private _http: HttpClient) {}

  save(data: any) {
    return this._http.post('https://kitchen-tea-api.herokuapp.com/gift', data);
  }

  findByGuestName(guestName: string) {
    return this._http.get(
      `https://kitchen-tea-api.herokuapp.com/gift/guest?guestName=${guestName}`
    );
  }

  findAll() {
    return this._http.get('https://kitchen-tea-api.herokuapp.com/gift');
  }
}
