import { IGameInit } from '../engine/game.interfaces';
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
  init(io) {
    Object.values(COMMANDS).forEach((command) => {
      io.addCommand(command);
    });
  },
  entities: [
    {
      name: 'First game object',
      state: {
        age: 0,
      },
      start({ io }) {
        io.render(`hello, my name is ${this.name}`);
      },
      update({ state, io }) {
        io.render(`I am ${this.state.age} years old`);
        state.name = `Game: ${this.state.age}`;
        this.state.age += 1;
      },
      input({ io }, input) {
        if (input.command === COMMANDS.SAY) {
          io.render(`You said: ${input.text}`);
        }
      },
    },
    {
      name: 'Old man',
      input({ io }, input) {
        if (input.command === COMMANDS.SHOUT) {
          io.render("Ah! Don't shout at me...");
        }
      },
    },
    {
      name: 'Listening man',
      input({ io }, input) {
        if (input.command === COMMANDS.SAY_TO) {
          io.render(`You said "${input.text}" to ${this.name}`);
        }
      },
    },
    {
      name: 'pong',
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
