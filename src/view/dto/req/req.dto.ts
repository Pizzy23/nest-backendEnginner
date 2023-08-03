import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';

@Injectable()
export class InputEmail {
  @ApiProperty()
  @IsString()
  email: string;
}
@Injectable()
export class InputCep {
  @ApiProperty()
  @IsString()
  cep: string;
}
