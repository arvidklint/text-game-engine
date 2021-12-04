import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

import Game from './engine/game/Game';
import { IO } from './engine/io';
import { Player } from './engine/player/Player';

const game = new Game();
const sockets: Array<Socket> = [];

game.io.addOutpuListener((text) => {
  sockets.forEach((socket) => {
    socket.emit('output', text);
  });
});

class SocketIO extends IO {
  constructor(private readonly socket: Socket) {
    super();
  }

  public emit(text: string) {
    this.socket.emit('output', text);
  }
}

@Injectable()
export class GameService {
  getInitialOutput(): Array<string> {
    return game.io.getOutput().slice(-1000);
  }

  subscribeToOutput(socket: Socket): void {
    sockets.push(socket);
  }

  connectPlayer(socket: Socket): void {
    game.addPlayer(new Player(socket.id, new SocketIO(socket)));
  }

  abortSubscriptionToOutput(socket: Socket): void {
    game.removePlayer(socket.id);
  }

  input(input: string): void {
    game.io.input(input);
  }
}
