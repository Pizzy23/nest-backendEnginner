import { ContractsEntity } from 'src/context/entity';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CepService } from 'src/util/cep/cep.service';

import { BaseService } from '../base/baseService';
import { InputCep, InputEmail } from 'src/view';

@Injectable()
export class PlusService extends BaseService {
  constructor(
    private readonly geo: CepService,
  ) {
    super();
  }
  async plusCode(input: InputCep) {
    return await this.geo.getPlusCode(input.cep)
  }
}
