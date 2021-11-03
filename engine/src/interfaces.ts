export interface IGameState {
  name: string;
  objects: Array<IGameObject>;
}

type GameFunction = (state: IGameState) => void;

interface IGameObject {
  name: string;
  start?: GameFunction;
  update?: GameFunction;
  end?: GameFunction;
  state: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface IGameInit {
  name: string;
  objects?: Array<IGameObject>;
}
