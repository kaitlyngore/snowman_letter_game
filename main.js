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

let wins = 0;
let losses = 0;
let guesses = 9;
let guessesList= [];
let snowmanLetter = letterList[Math.floor(Math.random() * lettersList.length)];

// const state = {
    //     wins: 0,
    //     losses: 0,
    //     guesses: 9,
    //     alreadyGuessed: [],
    //     computerLetter: computerChoices[Math.floor(Math.random() * computerChoices.length)]
    
    // }
    
    const playGame = (event) => {
    let playerLetter = event.key;
    if (computerChoices.includes(playerLetter)) {
        if (playerLetter === computerLetter) {
          wins++;
          guesses = 9;
          guessesList = [];
          snowmanLetter = lettersList[Math.floor(Math.random() * computerChoices.length)];
          alert("You got it!");
        } else if (playerLetter != computerLetter) {
          alreadyGuessed.push(playerLetter)
          guesses--;
        }
        if (guesses === 0) {
          losses++;
          guesses = 9;
          guessesList = [];
          snowmanLetter = lettersList[Math.floor(Math.random() * computerChoices.length)];
          
        }
    } else {
        alert("You must choose a letter!");
    }
    
    document.getElementById("player-guess").innerHTML = "   " + playerLetter;
    document.getElementById("win-counter").innerHTML = " " + wins;
    document.getElementById("loss-counter").innerHTML = " " + losses;
    document.getElementById("remaining").innerHTML = " " + guesses;
    document.getElementById("guessed").innerHTML = " " + alreadyGuessed;
}
    
document.addEventListener("keydown", playGame);