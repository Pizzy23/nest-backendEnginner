import { Module } from '@nestjs/common';
import {
  BaseService,
  PdfService,
  RegisterService,
  ChatService,
  PdfConverterService,
} from './services';
import { LoginService } from './services/login/login.service';
import { EntityModule } from './entity/entity.module';
import {
  LoginController,
  PdfController,
  RegisterController,
} from './controllers';
import { UtilModule } from 'src/util/util.module';

@Module({
  imports: [
    EntityModule,
    UtilModule,
  ],
  controllers: [LoginController, RegisterController, PdfController],
  providers: [
    BaseService,
    LoginService,
    RegisterService,
    PdfService,
    ChatService,
    PdfConverterService,
  ],
})
export class ContextModule {}
