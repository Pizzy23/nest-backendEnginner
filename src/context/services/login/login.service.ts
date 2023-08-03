import { BaseService } from '../../services';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PutLogin, PutLogout } from '../../../view';
import { LoginEntity } from 'src/context/entity';

@Injectable()
export class LoginService extends BaseService {
  constructor(private repository: LoginEntity) {
    super();
  }
  async putLogin(putLogin: PutLogin) {
    try {
      const user = await this.repository.getUser(putLogin.uuid);
      const compare = await super.compare(putLogin.password, user.password);
      if (compare == true) {
        await this.repository.putLogin(putLogin.uuid);
        return { res: 'User logged in', status: HttpStatus.OK };
      }
      throw new HttpException('Pass  not valid', HttpStatus.NOT_ACCEPTABLE, {
        cause: new Error('Pass not valid'),
      });
    } catch (err) {
      if (err.message == 'Pass  not valid') {
        throw new HttpException('Pass  not valid', HttpStatus.NOT_ACCEPTABLE, {
          cause: new Error('Pass  not valid'),
        });
      }
      throw new Error(err);
    }
  }
  async putLogout(putLogout: PutLogout) {
    try {
      await this.repository.putLogout(putLogout.uuid);
      return { res: 'User logged out', status: HttpStatus.OK };
    } catch (err) {
      throw new Error(err);
    }
  }
}
