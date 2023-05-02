import { Injectable } from '@angular/core';
import { AxiosPromise } from 'axios';
import http from './axios.instance';

export interface Headers {
  authentication: '';
}
@Injectable({
  providedIn: 'root',
})
export class Request {
  constructor() {}

  get(url: string) {
    return http.get(`${url}`);
  }
  post(url: string, data: any) {
    return http.post(`${url}`, data);
  }
}
