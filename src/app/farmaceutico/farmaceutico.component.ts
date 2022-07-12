import { Farmaceutico } from './../domain/farmaceutico';
import { Component, OnInit } from '@angular/core';
import { FarmaceuticoService } from '../service/farmaceutico.service';
import {FarmaceuticoModel} from "../model/farmaceutico-model";

@Component({
  selector: 'app-farmaceutico',
  templateUrl: './farmaceutico.component.html',
  styleUrls: ['./farmaceutico.component.scss'],
})
export class FarmaceuticoComponent implements OnInit {
  lista: FarmaceuticoModel[] = [];

  constructor(private farmaceuticoService: FarmaceuticoService) {}

  ngOnInit(): void {
    this.consultar();
  }

  cadastrar(): void {}

  cegonha(): void {
    this.farmaceuticoService.cegonha().subscribe(() => {
      this.consultar();
    });
  }

  remover(fornecedor: FarmaceuticoModel): void {
    this.farmaceuticoService.excluir(fornecedor.id).subscribe(() => {
      this.consultar();
    });
  }

  private consultar(): void {
    this.farmaceuticoService
      .consultar()
      .subscribe((mafalda: FarmaceuticoModel[]) => {
        this.lista = mafalda;
      });
  }
}
