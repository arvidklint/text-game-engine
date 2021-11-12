import { IGameEntity } from '../engine/game.interfaces';
import { COMMANDS } from './testGame';

export const movement: Array<IGameEntity> = [
  {
    input({ io }, input) {
      if (input.command === COMMANDS.NORTH) {
        io.render('You tried to go north');
      }
    },
  },
  {
    input({ io }, input) {
      if (input.command === COMMANDS.EAST) {
        io.render('You tried to go east');
      }
    },
  },
  {
    input({ io }, input) {
      if (input.command === COMMANDS.SOUTH) {
        io.render('You tried to go south');
      }
    },
  },
  {
    input({ io }, input) {
      if (input.command === COMMANDS.WEST) {
        io.render('You tried to go west');
      }
    },
  },
];
