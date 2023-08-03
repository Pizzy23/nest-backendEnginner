import { HttpException, Injectable } from '@nestjs/common';
import * as correios from 'correios-brasil';

@Injectable()
export class CepService {
  constructor() {}
  async getAdressByCep(cep: string): Promise<any> {
    try {
      await correios.consultarCep(cep);
      return true;
    } catch (error) {
      return false;
    }
  }
}
