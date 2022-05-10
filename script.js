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

const decreaseScore = () =>
  score.textContent < 1
    ? (message.textContent = "You lose! Try again")
    : score.textContent--;

checkBtn.addEventListener("click", () => {
  const input = +numInput.value;
  if (!input) {
    message.textContent = "Enter number";
    decreaseScore();
    console.log(message.textContent);
  } else if (input === myNumber) {
    message.textContent = "You won!";
    document.querySelector("body").style.backgroundColor = "green";
    numberScreen.textContent = myNumber;
    numInput.disabled = checkBtn.disabled = true;
    score.textContent > highscore.textContent
      ? (highscore.textContent = score.textContent)
      : highscore.textContent;
    myNumber = getRandomName(1, 20);
  } else {
    input < myNumber
      ? (message.textContent = "Too low!")
      : (message.textContent = "Too high!");
    decreaseScore();
  }
});

btnAgain.addEventListener("click", () => {
  numberScreen.textContent = "?";
  numInput.disabled = false;
  checkBtn.disabled = false;
  message.textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "";
  score.textContent = 20;
  numInput.value = "";
});
