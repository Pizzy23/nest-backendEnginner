import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CatService } from 'src/context/services/contracts/cat.service';
import { CatDto, GetCatDto, StringResDTO } from 'src/view';
import { CreateUserDto } from 'src/view/dto/register/register.dto';

@ApiTags('Cat')
@Controller('/cat')
export class CatController {
  constructor(private readonly service: CatService) {}
  @ApiOkResponse({ type: [StringResDTO] })
  @ApiOperation({
    summary: 'Create new CAT',
  })
  @Post('')
  async postCat(@Body() input: CatDto): Promise<StringResDTO> {
    return await this.service.catContract(input);
  }
  @ApiOkResponse({ type: [StringResDTO] })
  @ApiOperation({
    summary: 'Get existent CAT',
  })
  @Get('')
  async getCat(@Body() input: GetCatDto): Promise<StringResDTO> {
    return await this.service.getCat(input);
  }
}
