/*Part 1, computer randomise choice or Rock, Paper, Scissors. 
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
console.log(getComputerChoice());