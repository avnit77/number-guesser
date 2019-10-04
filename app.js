/* eslint-disable no-console */
import compareNumber from './function.js';
const myButton = document.getElementById('guessButton');
const correctNumber = Math.ceil(Math.random() * 10);
let remainingGuesses = 3;
let resultActual;

const getGuess = () => {
    const theGuess = document.getElementById('guessField');
    return theGuess.value;
};

const trackGuesses = (result) => {
    if (result === -1 || result === 1){
        remainingGuesses -= 1;
    } else {
        remainingGuesses = 0;
    }

const gameOver = () => {
    if (remainingGuesses === 0) {
        alert('That\'s the end of the game, dude. It\'s not a very long one, sorry.');
        return;
    } 
}

const alertUser = (result) => {
    if (result === -1){
        alert('That number is too low! You have ' + remainingGuesses + ' guesses left...');
    } else if (result === 1) {
        alert('That number is too high! You have ' + remainingGuesses + ' guesses left!');
    } else if (results === 0) {
        alert('You win! Please enjoy this complimentary glory!');
    } 
}
    
const playRound = () => {
    getGuess();
    resultActual = compareNumber(getGuess(), correctNumber);
    trackGuesses(resultActual);
    gameOver();
    alertUser(resultActual);
}
myButton.onclick = () => {playRound()}