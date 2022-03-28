import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from 'src/app/shared/constants/url_api.enum';

@Injectable({
  providedIn: 'root',
})
export class KitchenService {
  constructor(private _http: HttpClient) {}
  save(data: any) {
    return this._http.post(`${URL.URL_API}/revelation`, data);
  }

  findAll() {
    return this._http.get(`${URL.URL_API}/revelation`);
  }

  findByKey(key: string) {
    return this._http.get(`${URL.URL_API}/revelation/key?key=${key}`);
  }

  edit(data: any) {
    return this._http.put(`${URL.URL_API}/revelation/`, data);
  }

  delete(id: number) {
    console.log(id);
    return this._http.delete(`${URL.URL_API}/revelation/${id}`);
  }
}
