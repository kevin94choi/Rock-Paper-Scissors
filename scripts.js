const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const btnReset = document.querySelector('#reset');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text')

let playerWinTotal = 0;
let computerWinTotal = 0;

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

    let result = checkWinner(playerSelection,computerSelection);

if(result  == "draw"){
   resultText.innerHTML = "It's a draw! Play again.";
}
else if (result == "win"){
    ++playerWinTotal;
    playerScore.innerHTML = "Player Score: " + playerWinTotal;
    resultText.innerHTML = `You win! ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)} beats ${computerSelection}.`;
    if (playerWinTotal == 5){
        alert("You win!");
    };
}
else if (result == "lose"){
    ++computerWinTotal;
    computerScore.innerHTML = "Computer Score: " + computerWinTotal;
    resultText.innerHTML = `You lose! ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)} beats ${playerSelection}.`;
    if (computerWinTotal == 5){
        alert("Computer wins!");
    };
}
}

btnRock.addEventListener('click', function() {
    let playerSelection = "rock";
    playerChoice.innerHTML = `You chose ${playerSelection}.`
    let computerSelection = getComputerChoice();
   computerChoice.innerHTML = `Computer chose ${computerSelection}.`
    playRound(playerSelection, computerSelection);
});

btnPaper.addEventListener('click', function() {
    let playerSelection = "paper";
    playerChoice.innerText = `You chose ${playerSelection}.`
    let computerSelection = getComputerChoice();
    computerChoice.innerHTML = `Computer chose ${computerSelection}.`
    playRound(playerSelection, computerSelection);
});

btnScissors.addEventListener('click', function () {
    let playerSelection = "scissors";
    playerChoice.innerText = `You chose ${playerSelection}.`
    let computerSelection = getComputerChoice();
    computerChoice.innerHTML = `Computer chose ${computerSelection}.`
    playRound(playerSelection, computerSelection);
});

btnReset.addEventListener('click', resetScore);

function resetScore () {
    playerWinTotal = 0;
    computerWinTotal = 0;
    playerScore.innerHTML = "Player Score: " + 0;
    computerScore.innerHTML = "Computer Score: " + 0;
    playerChoice.innerText = ``;
    computerChoice.innerText = ``;
    resultText.innerText = ``;
}



//  function game() {
//     let playerScore = 0
//     let computerScore =0 

//     for (let i = 1; i <=5; i++) {
//         let computerSelection = getComputerChoice();
//         let playerSelection = prompt(`Round ${i}: Rock, Paper, Scissors! What do you choose?`).toLowerCase();
//         console.log(playRound(playerSelection, computerSelection));
//         console.log("--------------------------")
        
//         if (checkWinner(playerSelection, computerSelection) == "win"){
//             playerScore++; 
//         }
        
//         else if (checkWinner(playerSelection, computerSelection) == "lose"){
//             computerScore++;
//         }
        
//         console.log(`Round ${i}: You chose ${playerSelection} and Computer chose ${computerSelection}.`)

//     }
//     console.log("Game Over!")
//     if (playerScore > computerScore){
//         console.log(`You are the winner! You: ${playerScore} Computer: ${computerScore}.`);
//     }
//     else if (playerScore < computerScore){
//         console.log(`Computer wins! You: ${playerScore} Computer: ${computerScore}.`);
//     }
//     else{
//         console.log("We have a tie!");
//     }
    
   

// }
//    console.log(game()); 

