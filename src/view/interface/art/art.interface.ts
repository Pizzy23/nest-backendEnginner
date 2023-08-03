import { Decimal } from "@prisma/client/runtime/library";
export interface ArtFormData {
  numberArt?: string;
  responsibleTechnical: string;
  contractedCompany: string;
  companyRegistration: string;
  contractor: string;
  contractorCnpjCpf: string;
  contractorAddress: string;
  contractNumber: string;
  contractDate: Date;
  contractValue: string;
  contractorType: string;
  vinculation: string;
  institutionalAction: string;
  workServiceAddress: string;
  startDate: Date;
  estimatedCompletionDate: Date;
  coordinates: string;
  purpose: string;
  registrationCode: string;
  owner: string;
  ownerCnpjCpf: string;
  administrativeUnit: string;
  levelOfEngagement: string;
  professionalActivity: string;
  workService: string;
  complement: string;
  quantity: string;
  observations: string;
  arbitrationClause: boolean;
  accessibility: boolean;
  signaturesValid: boolean;
  professionalAndContractorSignatures: boolean;
  vinculationStartDate: Date;
  vinculationEndDate: Date;
  vinculationType: string;
  functionDesignation: string;
  administrativeUnitAddress: string;
  generalObservations: string;
}


export interface ArtDb {
  id: number;
  numberArt: string;
  responsibleTechnical: string;
  contractedCompany: string;
  companyRegistration: string;
  contractor: string;
  contractorCnpjCpf: string;
  contractorAddress: string;
  contractNumber: string;
  contractDate: Date;
  contractValue: Decimal;
  contractorType: string;
  vinculation: string;
  institutionalAction: string;
  workServiceAddress: string;
  startDate: Date;
  estimatedCompletionDate: Date;
  coordinates: string;
  purpose: string;
  registrationCode: string;
  owner: string;
  ownerCnpjCpf: string;
  administrativeUnit: string;
  levelOfEngagement: string;
  professionalActivity: string;
  workService: string;
  complement: string;
  quantity: string;
  observations: string;
  arbitrationClause: boolean;
  accessibility: boolean;
  signaturesValid: boolean;
  professionalAndContractorSignatures: boolean;
  vinculationStartDate: Date;
  vinculationEndDate: Date;
  vinculationType: string;
  functionDesignation: string;
  administrativeUnitAddress: string;
  generalObservations: string;
}

export interface artInfos{
  email?:string;
  cpf?:string;
}