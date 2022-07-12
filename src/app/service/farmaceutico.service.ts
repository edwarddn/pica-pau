import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farmaceutico } from '../domain/farmaceutico';
import {FarmaceuticoModel} from "../model/farmaceutico-model";

@Injectable({
  providedIn: 'root',
})
export class FarmaceuticoService {
  url = 'http://localhost:8080/farmaceutico/';

  constructor(private http: HttpClient) {}

  cegonha(): Observable<FarmaceuticoModel> {
    return this.http.post<FarmaceuticoModel>(this.url + 'cadastrar-random', {});
  }

  consultar(): Observable<FarmaceuticoModel[]> {
    return this.http.get<FarmaceuticoModel[]>(this.url + 'consultar');
  }

  excluir(id: string): Observable<FarmaceuticoModel> {
    return this.http.delete<FarmaceuticoModel>(this.url + 'remover/' + id);
  }
}
