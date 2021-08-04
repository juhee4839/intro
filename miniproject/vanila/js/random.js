const randomRange = document.getElementById("random-range");
const inputRange = randomRange.querySelector("#input_range");
const inputMychose = randomRange.querySelector("#my_chose");
const handlebtn = randomRange.querySelector("#handleChoseBtn");
const result = document.getElementById("result");
const paintingMychose = result.querySelector(".painting_mychose");
const paintingMachine = result.querySelector(".painting_machine");
const win = result.querySelector(".win");

const HIDDEN_KEY = "hidden";

function handlerMychose(event) {
  event.preventDefault();
  const userChose = inputMychose.value;
  paintingMychose.innerText = userChose;
}

function handleBtn(userRange) {
  const range = inputRange.value;
  const userRangeNumber = Math.floor(Math.random() * range);
  const userChose = parseInt(inputMychose.value);
  console.log(userRangeNumber, userChose);
  paintingMachine.innerText = userRangeNumber;
  result.classList.remove(HIDDEN_KEY);

  if (userChose === userRangeNumber) {
    win.innerText = "WIN";
    handlebtn.removeEventListener("click", handleBtn);
  }
}

function handleKey(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
}

inputRange.addEventListener("keydown", handleKey);
randomRange.addEventListener("submit", handlerMychose);
handlebtn.addEventListener("click", handleBtn);
