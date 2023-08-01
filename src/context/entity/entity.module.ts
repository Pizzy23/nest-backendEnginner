import { Module } from '@nestjs/common';
import { LoginEntity } from '.';
import { PrismaService } from 'src/config';
import { RegisterEntity } from './register/register.entity';

@Module({
  exports: [PrismaService, LoginEntity, RegisterEntity],
  providers: [PrismaService, LoginEntity, RegisterEntity],
})
export class EntityModule {}
