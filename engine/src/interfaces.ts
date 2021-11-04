interface IGameState {
  name: string;
  objects: Array<IGameObject>;
}

export interface IGame {
  state: IGameState,
  render: (text: string) => void;
}

type GameFunction = (game: IGame) => void;

export interface IGameObject {
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
