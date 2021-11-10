import { IGameInit, IGameState, IGame } from './game.interfaces';

import { IInput, IO } from './io';

function createGameState(init: IGameInit): IGameState {
  const state: IGameState = {
    name: init.name,
    objects: init.objects || [],
  };

  return state;
}

class GameEngine {
  private gameState: IGameState;
  private io: IO;

  constructor(init: IGameInit, io: IO) {
    this.gameState = createGameState(init);
    this.io = io;

    if (init.init) {
      init.init(this.io);
    }
  }

  get game(): IGame {
    return {
      state: this.gameState,
      io: this.io,
    };
  }

  public start(): void {
    this.gameState.objects.forEach((obj) => {
      if (obj.start) {
        obj.start(this.game);
      }
    });
    this.update();
  }

  public input(input: IInput): void {
    this.gameState.objects.forEach((obj) => {
      if (obj.input) {
        obj.input(this.game, input);
      }
    });
  }

  private update(): void {
    this.gameState.objects.forEach((obj) => {
      if (obj.update) {
        obj.update(this.game);
      }
    });
    setTimeout(this.update.bind(this), 1000);
  }
}

export default GameEngine;
