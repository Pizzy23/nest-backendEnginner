import { BaseService } from '../../services';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterEntity } from 'src/context/entity';
import { CpfVeri } from 'src/util/cpf';
import { InputInterface, RegisterInterface } from 'src/view';
import { CreateUserDto } from 'src/view/dto/register/register.dto';

@Injectable()
export class RegisterService extends BaseService {
  constructor(
    private repository: RegisterEntity,
    private uuidVeri: CpfVeri,
  ) {
    super();
  }
  async putInDb(input: CreateUserDto) {
    try {
      const pass = super.checkPassword(input.password, input.confirmPassword);
      const email = super.emailValidate(input.email);
      const uuidVeri = this.uuidVeri.verify(input.uuid);
      if (pass == true && email == true) {
        const crea = await this.createCreaSP();
        const data = {
          uuid: await super.encrypt(input.uuid),
          date: input.date,
          email: input.email,
          name: input.name,
          phone: input.phone,
          zip: input.zip,
          nickname: input.nickname,
          password: await super.encrypt(input.password),
          creaSP: crea,
        };
        await this.repository.putUserInDb(data);
        super.sendMail(
          input.email,
          this.text(data),
          'Seja bem-vindo à plataforma do CREASP, estimado engenheiro!',
        );
        return { res: 'User create', status: HttpStatus.CREATED };
      }
      throw new HttpException(
        'Pass or email not valid',
        HttpStatus.NOT_ACCEPTABLE,
        {
          cause: new Error('Pass or email not valid'),
        },
      );
    } catch (e) {
      if (e.message == 'Pass or email not valid') {
        throw new HttpException(
          'Pass or email not valid',
          HttpStatus.NOT_ACCEPTABLE,
          {
            cause: new Error('Pass or email not valid'),
          },
        );
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: new Error(e.message),
      });
    }
  }

  private async createCreaSP(): Promise<string> {
    const creaNew = (
      Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000
    ).toString();
    return creaNew;
  }
  private text(data: InputInterface): string {
    return `
    Prezado(a) ${data.nickname},\n
    
    É com grande satisfação que damos as boas-vindas à plataforma do Conselho Regional de Engenharia e Agronomia de São Paulo (CREASP)! Estamos empolgados em tê-lo(a) como membro desta comunidade de profissionais dedicados às áreas de engenharia e agronomia.
    Agora que você faz parte do CREASP, é com prazer que enviamos o seu CREASP ID, que será seu identificador único para acessar sua conta na plataforma:
    
    CREASP ID: ${data.creaSP}`;
  }
}
