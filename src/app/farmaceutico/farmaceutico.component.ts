import { Farmaceutico } from './../domain/farmaceutico';
import { Component, OnInit } from '@angular/core';
import { FarmaceuticoService } from '../service/farmaceutico.service';

@Component({
  selector: 'app-farmaceutico',
  templateUrl: './farmaceutico.component.html',
  styleUrls: ['./farmaceutico.component.scss'],
})
export class FarmaceuticoComponent implements OnInit {
  lista: Farmaceutico[] = [];

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

  remover(fornecedor: Farmaceutico): void {
    this.farmaceuticoService.excluir(fornecedor.id).subscribe(() => {
      this.consultar();
    });
  }

  private consultar(): void {
    this.farmaceuticoService
      .consultar()
      .subscribe((mafalda: Farmaceutico[]) => {
        this.lista = mafalda;
      });
  }
}
