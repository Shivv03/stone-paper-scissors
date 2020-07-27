var choices = ["p", "r", "s"];

var UserPoints = 0;
var ComPoints = 0;
function score(){
	var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
}
setInterval(score, 50);

function game(playerChoice) {

    let gameDisplay = document.getElementById("game-board");
    gameDisplay.style.display="inline-flex";
    var userChoice = document.getElementById("userChoice")
    userChoice.innerHTML= show(playerChoice);
    var compChoice = document.getElementById("compChoice")
    var i = Math.floor(Math.random() * 3);
    var botChoice = choices[i];
    compChoice.innerHTML= show(botChoice);
    switch(playerChoice+botChoice) {
        case 'pr':
        case 'rs':
        case 'sp':
            win(playerChoice);
            break;
        case 'ss':
        case 'pp':
        case 'rr':
            draw(playerChoice);
        default:
            lose(playerChoice);
    }

    function continueGame() {
        gameDisplay.style.display = "none";
    }
    setTimeout(continueGame, 3000);
}

function show(choice) {
    if(choice === "p") return '<i class="far fa-hand-paper"></i>';
	if(choice === "r") return '<i class="far fa-hand-rock"></i>';
	return '<i class="far fa-hand-scissors"></i>'
}

function win(selectedChoice){
    UserPoints++;
    document.getElementById("showResult").innerHTML = "You win!";
    var choiceIcon = document.getElementById(selectedChoice);
    choiceIcon.classList.remove("bn");
    choiceIcon.classList.add("green");
    setTimeout(() => {
    	choiceIcon.classList.add("bn");
        choiceIcon.classList.remove("green");
    }, 3000);
}

function draw(selectedChoice){
    document.getElementById("showResult").innerHTML = "It's a Draw..";
    var choiceIcon = document.getElementById(selectedChoice);
    choiceIcon.classList.remove("bn");
    choiceIcon.classList.add("gray");
    setTimeout(() => {
    	choiceIcon.classList.add("bn");
        choiceIcon.classList.remove("gray");
    }, 3000);
}

function lose(selectedChoice){
    ComPoints++;
    document.getElementById("showResult").innerHTML = "OOPS! You Lost..";
    var choiceIcon = document.getElementById(selectedChoice);
    choiceIcon.classList.remove("bn");
    choiceIcon.classList.add("red");
    setTimeout(() => {
    	choiceIcon.classList.add("bn");
        choiceIcon.classList.remove("red");
    }, 3000);
}

