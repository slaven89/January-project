var shoot = document.getElementById('shootButton');
var playerChoice = ' ';
var computerChoice = ' ';
shoot.addEventListener('click' , playerShot);

function playerShot (e) {
    e.preventDefault();
    shoot.disabled = true;
    console.log('the button clicked');

}