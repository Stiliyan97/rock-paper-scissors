function getComputerChoice(params) {
    let computerMove = "";
    const randomNumber = Math.floor(Math.random()*3) + 1 ;
    switch (randomNumber) {
        case 1:
            computerMove = "Rock";
            break;
        case 2:
            computerMove = "Paper";
            break;
        case 3:
            computerMove = "Scissors";
            break;
        default:
            break;
    }
    return computerMove;
}

//function getHumanChoice(params) {
   let humanMove = prompt("What is your Rock Paper Scissors choice:");
   return humanMove;
}

function 


function playGame(params) {


    let humanScore = 0;
    let computerScore = 0;
    let computerChoice = "";
    let humanChoice = "";
    for (let rounds = 1; rounds <= 5; rounds++){
        computerChoice = getComputerChoice().toLowerCase();
        humanChoice = getHumanChoice().toLocaleLowerCase();
        console.log(computerChoice);
        console.log(humanChoice);
        playRound(humanChoice, computerChoice);   
    }
    if(humanScore > computerScore) {
        console.log(`You win! Your Score: ${humanScore} - Computer Score: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose! Your Score: ${humanScore} - Computer Score: ${computerScore}`);
    } else {
        console.log(`Draw! Your Score: ${humanScore} - Computer Score: ${computerScore}`);
    }

    function playRound(humanSelection, computerSelection) {
        const rock = "rock";
        const paper = "paper";
        const scissors = "scissors";
        if (humanSelection === computerSelection) {
            console.log("Draw!!!");
        } else {
            switch (humanSelection) {
                case rock:
                    if (computerSelection === paper) {
                        console.log(`You Lose! ${paper} beats ${rock}`);
                        computerScore++;
                    } else {
                        console.log(`You Win! ${rock} beats ${scissors}`);
                        humanScore++;
                    }
                    break;
                case paper:
                    if (computerSelection === scissors) {
                        console.log(`You Lose! ${scissors} beats ${paper}`);
                        computerScore++;
                    } else {
                        console.log(`You Win! ${paper} beats ${rock}`);
                        humanScore++;
                    }
                    break;
                case scissors:
                    if (computerSelection === rock) {
                        console.log(`You Lose! ${rock} beats ${scissors}`);
                        computerScore++;
                    } else {
                        console.log(`You Win! ${scissors} beats ${paper}`);
                        humanScore++;
                    }
                default:
                    break;
            }
        }
    }
}

playGame();
