import { BaseService } from '../../services';
import { Injectable } from '@nestjs/common';
import { ChatInput } from '../../../view';
import {
  CAT_OR_ART,
  CAT_ART,
  STARTER_RESPONSE,
} from 'src/view/constants/chat/chat.constants';

@Injectable()
export class ChatService extends BaseService {
  msg: string;
  starter: string;
  constructor() {
    super();
  }
  async chatRes(body: ChatInput) {
    if (this.starter) {
      this.supportRes(body.msg);
    }
    if (CAT_ART.includes(body.msg) && this.starter == '1') {
      return this.catAndArt(body.msg);
    }
    if (STARTER_RESPONSE.includes(body.msg)) {
      return this.supportResStarter(body.msg);
    }
  }
  private supportRes(msg: string) {
    switch (msg) {
      case '2':
        return 'Estamos progredindo na criação desse sistema, obrigada por entender ';
      case '5':
        return 'Estamos progredindo na criação desse sistema, obrigada por entender ';
    }
  }

  private catAndArt(msg: string) {
    const msgLower = msg.toLowerCase();
    switch (msgLower) {
      case 'art':
        return CAT_OR_ART.ART;
      case 'cat':
        return CAT_OR_ART.CAT;
    }
  }

  private async supportResStarter(msg: string) {
    switch (msg) {
      case '1':
        this.starter = msg;
        return 'Claro! Estou aqui para ajudar. Por favor, digite sua dúvida, e eu farei o meu melhor para esclarecê-la.';
      case '2':
        this.starter = msg;
        return 'Com certeza! Por favor, informe o número da consulta que você deseja, e eu irei providenciar as informações necessárias.';
      case '3':
        this.starter = msg;
        return 'Eba! Vamos enviar as vantagens para você no email! Fique atento, pois temos informações interessantes para compartilhar. Se precisar de mais detalhes ou tiver alguma dúvida, é só dizer! Estamos aqui para te ajudar a aproveitar ao máximo todas as vantagens.        ';
      case '4':
        this.starter = msg;
        return 'Com certeza! O local mais próximo encontra-se no seguinte endereço: Av. Brig. Faria Lima, 1059 - Pinheiros, São Paulo - SP, 01452-000. Se precisar de mais informações sobre como chegar ou qualquer outra coisa, estou à disposição para ajudar!';
      case '5':
        this.starter = msg;
        return 'Agradecemos por utilizar o nosso sistema de denúncias! Para que possamos prosseguir, por favor, forneça mais detalhes sobre a denúncia. Estamos aqui para ouvi-lo e tomar as medidas adequadas. Sua colaboração é fundamental para garantir a integridade e segurança de nossa comunidade. Conte-nos mais para que possamos agir de forma eficiente. Muito obrigada!';
      case '6':
        this.starter = msg;
        return 'Ah, que pena! Infelizmente, no momento não temos nenhum assistente do CREA disponível para ajudar. Por favor, tente novamente mais tarde. Pedimos desculpas pela inconveniência e agradecemos a sua compreensão. Se houver algo mais em que possamos ajudar, não hesite em nos contatar. Estamos aqui para atender às suas necessidades. Tenha um ótimo dia!';
      default:
        this.starter = msg;
        return `
        1. Duvida Especifica.
        2. Consulta de OBRA.
        3. Clube de Vantanges.
        4. Me indique um LAB proximo de mim.
        5. Denuncia.
        6. Converse com o nosso assistente da CREA.
        `;
    }
  }
}
