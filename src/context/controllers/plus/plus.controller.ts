import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PlusService } from 'src/context/services/plus/plus.service';
import { InputCep, InputEmail, StringResDTO } from 'src/view';

@ApiTags('Plus')
@Controller('/plus')
export class PlusController {
  constructor(private readonly service: PlusService) {}
  @ApiOkResponse({ type: [StringResDTO] })
  @ApiOperation({
    summary: 'Get Plus code',
  })
  @Post('')
  async postCat(@Body() input: InputCep): Promise<string> {
    return await this.service.plusCode(input);
  }
}
