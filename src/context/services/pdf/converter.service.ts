import { Injectable, HttpStatus } from '@nestjs/common';
import { PDFDocument, rgb } from 'pdf-lib';
import { promises as fs } from 'fs';

@Injectable()
export class PdfConverterService {
  fileName: string;
  destination = './files/';
  destinationFile: string;

  async saveFile(file: Express.Multer.File): Promise<void> {
    try {
      this.fileName = file.originalname;
      this.destinationFile = `${this.destination}${this.fileName}`;
      await fs.writeFile(this.destinationFile, file.buffer);
    } catch (error) {
      throw new Error(`Could not save file: ${error.message}`);
    }
  }

  async convertJpegToPdf(file: Express.Multer.File): Promise<Object> {
    try {
      return {
        res: 'Ainda esta em fases de teste',
        status: HttpStatus.NOT_IMPLEMENTED,
      };
      await this.saveFile(file);
      const imageBytes = await fs.readFile(this.destinationFile);
      const pdfDoc = await PDFDocument.create();

      const image = await pdfDoc.embedJpg(imageBytes);
      const page = pdfDoc.addPage();
      const { width, height } = image.scale(1);
      page.drawImage(image, {
        x: 0,
        y: 0,
        width,
        height,
      });

      const pdfBytes = await pdfDoc.save();
      await fs.writeFile(this.destinationFile, pdfBytes);
    } catch (e) {
      console.log(e);
    }
  }
}
