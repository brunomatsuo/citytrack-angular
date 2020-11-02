import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servico } from '../../models/Servicos';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  url: string = 'https://citytrack-api.herokuapp.com/servicos';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.url)
      .pipe(map(data =>
        data.map((servico) => new Servico(
          servico.nome,
          servico.criadoPor,
          servico.tipo,
          servico.descricao,
          servico.status,
          servico.local,
          servico.foto,
          servico.dataCriacao,
          servico.dataModificacao
        ))
      )
    );
  }
}