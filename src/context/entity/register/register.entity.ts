import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';
import { InputInterface, RegisterInterface } from 'src/view';
@Injectable()
export class RegisterEntity {
  constructor(private prisma: PrismaService) {}
  async putUserInDb(input: InputInterface) {
    await this.prisma.user.create({
      data: input,
    });
  }
  async getUser(uuid: string): Promise<RegisterInterface> {
    const user = await this.prisma.user.findFirst({
      where: { uuid: uuid },
    });
    return user
  }
}
