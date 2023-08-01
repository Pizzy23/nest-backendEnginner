import { Module } from '@nestjs/common';
import { MessageGateway } from './gateway/chat.gate';
import { ChatService } from '../context/services/chat/chat.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [MessageGateway, ChatService, PrismaService],
})
export class ConfigModule {}
