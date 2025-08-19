import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseAPI } from '../base-api';
import { PrecioTamannoModel } from '../models/PreciosModel';

@Injectable({ providedIn: 'root' })
export class PrecioTamannoService extends BaseAPI<PrecioTamannoModel> {
  constructor(http: HttpClient) { super(http, 'precioTamanno'); }
}
