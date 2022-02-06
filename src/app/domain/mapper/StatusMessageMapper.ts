import {StatusMessage} from "../StatusMessage";

export class StatusMessageMapper {

  private constructor() {

  }

  public static semRegistro(): StatusMessage {
    let statusMessage = new StatusMessage();
    statusMessage.className = "ui yellow icon message";
    statusMessage.icon = "search icon";
    statusMessage.title = "Nenhum Registro encontrado";
    statusMessage.content = "Não foi encontrado nenhum registro para ser exibido.";
    statusMessage.visivel = true;
    return statusMessage;
  }

  public static erro(message: string): StatusMessage {
    let statusMessage = new StatusMessage();
    statusMessage.className = "ui red icon message";
    statusMessage.icon = "😥";
    statusMessage.title = "Ops, Ocorreu um Erro";
    statusMessage.content = message;
    statusMessage.visivel = true;
    return statusMessage;
  }

}
