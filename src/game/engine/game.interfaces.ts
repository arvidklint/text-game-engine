import { IInput, IO } from './io';

export interface IGameState {
  name: string;
  objects: Array<IGameObject>;
}

export interface IGame {
  state: IGameState;
  io: IO;
}

type GameObjectMethod = (game: IGame) => void;

export interface IGameObject {
  name: string;
  start?: GameObjectMethod;
  update?: GameObjectMethod;
  end?: GameObjectMethod;
  input?: (game: IGame, text: IInput) => void;
  state: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

type GameInitMethod = (io: IO) => void;

export interface IGameInit {
  name: string;
  init?: GameInitMethod;
  objects?: Array<IGameObject>;
}
