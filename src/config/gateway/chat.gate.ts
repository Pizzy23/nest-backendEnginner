import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsResponse,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Logger, OnModuleInit } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { ChatInput } from '../../view';
import { ChatService } from '../../context/services';

@WebSocketGateway()
export class MessageGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  constructor(private readonly service: ChatService) {}
  private logger: Logger = new Logger('MessageGateway');

  @WebSocketServer()
  server: Server;

  afterInit(server: any) {
    this.logger.log('Server Start');
  }

  @SubscribeMessage('Community')
  onNewMessageCommunity(
    @MessageBody() body: ChatInput,
    @ConnectedSocket() socket: Socket,
  ) {
    this.server.emit(body.job, {
      email: body.email,
      msg: body.msg,
    });
  }
  @SubscribeMessage('Support')
  async onNewMessageSupport(
    @MessageBody() body: ChatInput,
    @ConnectedSocket() socket: Socket,
  ) {
    const msg = await this.service.chatRes(body);
    this.server.emit('Support', {
      msg: msg,
    });
  }

  handleConnection(client: Socket) {
    client.send('Client connected');
    this.logger.log('Client connected');
  }
  handleDisconnect(client: Socket) {
    client.send('Client disconnect');
    this.logger.log('Client disconnect');
  }
}
