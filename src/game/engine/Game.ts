import GameEngine from './Engine';
import exampleGame from '../testGame/testGame';
import { IGameInit } from './game.interfaces';
import { IO } from './io/IO';

class Game {
  private engine: GameEngine;
  public readonly io: IO;

  constructor(game: IGameInit = exampleGame) {
    this.io = new IO();

    this.engine = new GameEngine(game, this.io);

    this.io.addInputListener((input) => this.engine.input(input));

    this.engine.start();
  }
}

export default Game;
