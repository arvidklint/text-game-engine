import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { GameService } from './game.service';

@WebSocketGateway()
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly gameService: GameService) {}

  handleConnection(@ConnectedSocket() socket: Socket) {
    this.gameService.connectPlayer(socket);
    this.gameService.subscribeToOutput(socket);
    console.log('connected', socket.id);
  }

  handleDisconnect(socket: Socket) {
    this.gameService.abortSubscriptionToOutput(socket);
    console.log('disconnect', socket.id);
  }

  @SubscribeMessage('input')
  handleEvent(@MessageBody() input: string): void {
    this.gameService.input(input);
  }
}
