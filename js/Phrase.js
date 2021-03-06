/*
The Phrase class has a constructor that receives a 'phrase' parameter.
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
  * Accepts a letter as a parameter.
  * If the active phrase includes the given letter, it returns true.
  */
  checkLetter(letter) { 
     if (this.phrase.includes(letter)) {
      return true; 
     }
  }

  /*
  The showMatchedLetter method:
  * Accepts a letter as a parameter.
  * Removes the 'hide' class and adds the 'show' class to all the matching letters in the phrase.
  */
  showMatchedLetter(letter) {
    let letters = document.getElementsByClassName(letter);
    for (let i = 0; i < letters.length; i++) {
      if (letters[i].innerHTML === letter) {
        letters[i].classList.remove('hide');
        letters[i].classList.add('show');
      }
    }
  }

}