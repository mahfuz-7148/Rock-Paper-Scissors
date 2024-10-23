const choose = ['rock', 'paper', 'scissors'];
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
    (playerChoose === 'rock' && computerChoose === 'scissors') ||
    (playerChoose === 'paper' && computerChoose === 'rock') ||
    (playerChoose === 'scissors' && computerChoose === 'paper')
  ) {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }
  resultDisplay.textContent = result;
  resultDisplay.classList.remove('greenText', 'redText');
  switch (result) {
    case 'You win!':
      resultDisplay.classList.add('greenText');
      break;
    case 'You lose!':
      resultDisplay.classList.add('redText');
      break;
  }
};
chooses.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const playerChoose = button.value;
    playGame(playerChoose);
  });
});
