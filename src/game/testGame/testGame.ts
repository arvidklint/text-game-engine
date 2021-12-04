import { IGameInit } from '../engine/game/game.interfaces';
import { movement } from './testGame.movement';

export const COMMANDS = {
  SAY: 'say',
  SHOUT: 'shout',
  SAY_TO: 'say to',
  NORTH: 'north',
  EAST: 'east',
  SOUTH: 'south',
  WEST: 'west',
  PING: 'ping',
};

const exampleGame: IGameInit = {
  name: 'Example game',
  init(game) {
    Object.values(COMMANDS).forEach((command) => {
      game.addCommand(command);
    });
  },
  entities: [
    {
      age: 0,
      start({ io }) {
        io.render('This is the start of the game');
      },
      update({ io }) {
        io.render(`I am ${this.age} years old`);
        this.age += 1;
      },
      input({ io }, input) {
        if (input.command === COMMANDS.SAY) {
          io.render(`You said: ${input.text}`);
        }
      },
    },
    {
      input({ io }, input) {
        if (input.command === COMMANDS.SHOUT) {
          io.render("Ah! Don't shout at me...");
        }
      },
    },
    {
      input({ io }, input) {
        if (input.command === COMMANDS.SAY_TO) {
          io.render('You said "${input.text}"');
        }
      },
    },
    {
      async input({ io, sleep }, input) {
        if (input.command !== COMMANDS.PING) return;

        io.render('ping!...');

        const ms = Math.floor(Math.random() * 5000);
        await sleep(ms);
        io.render(`pong! (${Math.round(ms * 100) / 100}ms)`);
      },
    },
    ...movement,
  ],
};

export default exampleGame;
