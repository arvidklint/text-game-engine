import Engine from './Engine';
import { IGameEntity } from './game';

type EngineInitMethod = (engine: Engine) => void;

export interface IEngineInit {
  name: string;
  init?: EngineInitMethod;
  entities?: Array<IGameEntity>;
}
