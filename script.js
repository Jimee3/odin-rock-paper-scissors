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
console.log(getComputerChoice());

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

console.log(getHumanChoice());

