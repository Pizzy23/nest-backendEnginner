import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import * as fs from 'fs';
import * as PDFParser from 'pdf-parse';
import { PdfConverterService } from './converter.service';
import { DateManipulator } from 'src/util/date';
import { promisify } from 'util';

@Injectable()
export class PdfService {
  constructor(
    private readonly pdf: PdfConverterService,
    private readonly date: DateManipulator,
  ) {}
  async uploadPdf(file: Express.Multer.File): Promise<any> {
    const date = this.date.saveFile();
    await this.pdf.convertJpegToPdf(file, date);

    const filePath = `./files/${date}.pdf`;
    const readFileAsync = promisify(fs.readFile);

    const fileData = await readFileAsync(`./files/${date}.pdf`);

    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, fileData, (err) => {
        if (err) {
          return reject('Erro ao salvar o arquivo PDF.');
        }
        resolve(`Caso queira ver seu resultado: ${date}`);
      });
    });
  }

  async readPdf(filename: string): Promise<any> {
    const filePath = `./files/${filename}.pdf`;

    try {
      const dataBuffer = fs.readFileSync(filePath);
      const data = await PDFParser(dataBuffer);

      return { res: data, status: HttpStatus.ACCEPTED };
    } catch (error) {
      console.error('Error reading PDF:', error);
      throw new Error('Erro ao ler o arquivo PDF.');
    }
  }
}
