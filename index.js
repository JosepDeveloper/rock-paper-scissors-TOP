const $ = (element) => document.querySelector(element);
const $$ = (element) => document.querySelectorAll(element);

const ELECTIONS_GAME = ["paper", "rock", "scissors"];

const REQUERIMENT_WIN = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

const VALUES = {
  playerWin: "win",
  playerLose: "lose",
  playerTied: "tied",
};

const counter = {
  player: 0,
  computer: 0,
};

const $cards = $$(".card");
const $playerImg = $("#player-img");
const $computerImg = $("#computer-img");
const $testUser = $("#text-user");
const $counterPlayer = $("#player");
const $counterComputer = $("#computer");
const $textSupport = $("#text-support");

const getComputerChoise = () => {
  const GAME_OPCIONS = Object.values(REQUERIMENT_WIN);
  const numberOfGame = Math.floor(Math.random() * GAME_OPCIONS.length);

  return GAME_OPCIONS[numberOfGame];
};

const roundOfGame = (playerSelection, computerSelection) => {
  const playerToLowerCase = playerSelection.toLowerCase();

  if (playerToLowerCase === computerSelection) return VALUES.playerTied;

  if (REQUERIMENT_WIN[playerToLowerCase] === computerSelection) {
    return VALUES.playerWin;
  }

  return VALUES.playerLose;
};

const resetGame = () => {
  if (counter.computer === 5) {
    alert("You lose 😭!");
  }

  if (counter.player === 5) {
    alert("User won 🥳!");
  }
  if (counter.computer === 5 || counter.player === 5) {
    counter.player = 0;
    counter.computer = 0;
    $playerImg.setAttribute("src", `./img/question.svg`);
    $computerImg.setAttribute("src", `./img/question.svg`);
    $testUser.innerText = "Choose your weapon";
    $textSupport.innerText = `First to score 5 points wins the game`;
    $counterPlayer.innerText = counter.player;
    $counterComputer.innerText = counter.computer;
  }
};

$cards.forEach((card) => {
  card.addEventListener("click", () => {
    const playerDesision = card.getAttribute("data-id");
    const computerDecision = getComputerChoise();
    const roundResult = roundOfGame(playerDesision, computerDecision);

    ELECTIONS_GAME.forEach((element) => {
      if (playerDesision === element) {
        $playerImg.setAttribute("src", `./img/${element}.svg`);
      }

      if (computerDecision === element) {
        $computerImg.setAttribute("src", `./img/${element}.svg`);
      }
    });

    if (roundResult === VALUES.playerLose) {
      counter.computer++;
      $testUser.innerText = "You lose!";
      $counterComputer.innerText = counter.computer;
      $textSupport.innerText = `${playerDesision} is beaten by ${computerDecision}`;
    }
    if (roundResult === VALUES.playerWin) {
      counter.player++;
      $testUser.innerText = "You won!";
      $counterPlayer.innerText = counter.player;
      $textSupport.innerText = `${playerDesision} beats ${computerDecision}`;
    }

    if (roundResult === VALUES.playerTied) {
      $testUser.innerText = "It's a tie!";
      $textSupport.innerText = `${computerDecision} ties with ${playerDesision}`;
    }

    resetGame();
  });
});
