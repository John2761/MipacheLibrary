import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

export interface CategoriaModel {
  id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private baseUrl = `${environment.apiURL}/categoria`;

  constructor(private http: HttpClient) {}

  get(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(this.baseUrl);
  }
}
=======
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
>>>>>>> 72ba020929ec3235577a6a8eb92ec25848597e10
