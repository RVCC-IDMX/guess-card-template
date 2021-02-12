/* app.js */

/* 
  DO NOT FORGET
Edit random.js to so getRandomInt(max)
will return a random number from 
0 to the value of max (inclusively)

*/
import { getRandomInt } from "./random.js"; //using the ES6 modules

const farewell = document.querySelector(".farewell");
const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs',];

while (confirm('Would you like to play the game?')) { 
  // Put your code in this while loop
  // Remember to use alert &  confirm

}

farewell.innerHTML = "<h1>Thanks for playing!<h1>";