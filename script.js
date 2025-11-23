console.log("Hello World!")
console.log(Math.floor(Math.random()* 3 + 1 ))

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

console.log(getComputerChoice())