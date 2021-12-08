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
  "z",
];

let guesses = 10;
let guessesList = [];
let snowmanLetter = lettersList[Math.floor(Math.random() * lettersList.length)];

document.getElementById("remaining").textContent = guesses;

const playGame = (event) => {
  console.log(event);
  let playerLetter = event.key;
  if (lettersList.includes(playerLetter)) {
    if (playerLetter == snowmanLetter) {
      document.querySelector(
        "#game-status"
      ).innerHTML = `You win! The letter is <h2>${snowmanLetter}</h2>`;
      document.removeEventListener("keydown", playGame);
    } else if (playerLetter != snowmanLetter) {
      --guesses;
      guessesList.push(playerLetter);
      if (guessesList.length === 10) {
        document.querySelector(
          "#game-status"
        ).innerHTML = `You lose! The letter is <h2>${snowmanLetter}</h2>`;
        document.removeEventListener("keydown", playGame);
      }
    }
  } else {
    alert("You need to choose a letter!");
  }
  document.getElementById("player-guess").textContent = ` ${playerLetter}`;
  document.getElementById("guessed").textContent = ` ${guessesList} `;
  document.getElementById("remaining").textContent = ` ${guesses}`;
};

document.addEventListener("keydown", playGame);
