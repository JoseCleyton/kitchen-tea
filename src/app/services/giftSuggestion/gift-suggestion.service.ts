import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from 'src/app/shared/constants/url_api.enum';

@Injectable({
  providedIn: 'root',
})
export class GiftSuggestionService {
  constructor(private _http: HttpClient) {}

  save(data: any) {
    return this._http.post(`${URL.URL_API}/gift-suggestion`, data);
  }

  findAll() {
    return this._http.get(`${URL.URL_API}/gift-suggestion`);
  }

  findByRevelationId(revelationId: number) {
    return this._http.get(
      `${URL.URL_API}/gift-suggestion/revelation?revelationId=${revelationId}`
    );
  }
}
