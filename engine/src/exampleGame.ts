import { IGameInit } from './interfaces';

export const exampleGame: IGameInit = {
  name: 'Example game',
  objects: [
    {
      name: 'First game object',
      state: {
        age: 0,
      },
      start({ render }) {
        render(`hello, my name is ${this.name}`);
      },
      update({ state, render }) {
        render(`I am ${this.state.age} years old`);
        state.name = `Game: ${this.state.age}`;
        this.state.age += 1;
      },
    },
    {
      name: 'Second game object',
      state: {
        age: 10,
      },
      start({ render }) {
        render(`hello, my name is ${this.name}`);
      },
      update({ render, state }) {
        render(`I am ${this.state.age} years old`);
        state.name = `Game: ${this.state.age}`;
        this.state.age += 1;
      },
    },
  ],
};
