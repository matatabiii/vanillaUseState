import "./styles.css";

const appElement = document.getElementById("app");

let count = 0;

appElement.insertAdjacentHTML(
  "beforeend",
  `
  <div className="App">
    <h1 id="counter">0</h1>
    <button id="count-down">カウント -1</button>
    <button id="count-reset">リセット</button>
    <button id="count-up">カウント +1</button>
  </div>
  `
);

const counter = document.getElementById("counter");
const countUpBtn = document.getElementById("count-up");
const countDownBtn = document.getElementById("count-down");
const countResetBtn = document.getElementById("count-reset");

const setCount = (value) => {
  count = value;
  counter.textContent = count;
};

const countUp = (event) => {
  event.preventDefault();
  setCount(count + 1);
};

const countDown = (event) => {
  event.preventDefault();
  setCount(count - 1);
};

const countReset = (event) => {
  event.preventDefault();
  setCount(0);
};

countUpBtn.addEventListener("click", countUp);
countDownBtn.addEventListener("click", countDown);
countResetBtn.addEventListener("click", countReset);
