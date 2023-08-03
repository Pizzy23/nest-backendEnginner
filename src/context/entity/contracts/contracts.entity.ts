import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';
import { ArtDto, ArtDb, CatDto } from 'src/view';

@Injectable()
export class ContractsEntity {
  constructor(private prisma: PrismaService) {}

  async putArt(art: ArtDto) {}

  async putCat(cat: CatDto) {}

  async getArt(art: string): Promise<ArtDb | void> {
    const artDB = await this.prisma.art.findFirst({
      where: {
        numberArt: art,
      },
    });
    if (artDB) {
      return artDB;
    }
    return;
  }
  async getCat(cat: string): Promise<any | void> {
    const catDB = await this.prisma.cat.findFirst({
      where: {
        catNumber: cat,
      },
    });
    if (catDB) {
      return catDB;
    }
    return;
  }
  async getUser(user: string): Promise<ArtDb | void> {
    const artDB = await this.prisma.art.findFirst({
      where: {
        responsibleTechnical: user,
      },
    });
    if (artDB) {
      return artDB;
    }
    return;
  }
}
