export interface FarmaceuticoModel {
  id: string;
  nome: string;
  niver: Date;
  ofertaDia: string;
  cpf: string;
  idade?: string;
  documento?: string;
  documentoValido?: boolean;
}
