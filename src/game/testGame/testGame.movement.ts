import { IGameObject } from '../engine/game.interfaces';
import { COMMANDS } from './testGame';

export const movement: Array<IGameObject> = [
  {
    name: 'move north',
    state: {},
    input({ io }, input) {
      if (input.command === COMMANDS.NORTH) {
        io.render('You tried to go north');
      }
    },
  },
  {
    name: 'move east',
    state: {},
    input({ io }, input) {
      if (input.command === COMMANDS.EAST) {
        io.render('You tried to go east');
      }
    },
  },
  {
    name: 'move south',
    state: {},
    input({ io }, input) {
      if (input.command === COMMANDS.SOUTH) {
        io.render('You tried to go south');
      }
    },
  },
  {
    name: 'move west',
    state: {},
    input({ io }, input) {
      if (input.command === COMMANDS.WEST) {
        io.render('You tried to go west');
      }
    },
  },
];
