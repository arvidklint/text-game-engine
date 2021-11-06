import { Injectable } from '@nestjs/common';
import { Observable, Subscriber } from 'rxjs';
import { Socket } from 'socket.io';

import Game from './engine/Game';

const game = new Game();
const sockets: Array<Socket> = [];

game.io.addOutpuListener((text) => {
  sockets.forEach((socket) => {
    socket.emit('output', text);
  });
});

@Injectable()
export class GameService {
  getInitialOutput(): Array<string> {
    return game.io.getOutput();
  }

  subscribeToOutput(socket: Socket): void {
    sockets.push(socket);
  }

  abortSubscriptionToOutput(socket: Socket): void {
    const index = sockets.findIndex((s) => s.id === socket.id);
    if (index !== -1) {
      sockets.splice(index, 1);
    }
  }
}
