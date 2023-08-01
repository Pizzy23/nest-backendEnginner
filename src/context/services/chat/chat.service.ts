import { BaseService } from '../../services';
import { Injectable } from '@nestjs/common';
import { ChatInput } from '../../../view';

@Injectable()
export class ChatService extends BaseService {
  constructor() {
    super();
  }
  async supportRes(body: ChatInput) {
    const msg = body.msg.toLowerCase();
    switch (msg) {
      case 'cat':
        return 'CAT é o conjunto das atividades técnicas desenvolvidas ao longo da vida do profissional, compatível com suas atribuições e registradas no Crea por meio de ART - Anotações de Responsabilidade Técnica. Pertence sempre e exclusivamente ao profissional que registrou a ART da obra/serviço realizado e nunca à empresa. A capacidade técnico-profissional de uma pessoa jurídica é representada pelo conjunto dos acervos técnicos dos profissionais integrantes de seu quadro técnico.';
      case 'art':
        return 'a ART - Anotação de Responsabilidade Técnica é o instrumento que define, para os efeitos legais, os responsáveis técnicos pela execução de obras ou prestação de serviços relativos às profissões abrangidas pelo Sistema Confea/Crea.';
    }
  }
}
