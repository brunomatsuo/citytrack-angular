export class Servico {
  constructor(
    public nome: string,
    public criadoPor: string,
    public tipo: string,
    public descricao: string,
    public status: string,
    public local: object,
    public foto: string,
    public dataCriacao: Date,
    public dataModificacao?: Date
  ) { }
}