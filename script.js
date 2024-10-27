function getComputerChoice() {
    let computerMove = "";
    const randomNumber = Math.floor(Math.random()*3) + 1 ;
    switch (randomNumber) {
        case 1:
            computerMove = "rock";
            break;
        case 2:
            computerMove = "paper";
            break;
        case 3:
            computerMove = "scissors";
            break;
        default:
            break;
    }
    return computerMove;
}

function getHumanChoice (e) {
    let humanMove = "";

    if (e.target.tagName.toLowerCase() === 'img') {
        humanMove = e.target.parentElement.id;
    } else if (e.target.tagName.toLowerCase() === 'button') {
        humanMove = e.target.id;
    }
    return humanMove;
}

let selectionBtn = document.querySelectorAll(".selections-btn")

for (let i = 0; i < selectionBtn.length; i++) {
    selectionBtn[i].addEventListener("click", playRound);
    
}

    function playRound(e) {
        let playerScoreDiv = document.getElementById("player-points");
        let computerScoreDiv = document.getElementById("computer-points");

        let playerScore = parseInt(playerScoreDiv.textContent.trim());
        let computerScore = parseInt(computerScoreDiv.textContent.trim());


        if (playerScore === 5 || computerScore === 5) {
            return
        }

        let computerChoice = getComputerChoice();
        let playerChoice = getHumanChoice(e);
        

        let playerChoiceImg = document.createElement("img");
        playerChoiceImg.src = `./images/${playerChoice}.png`;

        let computerChoiceImg = document.createElement("img");
        computerChoiceImg.src = `./images/${computerChoice}.png`;

        let playerChoiceImgDiv = document.getElementById("player-move");
        let computerChoiceImgDiv = document.getElementById("computer-move");


        console.log(playerChoiceImgDiv)
        if(playerChoiceImgDiv.firstElementChild !== null) {
            playerChoiceImgDiv.removeChild(playerChoiceImgDiv.firstElementChild);
            computerChoiceImgDiv.removeChild(computerChoiceImgDiv.firstElementChild);
        }

        playerChoiceImgDiv.appendChild(playerChoiceImg);
        computerChoiceImgDiv.appendChild(computerChoiceImg);


        switch (playerChoice) {
            case "rock":
                if (computerChoice === "scissors") {
                    playerScoreDiv.textContent = `${++playerScore} `;
                } else {
                    computerScoreDiv.textContent = `${++computerScore}`;
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    playerScoreDiv.textContent = `${++playerScore} `;
                } else {
                    computerScoreDiv.textContent = `${++computerScore}`;
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    playerScoreDiv.textContent = `${++playerScore} `;
                } else {
                    computerScoreDiv.textContent = `${++computerScore}`;
                }
                break;
            default:
                break;
        }

        console.log(playerChoiceImg)

        console.log(computerChoice);
        console.log(playerChoice);
    }