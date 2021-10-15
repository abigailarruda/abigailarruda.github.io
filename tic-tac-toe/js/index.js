const startButton = document.getElementById("button-start");
const restartButton = document.getElementById("button-restart");

restartButton.disabled = true;

const cells = document.querySelectorAll(".cell");

let totalMovements = 0;
let turn = true;

const combinations = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],
];

const playerOne =
  '<i data-feather="x" width="7rem" height="7rem" color="#8492a6" stroke-width="1.5"></i>';
const playerTwo =
  '<i data-feather="circle" width="5rem" height="5rem" color="#8492a6"></i>';

let playerOneName = "Jogador 01";
let playerTwoName = "Jogador 02";

let playerOneMovements = [];
let playerTwoMovements = [];

let playerOneScore = 0;
let playerTwoScore = 0;

document.getElementById("player-one-score").textContent = playerOneScore;
document.getElementById("player-two-score").textContent = playerTwoScore;

const options = [
  {
    icon: "https://i.ibb.co/n3MF5C1/alien.png",
    className: "purple",
    color: "#7e5bef",
  },
  {
    icon: "https://i.ibb.co/ZHvgfjs/bomb.png",
    className: "orange",
    color: "#ff7849",
  },
  {
    icon: "https://i.ibb.co/QvGF2Xz/cherries.png",
    className: "green",
    color: "#13ce66",
  },
  {
    icon: "https://i.ibb.co/Z1py7r9/cowboy.png",
    className: "yellow",
    color: "#ffc82c",
  },
  {
    icon: "https://i.ibb.co/pZS77wV/diamond.png",
    className: "blue",
    color: "#1fb6ff",
  },
  {
    icon: "https://i.ibb.co/F65BwjN/unicorn.png",
    className: "pink",
    color: "#ff49db",
  },
];

function randomItem(array) {
  const item = Math.floor(Math.random() * array.length);
  return item;
}

function setPlayerIcon() {
  const playerOnePosition = randomItem(options);
  const playerOneOptions = options[playerOnePosition];

  let newOptions = [];
  newOptions.push(...options);
  newOptions.splice(playerOnePosition, 1);

  const playerTwoPosition = randomItem(newOptions);
  const playerTwoOptions = newOptions[playerTwoPosition];

  document
    .getElementById("player-one-card-image")
    .classList.add(playerOneOptions.className);
  document.getElementById("player-one-image").src = playerOneOptions.icon;
  document
    .getElementById("button-start")
    .classList.add(playerOneOptions.className);

  document
    .getElementById("player-two-card-image")
    .classList.add(playerTwoOptions.className);
  document.getElementById("player-two-image").src = playerTwoOptions.icon;
  document
    .getElementById("button-restart")
    .classList.add(playerTwoOptions.className);
}

setPlayerIcon();

function verifyWinner(playerTurn) {
  let flag = false;
  let array = [];

  if (playerTurn) {
    array.push(...playerOneMovements);
  } else {
    array.push(...playerTwoMovements);
  }

  for (let i = 0; i < combinations.length; i++) {
    flag = combinations[i].every((value) => array.includes(value));

    if (flag) {
      break;
    }
  }

  return flag;
}

function stop() {
  while (playerOneMovements.length > 0) {
    playerOneMovements.pop();
  }

  while (playerTwoMovements.length > 0) {
    playerTwoMovements.pop();
  }

  totalMovements = 0;
  turn = true;

  for (c of cells) {
    if (c.hasChildNodes()) {
      c.removeChild(c.firstChild);
    }
  }
}

const normalAlertConfig = {
  showCloseButton: false,
  allowOutsideClick: false,
  backdrop: true,
};

const inputAlertConfig = {
  confirmButtonText: "Salvar",
  input: "text",
  inputPlaceholder: "Nome",
  text: "Qual é o seu nome?",
  inputAttributes: {
    required: true,
  },
};

function play(id) {
  const cell = document.getElementById(id);
  let playerTurn = turn ? playerOne : playerTwo;

  if (turn) {
    playerOneMovements.push(id);
  } else {
    playerTwoMovements.push(id);
  }

  cell.innerHTML = playerTurn;

  totalMovements += 1;

  if (totalMovements >= 5) {
    let winner = verifyWinner(turn);

    if (winner) {
      let winnerName = turn ? playerOneName : playerTwoName;

      Swal.fire({
        title: `Parabéns, ${winnerName}!`,
        text: "Você ganhou!",
        confirmButtonText: "Fechar",
        ...normalAlertConfig,
      }).then((result) => {
        if (turn) {
          playerOneScore += 1;

          document.getElementById("player-one-score").textContent =
            playerOneScore;
        } else {
          playerTwoScore += 1;

          document.getElementById("player-two-score").textContent =
            playerTwoScore;
        }

        stop();

        Swal.close();
      });
    } else if (!winner && totalMovements === 9) {
      Swal.fire({
        title: "Empate!",
        text: "Jogue novamente!",
        confirmButtonText: "Fechar",
        ...normalAlertConfig,
      }).then((result) => {
        stop();

        Swal.close();
      });
    } else {
      turn = !turn;
    }
  } else {
    turn = !turn;
  }

  feather.replace();
}

restartButton.addEventListener("click", () => {
  stop();

  playerOneScore = 0;
  playerTwoScore = 0;

  document.getElementById("player-one-score").textContent = 0;
  document.getElementById("player-two-score").textContent = 0;

  startButton.disabled = false;
  restartButton.disabled = true;
});

startButton.addEventListener("click", () => {
  startButton.disabled = true;
  restartButton.disabled = false;

  Swal.fire({
    title: "Ei, Jogador 01!",
    ...inputAlertConfig,
    ...normalAlertConfig,
  }).then((result) => {
    if (result.isConfirmed) {
      playerOneName = result.value;
      document.getElementById("player-one-name").textContent = result.value;

      Swal.close();

      Swal.fire({
        title: "Ei, Jogador 02!",
        ...inputAlertConfig,
        ...normalAlertConfig,
      }).then((result) => {
        if (result.isConfirmed) {
          playerTwoName = result.value;
          document.getElementById("player-two-name").textContent = result.value;
          Swal.close();
        }
      });
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target.matches(".cell")) {
      play(event.target.id);
    }
  });
});
