import { Controller, Put, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginService } from 'src/context/services/login/login.service';
import { StringResDTO, PutLogin, StringRes, PutLogout } from 'src/view';

@ApiTags('Login')
@Controller('/')
export class LoginController {
  constructor(private readonly service: LoginService) {}

  @ApiOkResponse({ type: [StringResDTO] })
  @ApiOperation({
    summary: 'Login user by e-mail',
  })
  @Put('/login')
  async putLogin(@Body() putLogin: PutLogin): Promise<StringRes> {
    return this.service.putLogin(putLogin);
  }
  @ApiOkResponse({ type: [StringResDTO] })
  @ApiOperation({
    summary: 'Logout user by e-mail',
  })
  @Put('/logout')
  async logoutUser(@Body() putLogout: PutLogout): Promise<StringRes> {
    return this.service.putLogout(putLogout);
  }
}
