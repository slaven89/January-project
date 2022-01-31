const shoot = document.getElementById('shootButton');
const playerMenu = document.getElementById('choice');
const goAgain = document.getElementById('goAgainButton');

goAgain.disabled = true;

var playerChoice;
var computerChoice;

var playerScore = 0;
var computerScore = 0;

var playerVisual = document.getElementById('playerVisual');
var computerVisual = document.getElementById('computerVisual');
var showResults = document.getElementById('whatHappened');

var scoreKeeper = document.getElementById('keepScore');
scoreKeeper.textContent = 'Player: ' + playerScore + '. Computer: ' + computerScore + '. First one to five wins.'

shoot.addEventListener('click' , playerShot);
shoot.addEventListener('mouseup' , reEnable);

function playerShot (e) {
    e.preventDefault();
    shoot.disabled = true;
    var playerChoice = playerMenu.value;
    var options = ['rock', 'paper', 'scissors'];
    var rng = Math.floor(Math.random() * 3) + 1;
    var rngTwo = rng - 1;
    var computerChoice = options[rngTwo];
    var results = [playerChoice, computerChoice];
    //playerScore++;
    //scoreKeeper.textContent = 'Player: ' + playerScore + '. Computer: ' + computerScore + '. First one to five wins.'
    showResults.textContent = 'You chose ' + results[0].toLowerCase() +'. They chose ' + results[1] + '.'
        if (results[0] == 'Paper') {
            playerVisual.src = '../January/images/playerpaper.jpg';
        } 
        else if (results[0] == 'Scissors') {
            playerVisual.src = '../January/images/playerscissors.jpg';
        } 
        else {
            playerVisual.src = '../January/images/playerrock.jpg';
        }
        if (results[1] == 'paper') {
            computerVisual.src = '../January/images/computerpaper.jpeg';
        } 
        else if (results[1] == 'rock') {
            computerVisual.src = '../January/images/computerrock.jpg';
        } 
        else {
            computerVisual.src = '../January/images/computerscissors.jpg';
        }
       function roundWinner(results) {
            if (playerChoice.toLowerCase() == computerChoice) {
                scoreKeeper.textContent = 'Draw. Player: ' + playerScore + '. Computer: ' + computerScore + '. First one to five wins.'
            } 
            else if (condition) {
                
            }

        }
        roundWinner();
    }
function reEnable (e) {
    e.preventDefault();
    if (playerScore < 5 && computerScore < 5) {
        goAgain.hidden = false;
        goAgain.disabled = false;
        goAgain.addEventListener('click' , (e) => {
            shoot.disabled = false;
            goAgain.disabled = true;
            playerVisual.src = '../January/images/ready.jpg';
            computerVisual.src = '';
            showResults.textContent = '';
            goAgain.hidden = true;
    })
    
    }
    }