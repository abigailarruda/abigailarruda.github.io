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
  const playerOne = options[playerOnePosition];

  let newOptions = [];
  newOptions.push(...options);
  newOptions.splice(playerOnePosition, 1);

  const playerTwoPosition = randomItem(newOptions);
  const playerTwo = newOptions[playerTwoPosition];

  document
    .getElementById("player-one-card-image")
    .classList.add(playerOne.className);
  document.getElementById("player-one-image").src = playerOne.icon;
  document.getElementById("button-start").classList.add(playerOne.className);

  document
    .getElementById("player-two-card-image")
    .classList.add(playerTwo.className);
  document.getElementById("player-two-image").src = playerTwo.icon;
  document.getElementById("button-restart").classList.add(playerTwo.className);
}

setPlayerIcon();

const alertConfig = {
  showCloseButton: false,
  allowOutsideClick: true,
  backdrop: true,
  confirmButtonText: "Salvar",
  input: "text",
  inputPlaceholder: "Nome",
  text: "Qual é o seu nome?",
};

const startButton = document.getElementById("button-start");
startButton.addEventListener("click", function () {
  Swal.fire({
    title: "Ei, Jogador 01!",
    ...alertConfig,
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("player-one-name").textContent = result.value;

      Swal.close();

      Swal.fire({
        title: "Ei, Jogador 02!",
        ...alertConfig,
      }).then((result) => {
        if (result.isConfirmed) {
          document.getElementById("player-two-name").textContent = result.value;
          Swal.close();
        }
      });
    }
  });
});
