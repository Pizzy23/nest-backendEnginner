import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class Message {
  @ApiProperty()
  message?: string;

  @ApiProperty()
  client: any;

  @ApiProperty()
  job?: any;
}
