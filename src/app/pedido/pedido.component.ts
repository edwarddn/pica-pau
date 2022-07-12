import { Produto } from './../domain/produto';
import { Farmaceutico } from './../domain/farmaceutico';
import { PedidoService } from './../service/pedido.service';
import { Pedido } from './../domain/pedido';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Cliente } from '../domain/cliente';
import { ClienteService } from '../service/cliente.service';
import { FarmaceuticoService } from '../service/farmaceutico.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
})
export class PedidoComponent implements OnInit {
  pedidos: Pedido[] = [];
  clientes: Cliente[] = [];
  farmaceuticos: Farmaceutico[] = [];
  produtos: Produto[] = [];

  form: FormGroup = this.formBuilder.group({
    idCliente: new FormControl('', [Validators.required]),
    idFarmaceutico: new FormControl('', [Validators.required]),
  });

  formAddProduto: FormGroup = this.formBuilder.group({
    idPedido: new FormControl('', [Validators.required]),
    idProduto: new FormControl('', [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private farmaceuticoService: FarmaceuticoService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.consultarPedidos();
    this.consultarClientes();
    this.consultarFarmaceuticos();
    this.consultarProdutos();
  }

  private consultarPedidos(): void {
    this.pedidoService.consultar().subscribe((x) => {
      this.pedidos = x;
    });
  }

  private consultarClientes(): void {
    this.clienteService.consultar().subscribe((x) => {
      //this.clientes = x;
    });
  }

  private consultarFarmaceuticos(): void {
    this.farmaceuticoService.consultar().subscribe((x) => {
      this.farmaceuticos = x;
    });
  }

  private consultarProdutos(): void {
    this.produtoService.consultar().subscribe((x) => {
      this.produtos = x;
    });
  }

  cadastrar(): void {
    if (this.form.valid) {
      const idCliente = this.form.controls['idCliente'].value;
      const idFarmaceutico = this.form.controls['idFarmaceutico'].value;
      this.pedidoService
        .cadastrar(idCliente, idFarmaceutico)
        .subscribe((pedido: Pedido) => {
          this.pedidos.push(pedido);
          this.resetForm();
        });
    }
  }

  clickAddProduto(pedido: Pedido) {
    this.formAddProduto.controls['idPedido'].setValue(pedido.id);
  }

  addProduto(): void {
    if (this.formAddProduto.valid) {
      const idPedido = this.formAddProduto.controls['idPedido'].value;
      const idProduto = this.formAddProduto.controls['idProduto'].value;
      this.pedidoService.adicionarProduto(idPedido, idProduto).subscribe(() => {
        this.consultarPedidos();
        this.resetForm();
      });
    }
  }

  resetForm(): void {
    this.form.reset();
    this.form.controls['idCliente'].setValue('');
    this.form.controls['idFarmaceutico'].setValue('');

    this.formAddProduto.reset();
    this.formAddProduto.controls['idProduto'].setValue('');
  }
}
