import { Injectable,HttpStatus } from '@nestjs/common';
import * as fs from 'fs';
import * as PDFParser from 'pdf-parse';

@Injectable()
export class PdfService {
  async uploadPdf(file: Express.Multer.File): Promise<string> {
    const filePath = `files/${file.originalname}`;

    return new Promise((resolve, reject) => {
      return {res: 'Ainda esta em fases de teste', status: HttpStatus.NOT_IMPLEMENTED}
      fs.writeFile(filePath, file.buffer, (err) => {
        if (err) {
          return reject('Erro ao salvar o arquivo PDF.');
        }
        resolve('Arquivo PDF enviado e salvo com sucesso.');
      });
    });
  }

  async readPdf(filename: string): Promise<string> {
    const filePath = `uploads/${filename}`;

    try {
      const dataBuffer = fs.readFileSync(filePath);
      const data = await PDFParser(dataBuffer);
      return data.text;
    } catch (error) {
      console.error('Error reading PDF:', error);
      throw new Error('Erro ao ler o arquivo PDF.');
    }
  }
}
