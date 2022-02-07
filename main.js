//Declaring variables

const shoot = document.getElementById('shootButton');
const playerMenu = document.getElementById('choice');
const goAgain = document.getElementById('goAgainButton');
const newGame = document.getElementById('endOfGame');

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

//Shoot button event triggers
shoot.addEventListener('click' , reEnable);
shoot.addEventListener('click' , playerShot);

//Runs computer choice, changes images
function playerShot (e) {
    e.preventDefault();
    shoot.disabled = true;
    var playerChoice = playerMenu.value;
    var options = ['rock', 'paper', 'scissors'];
    var rng = Math.floor(Math.random() * 3) + 1;
    var rngTwo = rng - 1;
    var computerChoice = options[rngTwo];
    var results = [playerChoice, computerChoice];

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
        //Nested function, determines round winner
       function roundWinner(results) {
            if (playerChoice.toLowerCase() == computerChoice) {
                scoreKeeper.textContent = 'Draw. Player: ' + playerScore + '. Computer: ' + computerScore + '. First one to five wins.'
            } 
            else if (playerChoice == 'Scissors' && computerChoice == 'paper') {
                playerScore++;
                scoreKeeper.textContent = 'You Won This Round. Player: ' + playerScore + '. Computer: ' + computerScore + '. First one to five wins.'
            }
            else if (playerChoice == 'Paper' && computerChoice == 'rock') {
                playerScore++;
                scoreKeeper.textContent = 'You Won This Round. Player: ' + playerScore + '. Computer: ' + computerScore + '. First one to five wins.'
            }
            else if (playerChoice == 'Rock' && computerChoice == 'scissors') {
                playerScore++;
                scoreKeeper.textContent = 'You Won This Round. Player: ' + playerScore + '. Computer: ' + computerScore + '. First one to five wins.'
            }
            else {
                computerScore++;
                scoreKeeper.textContent = 'You Lost This Round. Player: ' + playerScore + '. Computer: ' + computerScore + '. First one to five wins.'
            }

        }
        roundWinner();
    }

//Changes interface, Go Again button or Final Score display. Timeout lets it run with other event trigger cleanly.
function reEnable (e) {
    e.preventDefault();
    setTimeout ( () => {
    if (playerScore <= 4 && computerScore <= 4) {
        goAgain.hidden = false;
        goAgain.disabled = false;
        goAgain.addEventListener('click' , (e) => {
            shoot.disabled = false;
            goAgain.disabled = true;
            playerVisual.src = '../January/images/ready.jpg';
            computerVisual.src = '';
            showResults.textContent = '';
            scoreKeeper.textContent = 'Player: ' + playerScore + '. Computer: ' + computerScore + '. First one to five wins.'
            goAgain.hidden = true;
    })
    
    }
    else if (playerScore >= 5) {
        scoreKeeper.textContent = 'You Won The Match. Final Score is ' + playerScore + ' to ' + computerScore + '.'
        newGame.hidden = false;
    }
    else {
        scoreKeeper.textContent = 'You Lost The Match. Final Score is ' + playerScore + ' to ' + computerScore + '.'
        newGame.hidden = false;
    }
}, 200);
    }