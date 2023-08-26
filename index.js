const REQUERIMENT_WIN = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

const VALUES = {
  playerWin: "win",
  payerLose: "lose",
  playerTied: "tied",
  unknown: "unknown",
};

const getComputerChoise = () => {
  const GAME_OPCIONS = Object.values(REQUERIMENT_WIN);
  const numberOfGame = Math.floor(Math.random() * GAME_OPCIONS.length);

  return GAME_OPCIONS[numberOfGame];
};

const roundOfGame = (playerSelection, computerSelection) => {
  const playerToLowerCase = playerSelection.toLowerCase();

  if (!REQUERIMENT_WIN.hasOwnProperty(playerToLowerCase)) return VALUES.unknown;

  if (playerToLowerCase === computerSelection) return VALUES.playerTied;

  if (REQUERIMENT_WIN[playerToLowerCase] === computerSelection) {
    return VALUES.playerWin;
  } else {
    return VALUES.payerLose;
  }
};

const game = () => {
  let inputUser = "";
  let computerChoise = 0;
  const counter = {
    user: 0,
    computer: 0,
  };

  for (let i = 0; i <= 4; i++) {
    inputUser = prompt("Choose: Rock, Paper or Scissors");
    computerChoise = getComputerChoise();

    const result = roundOfGame(inputUser, computerChoise);

    if (result === VALUES.unknown) {
      console.log("Valor invalido");
      break;
    }

    if (result === VALUES.playerTied) {
      console.log(`the computer chose ${computerChoise}`);
      console.log(`tied!! the two have chosen ${inputUser.toLowerCase()}`);
      continue;
    }

    if (result === VALUES.playerWin) {
      console.log(`the computer chose ${computerChoise}`);
      console.log(
        `You Win!! ${inputUser.toLowerCase()} beats ${computerChoise}`
      );
      counter.user++;
    } else {
      console.log(`the computer chose ${computerChoise}`);
      console.log(
        `You Lose!! ${computerChoise} beats ${inputUser.toLowerCase()}`
      );
      counter.computer++;
    }
  }

  console.log(counter);
};

game();
