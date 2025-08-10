/*
Create variables to track human and CPU score, initialised at 0
PLay 5 rounds of RPS
For each round:
Random number generated
Number corresponds to choie of rock, paper or scissors
The CPU choice is set to the relevant value
Prompt the player to input "rock," "paper" or "scissors"
Change their input to an all lowercase string stored in a choice variable
If they chose rock
    If the computer chose rock, TIE
    If the computer chose paper, LOSE
    If the computer chose scissors, WIN
If they chose paper
    If the computer chose rock, WIN
    If the computer chose paper, TIE
    If the computer chose scissors, LOSE
If they chose scissors
    If the computer chose rock, LOSE
    If the computer chose paper, WIN
    If the computer chose scissors, TIE
If LOSE print "You lose!" and add 1 to CPU score
If WIN print "You win!" and add 1 to Player score
If TIE print "It's a tie!" and add no points to any score
After 5 rounds, if human has higher score, print "You win overall!"
If CPU has higher score, print "You lose overall!"
If it's a tie, print "It's a tie overall!"
*/

function getComputerChoice(){
   let randomNumber = Math.random();
   let chosenWeapon = "";
   if (randomNumber <= 0.33333333333333333) {
        chosenWeapon = "Rock";
   } else if (randomNumber > 0.33333333333333333 && randomNumber <= 0.66666666666666666){
        chosenWeapon = "Paper";
   } else {
        chosenWeapon = "Scissors";
   }
   return chosenWeapon;
   }
   
function getHumanChoice() {
    let humanInput = (window.prompt("Choose your weapon!").toLowerCase());
    let chosenWeapon = "";
    if (humanInput === "rock") {
        chosenWeapon = "Rock";
    }
    if (humanInput === "paper"){
        chosenWeapon = "Paper";
    }
    if (humanInput==="scissors"){
        chosenWeapon = "Scissors";
    }
    return chosenWeapon;
}

function playRound() {
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let roundResult = "";
if (humanChoice === "Rock"){
    if (computerChoice === "Rock") {
        roundResult = "tie";
    }
    if (computerChoice === "Paper") {
        roundResult = "loss";
    }
    if (computerChoice === "Scissors") {
        roundResult = "win";
    }
}
if (humanChoice === "Paper"){
    if (computerChoice === "Rock") {
        roundResult = "win";
    }
    if (computerChoice === "Paper") {
        roundResult = "tie";
    }
    if (computerChoice === "Scissors") {
        roundResult = "loss";
    }
}
if (humanChoice === "Scissors"){
    if (computerChoice === "Rock") {
        roundResult = "loss";
    }
    if (computerChoice === "Paper") {
        roundResult = "win";
    }
    if (computerChoice === "Scissors") {
        roundResult = "tie";
    }
}
if (roundResult === "win") {
    console.log("You win the round!")
    humanScore += 1;
}
if (roundResult === "loss") {
    console.log("You lost this time.")
    computerScore += 1;
}
if (roundResult === "tie") {
    console.log("This round is a tie!")
}

}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }
    console.log(`The final scores are ${humanScore} to you and ${computerScore} to your opponent.`)
    if (humanScore > computerScore) {
        console.log("You won overall. Congratulations!");
    }
    if (humanScore < computerScore) {
        console.log("You lost overall. Better luck next time!")
    }
    if (humanScore == computerScore) {
        console.log("It was a tie overall. What are the chances?")
    }
}


let computerScore = 0;
let humanScore = 0;

playGame();





