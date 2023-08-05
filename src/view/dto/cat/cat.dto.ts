import { ApiProperty } from "@nestjs/swagger";

export class ObraDto {
    @ApiProperty()
    dataInicioObra: Date;
    @ApiProperty()
    dataFinalObra: Date;
    @ApiProperty()
    nomeContratante: string;
    @ApiProperty()
    cpfCnpj: string;
    @ApiProperty()
    pessoaJuridica: boolean;
    @ApiProperty()
    numeroArt: string;
  }