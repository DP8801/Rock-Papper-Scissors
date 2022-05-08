const computerChoiceDisplay = document.getElementById('computer-choice');
const computerImage = document.getElementById('computer-image');
const userChoiceDisplay = document.getElementById('user-choice');
const userImage = document.getElementById('user-image');
const imageLink = "images";
const ext = ".svg";
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
//     userChoice = e.target.id;
//     userChoiceDisplay.innerHTML = userChoice;
//     generateComputerChoice();
//     getResult();
// }));

possibleChoices.forEach(function (possibleChoice) {
    possibleChoice.addEventListener('click', function (e) {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        userImage.setAttribute("src", generateImage(userChoice));
        computerChoice = generateComputerChoice();
        computerChoiceDisplay.innerHTML = computerChoice;
        computerImage.setAttribute("src", generateImage(computerChoice));
        getResult();
    });
});

function generateImage(choice) {
    if (choice === "rock") {
        return `${imageLink}/fist.svg`;
    }
    else if (choice === "scissors") {
        return `${imageLink}/two.svg`;
    }
    else if (choice === "paper") {
        return `${imageLink}/privacy.svg`;
    }
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if (randomNumber === 1) {
        computerChoice = "rock";
        return computerChoice;
    }
    if (randomNumber === 2) {
        computerChoice = "scissors";
        return computerChoice;
    }
    if (randomNumber === 3) {
        computerChoice = "paper";
        return computerChoice;
    }

}

function getResult() {
    if (computerChoice === userChoice) {
        result = "its a draw!";
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "you win!";
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "you lost!";
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "you win!";
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "you lost!";
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "you lost!";
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "you win!";
    }
    resultDisplay.innerHTML = result.toUpperCase();
}
