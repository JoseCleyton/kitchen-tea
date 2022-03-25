import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GiftSuggestionService {
  constructor(private _http: HttpClient) {}

  save(data: any) {
    return this._http.post('http://localhost:8080/gift-suggestion', data);
  }

  findAll() {
    return this._http.get('http://localhost:8080/gift-suggestion');
  }

  findByRevelationId(revelationId: number) {
    return this._http.get(
      `http://localhost:8080/gift-suggestion/revelation?revelationId=${revelationId}`
    );
  }
}
