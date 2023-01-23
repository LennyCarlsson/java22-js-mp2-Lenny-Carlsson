document.getElementById("playBtn").addEventListener("click", startGame);
document.getElementById("rock").addEventListener("click", function(){ play("rock"); });
document.getElementById("paper").addEventListener("click", function(){ play("paper"); });
document.getElementById("scissors").addEventListener("click", function(){ play("scissors"); });
document.getElementById("restart").addEventListener("click", resetGame);

let playerName;
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let gameOver = false;
let result;
let choices = ['rock', 'paper', 'scissors'];

function startGame() {
  playerName = document.getElementById('name').value;
  document.getElementById('input').style.display = 'none';
  document.getElementById('choices').style.display = 'block';
  document.getElementById('scores').style.display = 'block';
  //console.log('in startGame');
  updateScores();
}

function play(choice) {
  if (!gameOver) {
    playerChoice = choice;
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    result = checkResult();
    document.getElementById('result').innerHTML = result;

    updateScores();
    checkGameOver();
  }
}

function checkResult() {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    return "You win this round, " + playerName + "! " + playerChoice + " beats " + computerChoice + ".";
  } else {
    computerScore++;
    return "You lose this round, " + playerName + ". " + computerChoice + " beats " + playerChoice + ".";
  }

}

function checkGameOver() {
    if (playerScore === 3 || computerScore === 3) {
      gameOver = true;
      document.getElementById('choices').style.display = 'none';
      if (playerScore === 3) {
        
        document.getElementById('result').innerHTML = ` Congratulations ${playerName} ! You won the game! Your choice was:  ${playerChoice} and the computers choice was ${computerChoice}`;
        document.getElementById("restart").classList.remove("hidden");
  
      } else {
        document.getElementById('result').innerHTML = `Sorry, ${playerName} You lost the game! Your choice was:  ${playerChoice} and The winning choice was ${computerChoice}`;
        document.getElementById("restart").classList.remove("hidden");
      }
    }
    
  }
  
  function resetGame() {
    gameOver = false;
    playerScore = 0;
    computerScore = 0;
    document.getElementById('input').style.display = 'block';
    document.getElementById('result').innerHTML = '';
    document.getElementById("restart").classList.add("hidden");
   
    updateScores();
  }
  
  function updateScores() {
    document.getElementById('playerScore').innerHTML = 'Your Score: ' + playerScore;
    document.getElementById('computerScore').innerHTML = 'Computer Score: ' + computerScore;
    
  }
  