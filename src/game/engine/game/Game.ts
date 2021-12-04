import GameEngine from '../Engine';
import exampleGame from '../../testGame/testGame';
import { IGameInit } from './game.interfaces';
import { IO } from '../io/IO';
import { extractCommand } from './game.utils';
import { IInput } from '../game';
import { Player } from '../player/Player';

class Game {
  private engine: GameEngine;
  private commands: Array<string> = [];
  private players: Array<Player> = [];

  constructor(game: IGameInit = exampleGame) {
    this.engine = new GameEngine(game);

    this.engine.start();
  }

  public addPlayer(player: Player) {
    player.io.addInputListener(this.input);
    this.players.push(player);
  }

  public removePlayer(playerId: string) {
    this.players = this.players.filter((p) => p.id !== playerId);
  }

  public input(rawText: string) {
    const [command, text] = extractCommand(rawText, this.commands);
    const input: IInput = {
      command,
      text,
    };
    this.engine.input(input);
  }
}

export default Game;
