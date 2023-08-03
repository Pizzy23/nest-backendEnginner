import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { File } from 'buffer';
import {
  IsNotEmpty,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsBoolean,
} from 'class-validator';


export class CatDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  emailNotificacao: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TipoServico)
  tipoServico: TipoServico;

  @ApiProperty()
  @IsNotEmpty()
  artNumero: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  receberPorEmailCat: boolean;

  @ApiProperty()
  emailEnvioCat: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  periodoCertificadoDe: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  periodoCertificadoAte: string;

  @ApiProperty()
  @IsNotEmpty()
  existeContratoSubempreitada: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  informacoesSubempreitada?: string;

  @ApiProperty()
  @IsNotEmpty()
  declaracaoAtestado: string;

  @ApiProperty()
  @IsNotEmpty()
  execucaoObra: boolean;

  @ApiProperty()
  @IsNotEmpty()
  prestacaoServicos: boolean;

  @ApiProperty()
  @IsNotEmpty()
  termoResponsabilidade: boolean;

  @ApiProperty()
  @IsNotEmpty()
  entregaDocumento: string;

  @ApiProperty()
  @IsNotEmpty()
  atestadoEmitido: File;

  @ApiPropertyOptional()
  @IsOptional()
  comprovanteVinculo?: File;

  @ApiPropertyOptional()
  @IsOptional()
  outrosDocumentos?: File;

  @ApiPropertyOptional()
  @IsOptional()
  exclusivoExterior?: File;

  @ApiPropertyOptional()
  @IsOptional()
  laudoTecnico?: File;
}

export class GetCatDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  catNumber: string;
}