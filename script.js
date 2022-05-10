"use strict";
const checkBtn = document.querySelector(".btn.check");
const numInput = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const numberScreen = document.querySelector(".number");
const btnAgain = document.querySelector(".btn.again");
const highscore = document.querySelector(".highscore");

const getRandomName = (min, max) =>
  Math.trunc(Math.random() * (max - min + 1) + min);

let myNumber = getRandomName(1, 20);

const getMessage = (msg) => (message.textContent = msg);

const decreaseScore = () =>
  score.textContent < 1
    ? getMessage("You lose! Try again")
    : score.textContent--;

checkBtn.addEventListener("click", () => {
  const input = +numInput.value;
  if (!input) {
    getMessage("Enter number");
    decreaseScore();
  } else if (input === myNumber) {
    getMessage("You won!");
    document.querySelector("body").style.backgroundColor = "green";
    numberScreen.textContent = myNumber;
    numInput.disabled = checkBtn.disabled = true;
    score.textContent > highscore.textContent
      ? (highscore.textContent = score.textContent)
      : highscore.textContent;
    myNumber = getRandomName(1, 20);
  } else {
    input < myNumber ? getMessage("Too low!") : getMessage("Too high!");
    decreaseScore();
  }
});

btnAgain.addEventListener("click", () => {
  numberScreen.textContent = "?";
  numInput.disabled = checkBtn.disabled = false;
  getMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "";
  score.textContent = 20;
  numInput.value = "";
});
