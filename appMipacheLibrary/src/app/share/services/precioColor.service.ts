import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrecioColorModel } from '../models/PreciosModel';
import { BaseAPI } from '../base-api';

@Injectable({ providedIn: 'root' })
export class PrecioColorService extends BaseAPI<PrecioColorModel> {
  constructor(http: HttpClient) { super(http, 'precioColor'); }
}

