import { Module } from '@nestjs/common';
import { CpfVeri } from './cpf';
import { DateManipulator } from './date';
import { CepService } from './cep/cep.service';

@Module({
  exports: [CpfVeri, DateManipulator,CepService],
  providers: [CpfVeri, DateManipulator,CepService],
})
export class UtilModule {}
