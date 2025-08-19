import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseAPI } from '../base-api';
import { PersonalizadoModel } from '../models/PersonalizadoModel';

@Injectable({
  providedIn: 'root',
})
export class PersonalizadoService extends BaseAPI<PersonalizadoModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'personalizado');
  } 
}
