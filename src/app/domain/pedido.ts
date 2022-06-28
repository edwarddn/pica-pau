import { Cliente } from './cliente';
import { Farmaceutico } from './farmaceutico';
import { Produto } from './produto';

export interface Pedido {
  id: string;
  cliente: Cliente;
  farmaceutico: Farmaceutico;
  produtos: Produto[];
  valor: number;
  valorPago: number;
  troco: number;
  data: Date;
  dataPagamento: Date;
  status: string;
}
