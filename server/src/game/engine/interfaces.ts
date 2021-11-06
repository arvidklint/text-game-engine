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
  state: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface IGameInit {
  name: string;
  objects?: Array<IGameObject>;
}
