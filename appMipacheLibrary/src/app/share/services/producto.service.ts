import { Injectable } from '@angular/core';
import { ProductoModel } from '../models/ProductoModel';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from '../base-api';

@Injectable({
  providedIn: 'root',
})
export class ProductoService extends BaseAPI<ProductoModel> {
    constructor(httpClient: HttpClient) {
    super(httpClient, environment.endPointProducto);
  }
}
