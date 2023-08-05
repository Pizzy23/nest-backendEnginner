import { Module } from '@nestjs/common';
import { PrismaService } from 'src/config';
import { RegisterEntity } from './register/register.entity';
import { LoginEntity } from './login/login.entity';

@Module({
  exports: [PrismaService, RegisterEntity,LoginEntity],
  providers: [PrismaService, RegisterEntity,LoginEntity],
})
export class EntityModule {}
