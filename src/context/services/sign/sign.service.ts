import { ContractsEntity } from 'src/context/entity';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CepService } from 'src/util/cep/cep.service';

import { BaseService } from '../base/baseService';
import { InputEmail } from 'src/view';

@Injectable()
export class SignService extends BaseService {
  constructor(
    private readonly repo: ContractsEntity,
    private readonly geo: CepService,
  ) {
    super();
  }
  async signDocs(input: InputEmail) {
    throw new HttpException('NOT IMPLEMENTED', HttpStatus.NOT_IMPLEMENTED, {
      cause: new Error(`Por enquanto não foi adicionado.`),
    });
  }
}
