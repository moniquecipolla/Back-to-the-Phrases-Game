/*
The Phrase class has a constructor that receives a 'phrase' parameter.
It sets the phrase to lower case.
*/
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.phrase.toLowerCase();
  }

  /*
  The addPhraseToDisplay method:
  * Creates a list item element for each letter and space in the given phrase.
  * Adds the list items to the UL in the 'phrase' div.
  */
  addPhraseToDisplay() {
    for (let i = 0; i < this.phrase.length; i++) {
      let listItem = document.createElement('li');
      (/\s/g.test(this.phrase.charAt(i))) ? listItem.className = 'space' : listItem.classList.add('hide', 'letter', `${this.phrase.charAt(i)}`); //If the character is a space, it is given a different class name.
      listItem.innerHTML = `${this.phrase.charAt(i)}`;
      document.getElementById('phrase').children[0].appendChild(listItem);
    }
  }
  
  /*
  The checkLetter method:
  * Accepts a letter as an argument.
  * If the active phrase includes the given letter, it calls the showMatchedLetter method.
  * Else, it returns 'false'.
  */
  checkLetter(letter) { 
     if (this.phrase.includes(letter)) {
      this.showMatchedLetter(letter); 
     }
     else {
       return false;
     }
  }

  /*
  The showMatchedLetter method:
  * Accepts a letter as an argument.
  * Removes the 'hide' class and adds the 'show' class to all the matching letters in the phrase..
  */
  showMatchedLetter(letter) {
    let correctLetter = document.getElementsByClassName(letter);
    for (let i = 0; i < correctLetter.length; i++) {
      if (correctLetter[i].innerHTML === letter) {
        correctLetter[i].classList.remove('hide');
        correctLetter[i].classList.add('show');
      }
    }
  }

  /*
  The clearPhrase method:
  * Removes any list items in the UL of the 'phrase' div.
  * Sets the active phrase to null.
  */
  clearPhrase() {
    document.getElementById('phrase').children[0].querySelectorAll('*').forEach(child => child.remove()); //from https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb
  }

}