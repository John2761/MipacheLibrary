import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrecioMaterialModel } from '../models/PreciosModel';
import { BaseAPI } from '../base-api';

@Injectable({ providedIn: 'root' })
export class PrecioMaterialService extends BaseAPI<PrecioMaterialModel> {
  constructor(http: HttpClient) { super(http, 'precioMaterial'); }
}