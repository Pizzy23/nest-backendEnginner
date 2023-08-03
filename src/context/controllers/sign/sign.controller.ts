import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SignService } from 'src/context/services/sign/sign.service';
import { InputEmail, StringResDTO } from 'src/view';

@ApiTags('Sign')
@Controller('/sign')
export class SignController {
  constructor(private readonly service: SignService) {}
  @ApiOkResponse({ type: [StringResDTO] })
  @ApiOperation({
    summary: 'Get new Docu for sign',
  })
  @Post('')
  async postCat(@Body() input: InputEmail): Promise<void> {
    return await this.service.signDocs(input);
  }
}
