const lettersList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

let guesses = 10;
let guessesList = [];
let snowmanLetter = lettersList[Math.floor(Math.random() * lettersList.length)];

const resetGame = () => {
    guesses = 10;
    guessesList = [];
    snowmanLetter = lettersList[Math.floor(Math.random() * lettersList.length)];
}

const endGame = (status) => {
    document.querySelector("#game-status").innerHTML = `${status} The letter is <h2>${snowmanLetter.toUpperCase()}</h2>`;
    document.removeEventListener("keydown", playGame);
}

document.getElementById("remaining").innerHTML = " " + guesses;

const playGame = (event) => {
    let playerLetter = event.key;
    
    if (lettersList.includes(playerLetter)) {
        if (playerLetter === snowmanLetter) {
            endGame("You won!")
            
        } else if (playerLetter != snowmanLetter) {
            --guesses;
            guessesList.push(playerLetter)
            console.log(guesses);
        }
    } else {
        alert("You must choose a letter!");
    }
    
    if (guesses < 1) {
        endGame("You lose!")
    }

    document.getElementById("player-guess").innerHTML = "" + playerLetter;
    document.getElementById("guessed").innerHTML = "" + guessesList + ", ";
    document.getElementById("remaining").innerHTML = " " + guesses;
}

    
    
document.addEventListener("keydown", playGame);