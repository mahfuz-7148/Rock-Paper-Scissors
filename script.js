const choose = ['ROCK', 'PAPER', 'SCISSORS'];
const chooses = document.getElementById('choose');
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playGame = playerChoose => {
  const computerChoose = choose[Math.floor(Math.random() * 3)];
  playerDisplay.textContent = `Player: ${playerChoose}`;
  computerDisplay.textContent = `Computer: ${computerChoose}`;
  let result = '';
  if (playerChoose === computerChoose) {
    result = "It's a tie!";
  } else if (
    (playerChoose === 'ROCK' && computerChoose === 'SCISSORS') ||
    (playerChoose === 'PAPER' && computerChoose === 'ROCK') ||
    (playerChoose === 'SCISSORS' && computerChoose === 'PAPER')
  ) {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }
  resultDisplay.textContent = result;
  resultDisplay.classList.remove('greenText', 'redText');
  if (result === 'You win!') {
    resultDisplay.classList.add('greenText');
  } else if (result === 'You lose!') {
    resultDisplay.classList.add('redText');
  }
};
chooses.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const playerChoose = button.value;
    playGame(playerChoose);
  });
});