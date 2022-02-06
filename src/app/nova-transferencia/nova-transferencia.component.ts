import {Component, OnInit} from '@angular/core';
import {Transferencia} from "../domain/Transferencia";
import {TransferenciaService} from "../services/transferencia.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent implements OnInit {

  transferencia: Transferencia;

  constructor(private transferenciaService: TransferenciaService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.transferencia = new Transferencia();
  }

  fazerTransferencia() {
    this.autoCompletarDados();
    this.transferenciaService.cadastrar(this.transferencia).subscribe(
      (resposta) => {
        this.router.navigateByUrl("extrato");
      },
      (error) => {
        console.table(error);
      });
  }

  private autoCompletarDados() {
    let agora = new Date();
    this.transferencia.id = agora.getTime();
    this.transferencia.data = agora.toLocaleDateString();
  }
}
