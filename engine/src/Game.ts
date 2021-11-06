import GameEngine from './Engine';
import exampleGame from './exampleGame';
import { IGameInit } from './interfaces';
import IO from './IO';

class Game {
  private engine: GameEngine;
  private io: IO;

  constructor(game: IGameInit = exampleGame) {
    this.io = new IO();

    this.engine = new GameEngine(game, this.io);

    this.engine.start();
  }
}

export default Game;
