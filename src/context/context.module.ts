import { Module } from '@nestjs/common';
import { ChatService, BaseService, RegisterService } from './services';
import { LoginService } from './services/login/login.service';
import { EntityModule } from './entity/entity.module';
import { LoginController, RegisterController } from './controllers';
import { UtilModule } from 'src/util/util.module';

@Module({
  imports: [EntityModule, UtilModule],
  controllers: [LoginController, RegisterController],
  providers: [ChatService, BaseService, LoginService, RegisterService],
})
export class ContextModule {}
