const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScoreSpan = document.querySelector('#playerScore');
const compScoreSpan = document.querySelector('#compScore');
const result = document.querySelector('.result');

let playerScore = 0;
let compScore = 0;

rock.addEventListener('click', () => playGame('rock'))
paper.addEventListener('click', () => playGame('paper'))
scissors.addEventListener('click', () => playGame('scissors'))

function playGame(playerSelection){
    let choice = ['rock', 'paper', 'scissors']
    function getComputerChoice(choice){
        return choice[Math.floor(Math.random() * choice.length)];
    }
    let computerSelection = getComputerChoice(choice);

    function playRound(playerSelection, computerSelection) {
        if (computerSelection === playerSelection) return "tie, no one wins"
        else if (
            (computerSelection === 'rock' && playerSelection === 'paper') || 
            (computerSelection === 'paper' && playerSelection === 'scissors') || 
            (computerSelection === 'scissors' && playerSelection === 'rock') 
        ){
            playerScore++;
            playerScoreSpan.textContent = playerScore;
            return 'player wins';
        }
        else{
            compScore++;
            compScoreSpan.textContent = compScore;
            return 'comp wins';
        }
    }

    let outputText = playRound(playerSelection, computerSelection);
    result.textContent  = outputText;
    
    if (playerScore === 5) {
        result.textContent = 'game over, player win';
        return;
    }
    else if (compScore === 5) {
        result.textContent = 'game over, comp win';
        return;
    }



}
