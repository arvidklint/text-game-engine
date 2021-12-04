import { IEngineInit } from './engine.interfaces';
import { IInput, IGameState, IGame } from './game/game.interfaces';

import { sleep } from './logic.utils';

function createGameState(init: IEngineInit): IGameState {
  const state: IGameState = {
    name: init.name,
    entities: init.entities || [],
  };

  return state;
}

class Engine {
  private gameState: IGameState;
  private commands: Array<string> = [];

  constructor(init: IEngineInit) {
    this.gameState = createGameState(init);

    if (init.init) {
      init.init(this);
    }
  }

  get game(): IGame {
    return {
      state: this.gameState,
      io: this.io,
      sleep,
    };
  }

  public start(): void {
    this.gameState.entities.forEach((obj) => {
      if (obj.start) {
        obj.start(this.game);
      }
    });
    this.update();
  }

  public input(input: IInput): void {
    this.gameState.entities.forEach((obj) => {
      if (obj.input) {
        obj.input(this.game, input);
      }
    });
  }

  private update(): void {
    this.gameState.entities.forEach((obj) => {
      if (obj.update) {
        obj.update(this.game);
      }
    });
    setTimeout(this.update.bind(this), 1000);
  }

  public addCommand(command: string): void {
    this.commands.push(command);

    // Sort by length since we treat the longest command as the
    // most specific and should therefore be first to match
    this.commands.sort((a, b) => {
      return a.length > b.length ? -1 : 1;
    });
  }
}

export default Engine;
