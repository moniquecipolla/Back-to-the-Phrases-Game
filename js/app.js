let game = null;

document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game;
  game.startGame();
});

document.getElementById('qwerty').addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    game.handleInteraction(event.target.textContent);
  }
});

document.addEventListener('keydown', (event) => {
  if (document.getElementById('overlay').style.display === 'none')
    game.handleInteraction(event.key);
});
