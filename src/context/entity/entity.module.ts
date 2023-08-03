import { Module } from '@nestjs/common';
import { ContractsEntity, LoginEntity, RegisterEntity } from '.';
import { PrismaService } from 'src/config';

@Module({
  exports: [PrismaService, LoginEntity, RegisterEntity, ContractsEntity],
  providers: [PrismaService, LoginEntity, RegisterEntity, ContractsEntity],
})
export class EntityModule {}
