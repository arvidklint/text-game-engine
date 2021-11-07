import { io } from 'socket.io-client';

import './styles/index.css';

const socket = io('http://localhost:3000');

const outputElement: HTMLElement | null = document.querySelector('#output');
const inputElement: HTMLInputElement | null = document.querySelector('#input');

function scrollToBottom() {
  outputElement?.scrollTo({
    top: outputElement.scrollHeight,
  });
}

socket.on('connect', function () {
  console.log('Connected');
});

socket.on('output', function (data) {
  const textElement = document.createElement('p');
  textElement.innerText = data;
  outputElement?.appendChild(textElement);

  scrollToBottom();
});

socket.on('exception', function (data) {
  console.log('event', data);
});

socket.on('disconnect', function () {
  console.log('Disconnected');
});

(function () {
  scrollToBottom();
  inputElement?.focus();
  inputElement?.addEventListener('keydown', (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      const input = (ev.target as HTMLInputElement)?.value;
      socket.emit('input', input);
      inputElement.value = '';
    }
  });
})();
