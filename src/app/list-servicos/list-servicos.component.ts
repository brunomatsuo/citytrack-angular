import { Component, OnInit } from '@angular/core';
import { Servico } from '../../models/Servicos';
import { ServicoService } from '../providers/servico.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-servicos',
  templateUrl: './list-servicos.component.html',
  styleUrls: ['./list-servicos.component.scss']
})
export class ListServicosComponent implements OnInit {

  servicos: Observable<Servico[]>

  constructor(private servicoService: ServicoService) {}

  ngOnInit() {
    this.servicos = this.servicoService.getAll();
  }

}
