import { getRandomThrow } from './get-random-throw.js';
const playButton = document.getElementById('play-button');
const displayResults = document.getElementById('display-results');
const winCounter = document.getElementById('win-counter');
const loseCounter = document.getElementById('lose-counter');
const drawCounter = document.getElementById('draw-counter');

let win = 0;
let lose = 0;
let draw = 0;

playButton.addEventListener('click', () =>{

    const cpuThrow = getRandomThrow();
    console.log(cpuThrow);

});