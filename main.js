const shoot = document.getElementById('shootButton');
const playerMenu = document.getElementById('choice');

var playerChoice;
var computerChoice;

var playerScore = 0;
var computerScore = 0;

shoot.addEventListener('click' , playerShot);

function playerShot (e) {
    e.preventDefault();
    shoot.disabled = true;
    console.log('the button clicked');
    var playerChoice = playerMenu.value;
    return playerChoice
}
