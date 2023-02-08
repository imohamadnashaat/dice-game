'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Starting scores
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Display dice
  diceEl.src = `img/dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  // Check for rolled 1: if ture
  if (dice === 1) {
    // Set current score to zero
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

    // Add dice to current score
  } else {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});
