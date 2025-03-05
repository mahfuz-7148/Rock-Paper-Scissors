const choices = ["ROCK", "PAPER", "SCISSORS"];
const buttonArea = document.getElementById("chooses");
const playerText = document.getElementById("playerDisplay");
const computerText = document.getElementById("computerDisplay");
const resultText = document.getElementById("resultDisplay");
const beats = {
  ROCK: "SCISSORS",
  PAPER: "ROCK",
  SCISSORS: "PAPER",
};
const results = {
  tie: { message: "It's a tie!", color: "black" },
  win: { message: "You win!", color: "green" },
  lose: { message: "You lose!", color: "red" },
};
 const playGame = (yourChoice) => {

  const computerNumber = Math.floor(Math.random() * 3);
  const computerChoice = choices[computerNumber];
  
   playerText.textContent = `Player: ${yourChoice}`;
  computerText.textContent = `Computer: ${computerChoice}`;


  const outcomeKey =
    yourChoice === computerChoice
      ? "tie"
      : beats[yourChoice] === computerChoice
      ? "win"
      : "lose";

  resultText.textContent = results[outcomeKey].message;
  resultText.style.color = results[outcomeKey].color;
}

const allButtons = buttonArea.querySelectorAll("button");
allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    playGame(button.value); 
  });
});







// const choose = ["ROCK", "PAPER", "SCISSORS"];
// const chooses = document.getElementById("choose");
// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const resultDisplay = document.getElementById("resultDisplay");
// const playGame = (playerChoose) => {
//   const computerChoose = choose[Math.floor(Math.random() * 3)];
//   playerDisplay.textContent = `Player: ${playerChoose}`;
//   computerDisplay.textContent = `Computer: ${computerChoose}`;
//   let result = "";
//   if (playerChoose === computerChoose) {
//     result = "It's a tie!";
//   } else if (
//     (playerChoose === "ROCK" && computerChoose === "SCISSORS") ||
//     (playerChoose === "PAPER" && computerChoose === "ROCK") ||
//     (playerChoose === "SCISSORS" && computerChoose === "PAPER")
//   ) {
//     result = "You win!";
//   } else {
//     result = "You lose!";
//   }
//   resultDisplay.textContent = result;
//   resultDisplay.classList.remove("greenText", "redText");
//   if (result === "You win!") {
//     resultDisplay.classList.add("greenText");
//   } else if (result === "You lose!") {
//     resultDisplay.classList.add("redText");
//   }
// };
// chooses.querySelectorAll("button").forEach((button) => {
//   button.addEventListener("click", () => {
//     const playerChoose = button.value;
//     playGame(playerChoose);
//   });
// });