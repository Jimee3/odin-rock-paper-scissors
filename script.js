function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1)

    if (computerChoice == 1) {
        computerChoice = "Rock"
    } else if (computerChoice == 2) {
        computerChoice = "Paper"
    } else {
        computerChoice ="Scissors"
    }
    return computerChoice
}
// console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Enter you choice:")
    humanChoice = humanChoice.trim().toLowerCase()

    //if statement make the first letter capitalised, probably overkill :P
    if (humanChoice == "rock") {
        humanChoice = "Rock"
    } else if (humanChoice == "paper") {
        humanChoice = "Paper"
    } else if (humanChoice == "scissors") {
        humanChoice = "Scissors"
    } else {
        humanChoice = null
    }
    return humanChoice
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        humanScore++
    } else if ((computerChoice == "Rock" && humanChoice == "Scissors") || (computerChoice == "Paper" && humanChoice == "Rock") || (computerChoice == "Scissors" && humanChoice == "Paper")) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++
    } else if (humanChoice == computerChoice) {
        console.log(`It's a draw! You both choose ${humanChoice}`)
    } else {
        console.log("An error occurred. Scores are unchanged")
    }
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer's Score: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
