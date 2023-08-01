import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterService } from 'src/context/services/register/register.service';
import { RegisterInterface, StringRes, StringResDTO } from 'src/view';
import { CreateUserDto } from 'src/view/dto/register/register.dto';

@ApiTags('Register')
@Controller('/register')
export class RegisterController {
  constructor(private readonly service: RegisterService) {}
  @ApiOkResponse({ type: [StringResDTO] })
  @ApiOperation({
    summary: 'Register New User',
  })
  @Post('')
  async postRegister(@Body() input: CreateUserDto): Promise<StringRes> {
    return await this.service.putInDb(input);
  }
}
