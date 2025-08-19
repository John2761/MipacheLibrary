import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseAPI } from '../base-api';
import { PromocionModel } from '../models/PromocionModel';

@Injectable({
  providedIn: 'root',
})
export class PromocionService extends BaseAPI<PromocionModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'promocion');
  } 
}
