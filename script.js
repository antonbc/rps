function playGame(){
    let playerSelection = prompt("Please enter value").toLowerCase();
    let choice = ['rock', 'paper', 'scissors']
    function getComputerChoice(choice){
        return choice[Math.floor(Math.random() * choice.length)];
    }
    let computerSelection = getComputerChoice(choice);

    function playRound(playerSelection, computerSelection) {
        if (computerSelection == playerSelection) return "It's a tie";
        else if (computerSelection == "scissors" && playerSelection == "paper") return "comp win";
        else if (computerSelection == "scissors" && playerSelection == "rock") return "player win";
        else if (computerSelection == "rock" && playerSelection == "scissors") return "comp win";
        else if (computerSelection == "rock" && playerSelection == "paper") return "player win";
        else if (computerSelection == "paper" && playerSelection == "rock") return "comp win";
        else if (computerSelection == "paper" && playerSelection == "scissors") return "player win";
    }

    console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i < 5; i++){
    playGame()
}