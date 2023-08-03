import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, IsOptional, IsString } from 'class-validator';

export class ArtDto {
  @IsNotEmpty()
  @ApiProperty()
  responsibleTechnical: string;

  @IsNotEmpty()
  @ApiProperty()
  contractedCompany: string;

  @IsNotEmpty()
  @ApiProperty()
  companyRegistration: string;

  @IsNotEmpty()
  @ApiProperty()
  contractor: string;

  @IsNotEmpty()
  @ApiProperty()
  contractorCnpjCpf: string;

  @IsNotEmpty()
  @ApiProperty()
  contractorAddress: string;

  @IsNotEmpty()
  @ApiProperty()
  contractNumber: string;

  @IsNotEmpty()
  @ApiProperty()
  contractDate: Date;

  @IsNotEmpty()
  @ApiProperty()
  contractValue: string;

  @IsNotEmpty()
  @ApiProperty()
  contractorType: string;

  @IsNotEmpty()
  @ApiProperty()
  vinculation: string;

  @IsNotEmpty()
  @ApiProperty()
  institutionalAction: string;

  @IsNotEmpty()
  @ApiProperty()
  workServiceAddress: string;

  @IsNotEmpty()
  @ApiProperty()
  startDate: Date;

  @IsNotEmpty()
  @ApiProperty()
  estimatedCompletionDate: Date;

  @IsNotEmpty()
  @ApiProperty()
  coordinates: string;

  @IsNotEmpty()
  @ApiProperty()
  purpose: string;

  @IsNotEmpty()
  @ApiProperty()
  registrationCode: string;

  @IsNotEmpty()
  @ApiProperty()
  owner: string;

  @IsNotEmpty()
  @ApiProperty()
  ownerCnpjCpf: string;

  @IsNotEmpty()
  @ApiProperty()
  administrativeUnit: string;

  @IsNotEmpty()
  @ApiProperty()
  levelOfEngagement: string;

  @IsNotEmpty()
  @ApiProperty()
  professionalActivity: string;

  @IsNotEmpty()
  @ApiProperty()
  workService: string;

  @IsNotEmpty()
  @ApiProperty()
  complement: string;

  @IsNotEmpty()
  @ApiProperty()
  quantity: string;

  @IsNotEmpty()
  @ApiProperty()
  observations: string;

  @ApiProperty()
  arbitrationClause: boolean;

  @ApiProperty()
  accessibility: boolean;

  @ApiProperty()
  signaturesValid: boolean;

  @ApiProperty()
  professionalAndContractorSignatures: boolean;

  @IsNotEmpty()
  @ApiProperty()
  vinculationStartDate: Date;

  @IsNotEmpty()
  @ApiProperty()
  vinculationEndDate: Date;

  @IsNotEmpty()
  @ApiProperty()
  vinculationType: string;

  @IsNotEmpty()
  @ApiProperty()
  functionDesignation: string;

  @IsNotEmpty()
  @ApiProperty()
  administrativeUnitAddress: string;

  @ApiProperty()
  generalObservations: string;
}
export class GetInfos {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  cpf?: string;
}
