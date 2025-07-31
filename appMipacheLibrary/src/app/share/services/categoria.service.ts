import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { CategoriaModel } from '../models/CategoriaModel';


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
