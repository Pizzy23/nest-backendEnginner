import { Module } from '@nestjs/common';
import {
  ChatService,
  BaseService,
  RegisterService,
  ArtService,
} from './services';
import { LoginService } from './services/login/login.service';
import { EntityModule } from './entity/entity.module';
import {
  ArtController,
  CatController,
  LoginController,
  RegisterController,
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
  ],
  providers: [
    ChatService,
    BaseService,
    LoginService,
    RegisterService,
    ArtService,
    CatService,
  ],
})
export class ContextModule {}
