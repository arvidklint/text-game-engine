import { IGameEntity } from '../engine/game/game.interfaces';
import { COMMANDS } from './testGame';

export const movement: Array<IGameEntity> = [
  {
    input(_, input, player) {
      if (input.command === COMMANDS.NORTH) {
        player.io.emit('You tried to go north');
      }
    },
  },
  {
    input(_, input, player) {
      if (input.command === COMMANDS.EAST) {
        player.io.emit('You tried to go east');
      }
    },
  },
  {
    input(_, input, player) {
      if (input.command === COMMANDS.SOUTH) {
        player.io.emit('You tried to go south');
      }
    },
  },
  {
    input(_, input, player) {
      if (input.command === COMMANDS.WEST) {
        player.io.emit('You tried to go west');
      }
    },
  },
];
