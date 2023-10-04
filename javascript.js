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

function round() {
let player = prompt("Enter your choice of rock, paper, or scissors");
if ((player == "rock" || player == "Rock") && computer == "Rock") {
    console.log(computer);
    console.log("It's a draw, both choose rock");

} else if  ((player == "scissors" || player == "Scissors") && computer == "Rock") { 
    console.log(computer);
    console.log("You lose! Rock beats scissors");

} else if  ((player == "scissors" || player == "Scissors") && computer == "Paper") { 
    console.log(computer);
    console.log("You win! Scissor beats paper");

} else if ((player == "Rock" || player == "rock") && computer == "Scissors") {
    console.log(computer);
    console.log("You win! Rock beats scissors");

} else if ((player == "Rock" || player == "rock") && computer == "Paper") {
    console.log(computer);
    console.log("You Lose! Paper beats rock");

} else if  ((player == "scissors" || player == "Scissors") && computer == "Scissors") { 
    console.log(computer);
    console.log("It's a draw, both choose scissors");

} else if  ((player == "paper" || player == "Paper") && computer == "Paper") { 
    console.log(computer);
    console.log("It's a draw, both choose paper");

} else if ((player == "Paper" || player == "paper") && computer == "Scissors") {
    console.log(computer);
    console.log("You Lose! Scissors beat paper");

} else if ((player == "Paper" || player == "paper") && computer == "Rock") {
    console.log(computer);
    console.log("You win! Paper beats rock");
} else {
    console.log("Try again. please only input either Rock, Paper, or Scissors!");
}
}
alert(round());
