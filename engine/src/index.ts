import { IGameInit, IGameState } from './interfaces';
import { exampleGame } from './exampleGame';

function createGameState(init: IGameInit): IGameState {
  const state: IGameState = {
    name: init.name,
    objects: init.objects || [],
  };

  return state;
}

class Engine {
  private state: IGameState;

  constructor(init: IGameInit) {
    this.state = createGameState(init);
  }

  public start() {
    this.state.objects.forEach((obj) => {
      if (obj.start) {
        obj.start(this.state);
      }
    });
    this.update();
  }

  private update() {
    this.state.objects.forEach((obj) => {
      if (obj.update) {
        obj.update(this.state);
      }
    });
    setTimeout(this.update.bind(this), 1000);
  }
}

const engine = new Engine(exampleGame);

engine.start();
