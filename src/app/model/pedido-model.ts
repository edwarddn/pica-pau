import {ClienteModel} from "./cliente-model";
import {FarmaceuticoModel} from "./farmaceutico-model";
import {ProdutoModel} from "./produto-model";

export interface PedidoModel {
  id: string;
  cliente: ClienteModel;
  farmaceutico: FarmaceuticoModel;
  produtos: Array<ProdutoModel>;
  valor: number;
  valorPago: number;
  troco: number;
  data: Date;
  dataPagamento: Date;
  status: string;
}
