import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
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
    this.gameService.subscribeToOutput(socket);
    console.log('connected', socket.id);
  }

  handleDisconnect(socket: Socket) {
    this.gameService.abortSubscriptionToOutput(socket);
    console.log('disconnect', socket.id);
  }
}
