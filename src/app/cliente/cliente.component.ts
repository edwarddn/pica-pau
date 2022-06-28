import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Cliente } from '../domain/cliente';
import { ClienteModel } from '../model/cliente-model';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  list: Cliente[] = [];

  form: FormGroup = this.formBuilder.group({
    id: new FormControl(null),
    nome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    cpf: new FormControl(null, [Validators.required, Validators.minLength(11)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    niver: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.carregaTabela();
  }

  private carregaTabela(): void {
    this.clienteService.consultar().subscribe((domains: Cliente[]) => {
      this.list = domains;
    });
  }

  cadastrar(): void {
    const id = this.form.controls['id'].value;
    const clieteModel: ClienteModel = this.form.getRawValue();
    if (id) {
      this.clienteService
        .alterar(id, clieteModel)
        .subscribe((domain: Cliente) => {
          if (domain.id) {
            this.carregaTabela();
            this.form.reset();
          }
        });
    } else {
      this.clienteService
        .cadastrar(clieteModel)
        .subscribe((domain: Cliente) => {
          if (domain.id) {
            this.list.push(domain);
            this.form.reset();
          }
        });
    }
  }

  editar(cliente: Cliente): void {
    this.form.controls['id'].setValue(cliente.id);
    this.form.controls['nome'].setValue(cliente.nome);
    this.form.controls['cpf'].setValue(cliente.documento);
    this.form.controls['email'].setValue(cliente.email);
    this.form.controls['niver'].setValue(cliente.niver);
  }

  remover(cliente: Cliente): void {
    this.clienteService.remover(cliente.id).subscribe((c: Cliente) => {
      if (c.id) {
        this.carregaTabela();
      }
    });
  }
}
