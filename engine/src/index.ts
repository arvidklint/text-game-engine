import { IGameInit, IGame } from './interfaces';
import renderer from './renderer';

import { exampleGame } from './exampleGame';

function createGame(init: IGameInit): IGame {
  const game: IGame = {
    render: renderer,
    state: {
      name: init.name,
      objects: init.objects || [],
    }
  };

  return game;
}

class Engine {
  private game: IGame;

  constructor(init: IGameInit) {
    this.game = createGame(init);
  }

  public start() {
    this.game.state.objects.forEach((obj) => {
      if (obj.start) {
        obj.start(this.game);
      }
    });
    this.update();
  }

  private update() {
    this.game.state.objects.forEach((obj) => {
      if (obj.update) {
        obj.update(this.game);
      }
    });
    setTimeout(this.update.bind(this), 1000);
  }
}

const engine = new Engine(exampleGame);

engine.start();
