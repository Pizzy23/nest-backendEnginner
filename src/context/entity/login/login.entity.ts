import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';
@Injectable()
export class LoginEntity {
  constructor(private prisma: PrismaService) {}
  async putLogin(uuid: string) {
    try {
      const user = await this.prisma.login.findFirst({
        where: {
          uuid: uuid,
        },
      });
      if (user != null && user.is_logged == true) {
        throw new Error(`User is Logged`);
      }
      if (user) {
        await this.prisma.login.delete({
          where: { id: user.id },
        });
      }
      await this.prisma.login.create({
        data: {
          uuid: uuid,
          is_logged: true,
        },
      });
      return 'work';
    } catch (err) {
      throw new Error(err);
    }
  }
  async putLogout(uuid: string) {
    const user = await this.prisma.login.findFirst({
      where: {
        uuid: uuid,
      },
    });
    if (user) {
      await this.prisma.login.delete({
        where: { id: user.id },
      });
    }
    await this.prisma.login.create({
      data: {
        uuid: uuid,
        is_logged: false,
      },
    });
  }
  async getUser(uuid: string) {
    return await this.prisma.user.findFirst({
      where: {
        uuid: uuid,
      },
    });
  }
}
