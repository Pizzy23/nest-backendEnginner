import { Injectable, HttpStatus } from '@nestjs/common';
import { PDFDocument, rgb } from 'pdf-lib';
import { promises as fs } from 'fs';

@Injectable()
export class PdfConverterService {
  fileName: string;
  destination = './files/';
  destinationFile: string;

  async createFile(file: Express.Multer.File) {
    const data = await fs.readFile(`./files/${file.filename}`);
    await fs.writeFile(`./files/${file.originalname}`, data);
  }

  async convertJpegToPdf(
    file: Express.Multer.File,
    name: string,
  ): Promise<Object> {
    try {
      await this.createFile(file);
      const imageBytes = await fs.readFile(`./files/${file.originalname}`);
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
      await fs.writeFile(`./files/${name}.pdf`, pdfBytes);
      await fs.unlink(`./files/${file.filename}`);
      await fs.unlink(`./files/${file.originalname}`);
      return { res: 'Pdf Criado', status: HttpStatus.CREATED };
    } catch (e) {
      console.log(e);
    }
  }
}
