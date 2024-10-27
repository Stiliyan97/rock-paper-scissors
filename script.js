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
console.log(selectionBtn);

for (let i = 0; i < selectionBtn.length; i++) {
    selectionBtn[i].addEventListener("click", playRound);
    
}

    function playRound(e) {
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

        console.log(playerChoiceImg)

        console.log(computerChoice);
        console.log(playerChoice);
    }