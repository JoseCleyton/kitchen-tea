import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GiftSuggestionService {
  constructor(private _http: HttpClient) {}

  save(data: any) {
    return this._http.post('https://kitchen-tea-api.herokuapp.com/gift-suggestion', data);
  }

  findAll() {
    return this._http.get('https://kitchen-tea-api.herokuapp.com/gift-suggestion');
  }

  findByRevelationId(revelationId: number) {
    return this._http.get(
      `https://kitchen-tea-api.herokuapp.com/gift-suggestion/revelation?revelationId=${revelationId}`
    );
  }
}
