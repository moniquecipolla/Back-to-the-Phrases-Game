//Declaring Game variable.
let game;

//Adds an event listener to start button, instantiating a new Game and calling the startGame method.
document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game;
  game.startGame();
});

//Adds an event listener to the onscreen QWERTY buttons; conditionally checks whether the event target is a button.
document.getElementById('qwerty').addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    game.handleInteraction(event.target.textContent); //Passes the textContent of the button to the handleInteraction method.
  }
});

//Adds an event listener for keydown events; conditionally checks whether the overlay screen is present.
document.addEventListener('keydown', (event) => {
  if (document.getElementById('overlay').style.display === 'none') 
    game.handleInteraction(event.key); //Passes the key value to the handleInteraction method.
});
