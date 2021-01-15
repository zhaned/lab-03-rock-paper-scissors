import { getRandomThrow, didUserWin } from './get-random-throw.js';
const playButton = document.getElementById('play-button');
const displayResults = document.getElementById('display-results');
const winCounter = document.getElementById('win-counter');
const loseCounter = document.getElementById('lose-counter');
const drawCounter = document.getElementById('draw-counter');
const cpuImage = document.getElementById('cpu-choice');
const playersImage = document.getElementById('players-choice');
const resetButton = document.getElementById('reset-button');
const resetCounterDisplay = document.getElementById('reset-counter-display');

let win = 0;
let lose = 0;
let draw = 0;
let resetCounter = 0;

playButton.addEventListener('click', () =>{

    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    const userGuess = selectedRadioButton.value;


    const cpuThrow = getRandomThrow();

    didUserWin(userGuess, cpuThrow);


    if (didUserWin(userGuess, cpuThrow) === 'win'){
        ++win;
        winCounter.textContent = win;
        displayResults.textContent = 'You won!';
    }

    if (didUserWin(userGuess, cpuThrow) === 'lose'){
        ++lose;
        loseCounter.textContent = lose;
        displayResults.textContent = 'You lose!';
    }

    if (didUserWin(userGuess, cpuThrow) === 'draw'){
        ++draw;
        drawCounter.textContent = draw;
        displayResults.textContent = 'Draw!';
    }
   
    playersImage.src = `/assets/${userGuess}.png`;
    playersImage.style.display = 'block';
    cpuImage.src = `/assets/${cpuThrow}.png`;
    cpuImage.style.display = 'block';


});

resetButton.addEventListener('click', () => {
    win = 0;
    lose = 0;
    draw = 0;
    resetUpdate();
    resetCounter++;
    resetCounterDisplay.textContent = `Reset: ${resetCounter}`;

});


function resetUpdate(){
    winCounter.textContent = win;
    loseCounter.textContent = lose;
    drawCounter.textContent = draw;
    playersImage.style.display = 'none';
    cpuImage.style.display = 'none';
    displayResults.textContent = ' ';
}

