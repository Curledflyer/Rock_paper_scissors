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
const computer = getComputerChoice();
let playerChoice = prompt("Enter your choice of rock, paper, or scissors");
let player = playerChoice.toLowerCase();
let comScore = 0;
function playRound() {
   
    if (player == "rock" && computer == "Rock") {
        return "It's a draw! both chose Rock";
    
    } else if  (player == "scissors" && computer == "Rock") { 
        comScore = ++comScore;
       return "You lose! rock beats scissors";

    
    } else if  (player == "scissors" && computer == "Paper") { 
       return "You win! scissors beats paper";
    
    } else if (player == "rock" && computer == "Scissors") {
       return "You win! rock beats scissors";

    } else if (player == "rock" && computer == "Paper") {
       return "You lose! Paper beats rock";
    
    } else if  (player == "scissors" && computer == "Scissors") { 
       return "Its a draw! Both chose scissors";

    } else if  (player == "paper" && computer == "Paper") { 
       return "It's a draw! Both chose paper";
    
    } else if (player == "paper" && computer == "Scissors") {
        return "You lose! scissors beats paper";
      
    } else if (player == "paper" && computer == "Rock") {
        return "You win! paper beats rock";
       
    } else {
        console.log("Try again. please only input either Rock, Paper, or Scissors!");
    }
    }
function game() {
    console.log(playRound(player, computer));
    console.log(getComputerChoice());
}
console.log(game() `current score is ${comScore}.`);

