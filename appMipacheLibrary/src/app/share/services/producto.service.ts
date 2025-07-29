import { Injectable } from '@angular/core';
import { ProductoModel } from '../models/ProductoModel';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from '../base-api';

@Injectable({
  providedIn: 'root',
})
export class ProductoService extends BaseAPI<ProductoModel> {
  private httpClientLocal: HttpClient;

  constructor(httpClient: HttpClient) {
    super(httpClient, environment.endPointProducto);
    this.httpClientLocal = httpClient;
  }

  crearResena(body: any) {
    const url = 'http://localhost:3000/resena'; // Ajustar si usás otro endpoint
    return this.httpClientLocal.post(url, body);
  }
  
}


