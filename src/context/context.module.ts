import { Module } from '@nestjs/common';
import {
  ChatService,
  BaseService,
  RegisterService,
  ArtService,
  PlusService,
  SignService,
} from './services';
import { LoginService } from './services/login/login.service';
import { EntityModule } from './entity/entity.module';
import {
  ArtController,
  CatController,
  LoginController,
  PlusController,
  RegisterController,
  SignController,
} from './controllers';
import { UtilModule } from 'src/util/util.module';
import { CatService } from './services/contracts/cat.service';

@Module({
  imports: [EntityModule, UtilModule],
  controllers: [
    LoginController,
    RegisterController,
    CatController,
    ArtController,
    SignController,
    PlusController,
  ],
  providers: [
    ChatService,
    BaseService,
    LoginService,
    RegisterService,
    ArtService,
    CatService,
    PlusService,
    SignService,
  ],
})
export class ContextModule {}
