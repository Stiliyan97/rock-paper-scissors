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

        let contentDiv = document.querySelector(".content");

        if(contentDiv.childElementCount > 2) {
            return;
        } 

        let playerScoreDiv = document.getElementById("player-points");
        let computerScoreDiv = document.getElementById("computer-points");

        let playerScore = parseInt(playerScoreDiv.textContent.trim());
        let computerScore = parseInt(computerScoreDiv.textContent.trim());

        

        let computerChoice = getComputerChoice();
        let playerChoice = getHumanChoice(e);
        

        let playerChoiceImg = document.createElement("img");
        playerChoiceImg.src = `./images/${playerChoice}.png`;

        let computerChoiceImg = document.createElement("img");
        computerChoiceImg.src = `./images/${computerChoice}.png`;

        let playerChoiceImgDiv = document.getElementById("player-move");
        let computerChoiceImgDiv = document.getElementById("computer-move");

        let resultCenterDIv = document.querySelector(".center");
        if(resultCenterDIv.childElementCount === 2) {
            resultCenterDIv.removeChild(resultCenterDIv.lastElementChild);
        }
        console.log(resultCenterDIv);
        let declarationPara = document.createElement("p");
        declarationPara.classList.add("declaration");
        console.log(declarationPara);


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
                    declarationPara.textContent = `${playerChoice} beats ${computerChoice}! You WIN!`;
                    resultCenterDIv.appendChild(declarationPara);
                } else if (computerChoice === "paper") {
                    computerScoreDiv.textContent = `${++computerScore}`;
                    declarationPara.textContent = `${computerChoice} beats ${playerChoice}! You LOSE!`;
                    resultCenterDIv.appendChild(declarationPara);
                } else {
                    declarationPara.textContent = `Draw`;
                    resultCenterDIv.appendChild(declarationPara);
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    playerScoreDiv.textContent = `${++playerScore} `;
                    declarationPara.textContent = `${playerChoice} beats ${computerChoice}! You WIN!`;
                    resultCenterDIv.appendChild(declarationPara);
                } else if (computerChoice === "scissors") {
                    computerScoreDiv.textContent = `${++computerScore}`;
                    declarationPara.textContent = `${computerChoice} beats ${playerChoice}! You LOSE!`;
                    resultCenterDIv.appendChild(declarationPara);
                } else {
                    declarationPara.textContent = `Draw`;
                    resultCenterDIv.appendChild(declarationPara);
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    playerScoreDiv.textContent = `${++playerScore} `;
                    declarationPara.textContent = `${playerChoice} beats ${computerChoice}! You WIN!`;
                    resultCenterDIv.appendChild(declarationPara);
                } else if (computerChoice === "rock"){
                    computerScoreDiv.textContent = `${++computerScore}`;
                    declarationPara.textContent = `${computerChoice} beats ${playerChoice}! You LOSE!`;
                    resultCenterDIv.appendChild(declarationPara);
                } else {
                    declarationPara.textContent = `Draw`;
                    resultCenterDIv.appendChild(declarationPara);
                }
                break;
            default:
                break;
        }   

        if (playerScore === 5 || computerScore === 5) {
            if(playerScore === 5){
                let winMassage = document.createElement("p");
                winMassage.textContent = "You WIN!!!";
                contentDiv.appendChild(winMassage);
            } else if (computerScore === 5) {
                let loseMassage = document.createElement("p");
                loseMassage.textContent = "You LOSE!!!";
                contentDiv.appendChild(loseMassage);
            }
            let newGameBtn = document.createElement("button");
            newGameBtn.textContent = "Start New Game";
            newGameBtn.addEventListener("click", startNewGame);
            console.log(newGameBtn);
            console.log(contentDiv);
            contentDiv.appendChild(newGameBtn);
            return
        }

        function startNewGame (){
            contentDiv.removeChild(contentDiv.lastElementChild);
            contentDiv.removeChild(contentDiv.lastElementChild);
            playerScoreDiv.textContent = "0";
            computerScoreDiv.textContent = "0";
            resultCenterDIv.removeChild(resultCenterDIv.lastChild);
            playerChoiceImgDiv.removeChild(playerChoiceImgDiv.lastChild);
            computerChoiceImgDiv.removeChild(computerChoiceImgDiv.lastChild);
        }
    }