/*Part 1:   computer randomise choice or Rock, Paper, Scissors. 
Complete. */

let choice = Math.floor(Math.random() * 100) + 1;

function getComputerChoice() {
    const    a = 'Rock';
    const    b = 'Paper';
    const    c = 'Scissors';
    
let result;

    if (choice <= 33) {
        result = a;
    } else if (choice > 33 && choice <= 66) {
        result = b;
    } else {
        result = c;
    }
    
   return result
}
let computer = getComputerChoice();


/* Part 2:  Function that can take the computer random choice, and the user choice. 
Based on the choices return a string to declare either the winner or a draw. */
let computerScore = 0;
let playerScore = 0;


function round() {
let playerChoice = prompt("Enter your choice of rock, paper, or scissors");
let player = playerChoice.toLowerCase();
if ((player == "rock" || player == "Rock") && computer == "Rock") {
    console.log(computer);
    console.log("It's a draw, both choose rock");

} else if  ((player == "scissors" || player == "Scissors") && computer == "Rock") { 
    console.log(computer);
    console.log("You lose! Rock beats scissors");
    computerScore = ++computerScore;

} else if  ((player == "scissors" || player == "Scissors") && computer == "Paper") { 
    console.log(computer);
    console.log("You win! Scissor beats paper");
    playerScore = ++playerScore;

} else if ((player == "Rock" || player == "rock") && computer == "Scissors") {
    console.log(computer);
    console.log("You win! Rock beats scissors");
    playerScore = ++playerScore;

} else if ((player == "Rock" || player == "rock") && computer == "Paper") {
    console.log(computer);
    console.log("You Lose! Paper beats rock");
    computerScore = ++computerScore;

} else if  ((player == "scissors" || player == "Scissors") && computer == "Scissors") { 
    console.log(computer);
    console.log("It's a draw, both choose scissors");

} else if  ((player == "paper" || player == "Paper") && computer == "Paper") { 
    console.log(computer);
    console.log("It's a draw, both choose paper");

} else if ((player == "Paper" || player == "paper") && computer == "Scissors") {
    console.log(computer);
    console.log("You Lose! Scissors beat paper");
    computerScore = ++computerScore;

} else if ((player == "Paper" || player == "paper") && computer == "Rock") {
    console.log(computer);
    console.log("You win! Paper beats rock");
    playerScore = ++playerScore;
} else {
    console.log("Try again. please only input either Rock, Paper, or Scissors!");
}
}
alert(round());

/* Part 3: Keep score and display winner after 5 rounds */


function gameFive() {
if (playerScore > computerScore) {
    console.log(`Congrats! you won ${playerScore} : ${computerScore}.`);
} else if (computerScore > playerScore) {
    console.log(`You lose! the score was ${computerScore} : ${playerScore}.`);
} else {
    console.log(`It's a draw! The score was ${computerScore} : ${playerScore}`)
}
}
console.log(gameFive());