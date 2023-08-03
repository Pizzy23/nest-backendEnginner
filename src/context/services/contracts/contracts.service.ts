import { ContractsEntity } from 'src/context/entity';
import { BaseService } from '../../services';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ArtDb, ArtDto, ArtFormData, CatDto } from 'src/view';
import { CepService } from 'src/util/cep/cep.service';
import { CpfVeri } from 'src/util/cpf';
@Injectable()
export class ContractsService extends BaseService {
  constructor(private readonly geo: CepService) {
    super();
  }
  async validationsArt(data: ArtFormData) {
    try {
      const cpfVeri = new CpfVeri();
      const date = new Date(super.date());
      const cpfValid = cpfVeri.verify(data.contractorCnpjCpf);
      const contractorLocationExist = this.geo.getAdressByCep(
        data.contractorAddress,
      );
      const workCepExist = this.geo.getAdressByCep(data.workServiceAddress);
      if (
        data.startDate < data.estimatedCompletionDate ||
        data.startDate < data.vinculationEndDate
      ) {
        throw new HttpException('Date', HttpStatus.NOT_ACCEPTABLE, {
          cause: new Error(
            `A data de finalização deve ser superior a ${data.startDate}`,
          ),
        });
      }
      if (data.contractDate > date) {
        throw new HttpException('Date', HttpStatus.NOT_ACCEPTABLE, {
          cause: new Error(
            `A data de contrato deve ser superior a data de hoje ${date}`,
          ),
        });
      }
      if (!contractorLocationExist) {
        throw new HttpException('Cep', HttpStatus.NOT_ACCEPTABLE, {
          cause: new Error(
            `CEP de contratado invalido, por favor insira um CEP valido`,
          ),
        });
      }
      if (!workCepExist) {
        throw new HttpException('Cep', HttpStatus.NOT_ACCEPTABLE, {
          cause: new Error(
            `CEP de trabalho invalido , por favor insira um CEP valido`,
          ),
        });
      }
      if (!cpfValid) {
        throw new HttpException('Cpf', HttpStatus.NOT_ACCEPTABLE, {
          cause: new Error(`Cpf é invalido.`),
        });
      }
      return true;
    } catch (e) {
      throw new HttpException(e.message, e.statusCode);
    }
  }
}
