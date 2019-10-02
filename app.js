/* eslint-disable no-console */
import compareNumber from './function.js';
const myButton = document.getElementById('guessButton');
const correctNumber = Math.floor(Math.random() * 10 + 1);
let remainingGuesses = 3;
const theGuess = document.getElementById('guessField');

myButton.onclick = () => {
    const guess = theGuess.value;
    if ((compareNumber(guess, correctNumber) === 0) && (remainingGuesses > 0)) {
        console.log(correctNumber);
        console.log(guess);
        alert('You win! Please enjoy this complimentary glory!');
        remainingGuesses = 0;
    } else if ((compareNumber(guess, correctNumber) === -1) && (remainingGuesses > 0)) {
        remainingGuesses -= 1;
        alert('That number is too low! You have ' + remainingGuesses + ' guesses left...');
        console.log(correctNumber);
        console.log(guess);
    } else if ((compareNumber(guess, correctNumber) === 1) && (remainingGuesses > 0)){
        remainingGuesses -= 1;
        alert('That number is too high! You have ' + remainingGuesses + ' guesses left!');
        console.log(correctNumber);
    } else {
        alert('That\'s the end of the game, dude. It\'s not a very long one, sorry.');
    }
};