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
   
let computerChoice = getComputerChoice();

console.log(computerChoice)

