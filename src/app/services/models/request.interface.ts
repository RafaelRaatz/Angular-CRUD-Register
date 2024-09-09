export interface Requester {
  ds_responsavel: string;
  nu_cpf: string;
  date_nascimento: string;
}

export interface Address {
  co_cep: number;
  ds_logradouro: string;
  co_numero: string;
  ds_complemento: string | null;
  ds_bairro: string;
  ds_municipio: string;
  co_uf: string;
}

export interface Company {
  ds_nome_fantasia: string;
  co_entidade_registro: number;
  co_natureza_juridica: number;
  endereco: Address;
}

export interface Request {
  solicitante: Requester;
  empresa: Company;
  id?: string;
}

export interface CreateRequest {
  solicitante: Requester;
  empresa: Company;
  id: string;
}
