import IO from './IO';

export interface IGameState {
  name: string;
  objects: Array<IGameObject>;
}

export interface IGame {
  state: IGameState;
  io: IO;
}

type GameObjectMethod = (game: IGame) => void;

interface IGameObject {
  name: string;
  start?: GameObjectMethod;
  update?: GameObjectMethod;
  end?: GameObjectMethod;
  input?: (game: IGame, text: string) => void;
  state: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface IGameInit {
  name: string;
  objects?: Array<IGameObject>;
}
