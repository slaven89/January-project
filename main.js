const shoot = document.getElementById('shootButton');
const playerMenu = document.getElementById('choice');

var playerChoice;
var computerChoice;

var playerScore = 0;
var computerScore = 0;

var playerVisual = document.getElementById('playerVisual');
var computerVisual = document.getElementById('computerVisual');

shoot.addEventListener('click' , playerShot);

function playerShot (e) {
    e.preventDefault();
    shoot.disabled = true;
    var playerChoice = playerMenu.value;
    var options = ['rock', 'paper', 'scissors'];
    var rng = Math.floor(Math.random() * 3) + 1;
    var rngTwo = rng - 1;
    var computerChoice = options[rngTwo];
    var results = [playerChoice, computerChoice];
    console.log(results);
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
}