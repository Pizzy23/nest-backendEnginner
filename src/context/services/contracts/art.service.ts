import { ContractsEntity } from 'src/context/entity';
import { BaseService } from '../../services';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ArtFormData, artInfos, ArtDb } from 'src/view';
import { CepService } from 'src/util/cep/cep.service';
import { ContractsService } from './contracts.service';

@Injectable()
export class ArtService extends ContractsService {
  constructor(
    private readonly repo: ContractsEntity,
    geo: CepService,
  ) {
    super(geo);
  }
  async artContract(data: ArtFormData) {
    const isValid = await this.validationsArt(data);
    if (isValid == true) {
      data.numberArt = await this.artGenerator();
      await this.repo.putArt(data);
      return { res: 'Art foi criado com sucesso', status: HttpStatus.CREATED };
    }
  }
  async artGenerator(): Promise<string> {
    const random = Math.floor(Math.random() * 9000000000) + 1000000000;
    const randomString = random.toString();
    const artExist = await this.repo.getArt(randomString);
    if (artExist) {
      await this.artGenerator();
    }
    return randomString;
  }

  async getInfos(data: artInfos): Promise<ArtDb | void> {
    return await this.repo.getUser(data.cpf || data.email);
  }
}
