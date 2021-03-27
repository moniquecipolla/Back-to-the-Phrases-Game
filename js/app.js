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
  
});

/*
const keyHandler = event => {
    if (event.type === 'click') {
      game.handleInteraction(event.target.textContent); //If the event is a click event, the function passes the text content of the event target to the handleInteraction method.
    } else if (event.type === 'keydown') {
      game.keys.forEach(key => { //if the event is a keydown event, the function checks whether the corresponding button key is already disabled, and whether the overlay screen is displayed.
          if (event.key === key.textContent && key.disabled !== true && document.getElementById('overlay').style.display === 'none') {
              game.handleInteraction(event.key) //if the conditions are met, the function pass the event key to the handleInteraction method.
          }
      });
    }
  }

  game.keys.forEach(key => {
    key.addEventListener('click', keyHandler); //Adds an event listener to the game keys, which checks for clicks and calls the keyHandler function.
  });

  document.addEventListener('keydown', keyHandler);

  */
