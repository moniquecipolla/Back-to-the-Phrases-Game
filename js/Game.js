/*
The Game class has a constructor method with 3 properties.
*/
class Game {
  constructor () {
    this.missed = 0; //This property keeps track of how many incorrect guesses the player makes.
    this.phrases = this.createPhrases(); //This property calls the createPhrases method to create an array of 5 phrase objects.
    this.activePhrase = null; //This property stores the randomly selected active phrase.
  }

/*
The createPhrases method:
* Stores an array of phrase objects in the 'phrase' variable.
* Returns the array of phrase objects.
*/
  createPhrases() {
    let phrase = [ {phrase:'Flux Capacitor fluxing'},
                   {phrase: 'Mayor Goldie Wilson'},
                   {phrase: 'I am your density'},
                   {phrase: 'Great Scott'},
                   {phrase: 'Your kids are gonna love it'}
                 ];
    return phrase;
  }

/*
The getRandomPhrase method:
* Selects a random phrase from phrases property and instantiates a Phrase.
* Returns the created random phrase object.
*/
  getRandomPhrase() {
    let randomNumber = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[randomNumber];
    return randomPhrase;
  }

/*
The startGame method:
* Hides the overlay element.
* Begins the game by selecting a random phrase and displaying it to the player.
*/
  startGame() {
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = new Phrase(this.getRandomPhrase());
    this.activePhrase.addPhraseToDisplay();
  }

  /*
  The handleInteraction method accepts an input parameter (i.e., a keypress or click from the event listeners in app.js) and branches accordingly.
  * It passes the input as a parameter to the checkLetter method.
  * Conditionally checks if the input matches a QWERTY key and the key is not disabled.
    * If the checkLetter method returns false, the key is disabled and given the 'wrong' class, and the removeLife method is called.
    * Else, the key is disabled and given the 'chosen' class, and the checkForWin method is called.
  */
  handleInteraction(input) {
    this.activePhrase.checkLetter(input);
    Array.from(document.getElementsByClassName('key')).forEach(key => { //Creating an array of the QWERTY keys to loop through.
      if (key.textContent === input && key.disabled !== true) {
        if (this.activePhrase.checkLetter(input) === false) {
          key.disabled = true;
          key.classList.add('wrong');
          this.removeLife();
      } else {
          key.disabled = true;
          key.classList.add('chosen');
          this.checkForWin();
          if (this.checkForWin()) {
            this.gameOver(true); //If the checkForWin method returns true, the gameOver method is called and passed the 'true' parameter.
          }
        }
      }
    });
  }
  
  /*
  The checkForWin method checks whether there are no elements with the class 'hide' (i.e., no remaining hidden letters in the phrase).
  If there are no elements with that class, the method returns 'true'.
  */
  checkForWin() {
    if (document.getElementsByClassName('hide').length === 0) {
      return true;
  }
}

  /*
  The removeLife method:
  * Increases the 'missed' count.
  * Replaces the liveHeart image with the lostHeart image.
  * Passes the argument 'false' to the gameOver method if the 'missed' number is equal to 5 (the total number of lives).
  */
  removeLife() {
    this.missed += 1;
    document.getElementsByClassName('tries')[`${this.missed-1}`].firstElementChild.src = 'images/lostHeart.png';
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

 /*
 The gameOver method:
 * Displays the overlay element.
 * If the passed result parameter is equal to true, it updates the game over message and class name to win, as well as updating the btn__reset text.
 * Else if the passed parameter is not equal to true (i.e., is false), it updates the game over message and class name to lose as well as updating the btn__reset text.
 * Calls the resetGame method.
 */
  gameOver(result) {
    document.getElementById('overlay').style.display = '';
    if (result === true) {
      document.getElementById('game-over-message').className = 'win';
      document.getElementById('game-over-message').innerHTML = `<br><i>Wow, you reached 88 miles per hour!</i> 🏎️💨 <p>Nailed it! The phrase was "${this.activePhrase.phrase.toUpperCase()}"!</p>`;
      document.getElementById('btn__reset').textContent = 'Go back to the future & try again?';
    } else {
      document.getElementById('game-over-message').className = 'lose';
      document.getElementById('game-over-message').innerHTML = `<br><i>Think, McFly, think!</i> 😖💭 <p>Better luck next time! The phrase was "${this.activePhrase.phrase.toUpperCase()}".</p>`;
      document.getElementById('btn__reset').textContent = 'Go back in time & try again?';
    }
    this.resetGame();
  }

  /*
  The resetGame method:
  * Clears the current phrase.
  * Enables all key buttons and removes the 'wrong' and 'chosen' classes from all keys.
  * Replaces any 'lostHeart' images with 'liveHeart' images.
  * Sets the 'missed' count to 0.
  */
  resetGame() {
    document.getElementById('phrase').children[0].querySelectorAll('*').forEach(child => child.remove()); //Adapted from https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb
    this.activePhrase = null;
    Array.from(document.getElementsByClassName('key')).forEach(key => {
      key.disabled = false;
      key.classList.remove('wrong');
      key.classList.remove('chosen');
    });
    for (let heart of document.getElementsByClassName('tries')) {
      heart.firstElementChild.src = 'images/liveHeart.png';
    }
    this.missed = 0;
  }

 }