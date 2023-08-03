import { ContractsEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CatDto, GetCatDto, StringResDTO } from 'src/view';
import { CepService } from 'src/util/cep/cep.service';
import { ContractsService } from './contracts.service';

@Injectable()
export class CatService extends ContractsService {
  constructor(
    private readonly repo: ContractsEntity,
    geo: CepService,
  ) {
    super(geo);
  }
  async catContract(data: CatDto): Promise<StringResDTO> {
    try {
      const artExist = await this.repo.getArt(data.artNumero);
      if (artExist) {
        await this.repo.putCat(data);
        return {
          res: 'Cat foi criado com sucesso',
          status: HttpStatus.CREATED,
        };
      }
      throw new HttpException('Art', HttpStatus.NOT_ACCEPTABLE, {
        cause: new Error(`Art não existe.`),
      });
    } catch (e) {
      throw new HttpException(e.message, e.statusCode);
    }
  }
  async catGenerator(): Promise<string> {
    const random = Math.floor(Math.random() * 9000000000) + 1000000000;
    const randomString = random.toString();
    const artExist = await this.repo.getCat(randomString);
    if (artExist) {
      await this.catGenerator();
    }
    return randomString;
  }
  async getCat(data: GetCatDto) {
    try {
      const cat = await this.repo.getCat(data.catNumber);
      if (cat) {
        return cat;
      }
      throw new HttpException('Cat', HttpStatus.NOT_ACCEPTABLE, {
        cause: new Error(`Cat não existe.`),
      });
    } catch (e) {
      throw new HttpException(e.message, e.statusCode);
    }
  }
}
