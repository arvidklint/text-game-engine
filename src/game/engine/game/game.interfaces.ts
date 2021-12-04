import { IO } from '../io';
import { Player } from '../player/Player';

export interface IGameState {
  name: string;
  entities: Array<IGameEntity>;
}

export interface IGame {
  state: IGameState;
  io: IO;
  sleep: (ms: number) => Promise<unknown>;
}

type GameObjectMethod = (game: IGame) => void;

export interface IGameEntity {
  start?: GameObjectMethod;
  update?: GameObjectMethod;
  end?: GameObjectMethod;
  input?: (game: IGame, text: IInput, player?: Player | undefined) => void;
  [key: string]: any;
}

export type Command = string | false;

export interface IInput {
  command: Command;
  text: string;
}
