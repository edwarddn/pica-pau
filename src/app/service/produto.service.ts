import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../domain/produto';
import { ProdutoModel } from '../model/produto-model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  url = 'http://localhost:8080/produto/';

  constructor(private http: HttpClient) {}

  cadastrar(model: ProdutoModel): Observable<ProdutoModel> {
    return this.http.post<ProdutoModel>(this.url + 'cadastrar', model);
  }

  alterar(model: ProdutoModel): Observable<ProdutoModel> {
    return this.http.put<ProdutoModel>(this.url + 'alterar', model);
  }

  consultar(): Observable<ProdutoModel[]> {
    return this.http.get<ProdutoModel[]>(this.url + 'consultar');
  }

  remover(id: string): Observable<ProdutoModel> {
    return this.http.delete<ProdutoModel>(this.url + 'remover/' + id);
  }
}
