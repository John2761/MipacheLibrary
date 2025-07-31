import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from '../models/CategoriaModel';
import { BaseAPI } from '../base-api';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class CategoriaService extends BaseAPI<CategoriaModel>{

  constructor(httpClient: HttpClient) { 
        super(
          httpClient,
          environment.endPointCategoria);
      }

}
