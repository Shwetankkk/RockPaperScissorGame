
function getComputerChoice() {
  let choice = ['Rock', 'Paper', 'Scissors'];
  let string = choice[Math.floor(Math.random() * 3)]
  return string;

}
function getResult(playerChoice, computerChoice) {

  let score;

  if (playerChoice === computerChoice) {
    score = 0;
  }
  else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1;
  }
  else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
    score = 1;
  }
  else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
    score = 1;
  }
  else {
    score = -1
  }

  return score;

}
function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById('result')
  switch (score) {
    case -1:
      result.innerText = `You Lose!`
      break;
    case 0:
      result.innerText = `It's a Draw!`
      break;
    case 1:
      result.innerText = `You Win!`
      break;
  }
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText = `${Number(playerScore.innerText) + score}`
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}
function onClickRPS(playerChoice) {
    let computerChoice = getComputerChoice()
    let score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value, computerChoice)

  }
function playGame() {
    let rpsbutton = document.querySelectorAll('.rpsButton')
    rpsbutton.forEach(rpsButton => {

      rpsButton.onclick = () => onClickRPS(rpsButton)

    })

    let endgamebutton = document.getElementById('endGameButton')
    endgamebutton.onclick = () => endGame()

 }
function endGame() {
    let player = document.getElementById('player-score')
    let handwa = document.getElementById('hands')
    let result = document.getElementById('result')
    player.innerText = ''
    handwa.innerText = ''
    result.innertext = ''
  }
  playGame()