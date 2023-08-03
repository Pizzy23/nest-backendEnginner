import { Controller, Post, Body, Get, Headers } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ArtService } from 'src/context/services';
import { ArtDb, ArtDto, GetInfos, StringResDTO } from 'src/view';
import { CreateUserDto } from 'src/view/dto/register/register.dto';

@ApiTags('Art')
@Controller('/art')
export class ArtController {
  constructor(private readonly service: ArtService) {}
  @ApiOkResponse({ type: [StringResDTO] })
  @ApiOperation({
    summary: 'Post ART in DataBase',
  })
  @Post('')
  async postArt(@Body() input: ArtDto): Promise<StringResDTO> {
    return await this.service.artContract(input);
  }
  @ApiOkResponse({ type: [StringResDTO] })
  @ApiOperation({
    summary: 'Get info from the user',
  })
  @Get('')
  async getInfos(@Headers() input: GetInfos): Promise<ArtDb | null> {
    const res = await this.service.getInfos(input);
    if (res) return res;
  }
}
