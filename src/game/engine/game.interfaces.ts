import { IInput, IO } from './io';

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
  input?: (game: IGame, text: IInput) => void;
  [key: string]: any;
}

type GameInitMethod = (io: IO) => void;

export interface IGameInit {
  name: string;
  init?: GameInitMethod;
  entities?: Array<IGameEntity>;
}
