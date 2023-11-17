
function getComputerChoice (){

    let randNum = Math.floor(Math.random() * 3) + 1;

    if (randNum == 1){
        return "rock";
    }
    else if (randNum == 2){
        return "scissors";
    }
    else if (randNum == 3){
        return "paper";
    }
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return "draw";
    }
    else if( (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "rock")){
        return "win" ;
}
else if ( (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")){
        return  "lose";
    }
}

function playRound(playerSelection, computerSelection){

const result = checkWinner(playerSelection, computerSelection);
if(result  == "draw"){
    return "It's a draw! Play again."
}
else if (result == "win"){
    return `You win! ${playerSelection} beats ${computerSelection}.`
}
else if (result == "lose"){
    return `You lose! ${computerSelection} beats ${playerSelection}.`
}
}

 function game() {
    let playerScore = 0
    let computerScore =0 

    for (let i = 1; i <=5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt(`Round ${i}: Rock, Paper, Scissors! What do you choose?`).toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        console.log("--------------------------")
        
        if (checkWinner(playerSelection, computerSelection) == "win"){
            playerScore++; 
        }
        
        else if (checkWinner(playerSelection, computerSelection) == "lose"){
            computerScore++;
        }
        
        console.log(`Round ${i}: You chose ${playerSelection} and Computer chose ${computerSelection}.`)

    }
    console.log("Game Over!")
    if (playerScore > computerScore){
        console.log(`You are the winner! You: ${playerScore} Computer: ${computerScore}.`);
    }
    else if (playerScore < computerScore){
        console.log(`Computer wins! You: ${playerScore} Computer: ${computerScore}.`);
    }
    else{
        console.log("We have a tie!");
    }
    
   

}
   console.log(game()); 

