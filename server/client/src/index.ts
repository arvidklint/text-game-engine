import { io } from 'socket.io-client';

import './styles/index.css';

const socket = io('http://localhost:3000');

const outputElement = document.querySelector('#output');

socket.on('connect', function () {
  console.log('Connected');
});

socket.on('output', function (data) {
  const textElement = document.createElement('p');
  textElement.innerText = data;
  outputElement?.appendChild(textElement);
});

socket.on('exception', function (data) {
  console.log('event', data);
});

socket.on('disconnect', function () {
  console.log('Disconnected');
});
