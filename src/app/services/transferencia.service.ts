import {Injectable} from '@angular/core';
import {Transferencia} from "../domain/Transferencia";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private endpoint = "http://localhost:3000/v3/operacoes/transferencias";

  constructor(private transferenciaClient: HttpClient) {

  }

  public listar(): Observable<Transferencia[]> {
    return this.transferenciaClient.get<Transferencia[]>(this.endpoint);
  }

  public cadastrar(transerencia: Transferencia): Observable<Transferencia> {
    return this.transferenciaClient.post<Transferencia>(this.endpoint, transerencia);
  }

}
