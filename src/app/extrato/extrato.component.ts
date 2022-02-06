import {Component, OnInit} from '@angular/core';
import {Transferencia} from "../domain/Transferencia";
import {TransferenciaService} from "../services/transferencia.service";
import {StatusMessage} from "../domain/StatusMessage";
import {StatusMessageMapper} from "../domain/mapper/StatusMessageMapper";

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  listaTransferencias: Transferencia[];
  statusMessage: StatusMessage;

  constructor(private TransferenciaService: TransferenciaService) {
    this.statusMessage = new StatusMessage();
  }

  ngOnInit(): void {
    this.TransferenciaService.listar().subscribe(
      (transferencias) => {
        this.statusMessage.visivel = false;
        this.listaTransferencias = transferencias;
      }, (error) => {
        this.statusMessage = StatusMessageMapper.erro(error.message);
      });
  }

}
