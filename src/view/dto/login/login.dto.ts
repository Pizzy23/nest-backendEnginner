import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@Injectable()
export class PutLogin {
  @ApiProperty()
  @IsString()
  uuid: string;

  @ApiProperty()
  @IsString()
  password: string;
}

@Injectable()
export class PutLogout {
  @ApiProperty()
  @IsString()
  uuid: string;
}
