import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farmaceutico } from '../domain/farmaceutico';

@Injectable({
  providedIn: 'root',
})
export class FarmaceuticoService {
  url = 'http://localhost:8080/farmaceutico/';

  constructor(private http: HttpClient) {}

  cegonha(): Observable<Farmaceutico> {
    return this.http.post<Farmaceutico>(this.url + 'cadastrar-random', {});
  }

  consultar(): Observable<Farmaceutico[]> {
    return this.http.get<Farmaceutico[]>(this.url + 'consultar');
  }

  excluir(id: string): Observable<Farmaceutico> {
    return this.http.delete<Farmaceutico>(this.url + 'remover/' + id);
  }
}
