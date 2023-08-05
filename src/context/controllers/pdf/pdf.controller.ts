import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Get,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiBody, ApiTags } from '@nestjs/swagger';
import { Express } from 'express';
import { PdfConverterService, PdfService } from 'src/context/services';
import { diskStorage } from 'multer';

@ApiTags('File')
@Controller('file')
export class PdfController {
  constructor(
    private readonly pdfService: PdfService,
    private readonly pdfConverterService: PdfConverterService,
  ) {}

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('file_asset', {
      storage: diskStorage({
        destination: './files/',
      }),
    }),
  )
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file_asset: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadPdf(@UploadedFile() file: Express.Multer.File): Promise<string> {
    return this.pdfService.uploadPdf(file);
  }

  @Get('read/:filename')
  async readPdf(@Param('filename') filename: string): Promise<string> {
    return this.pdfService.readPdf(filename);
  }
}
