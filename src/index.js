import "./styles.css";

const rootElement = document.getElementById("root");

let count = 0;

rootElement.insertAdjacentHTML(
  "beforeend",
  `
  <div class="App">
    <h1 id="counter">0</h1>
    <button id="count-down">カウント -1</button>
    <button id="count-reset">リセット</button>
    <button id="count-up">カウント +1</button>
    <div id="text"></div>
  </div>
  `
);

const counter = document.getElementById("counter");
const countUpBtn = document.getElementById("count-up");
const countDownBtn = document.getElementById("count-down");
const countResetBtn = document.getElementById("count-reset");
const text = document.getElementById("text");

const changeText = () => {
  const value = count === 10 ? "10だよ" : "10以外だよ";
  text.textContent = value;
  if (count === 10) {
    text.style.color = "red";
  } else if (text.style.color === "red") {
    text.style.color = "";
  }
};

changeText();

const setCount = (value) => {
  count = value;
  counter.textContent = count;
  changeText();
};

const countUp = (event) => {
  event.preventDefault();
  setCount(count + 1);
  changeText();
};

const countDown = (event) => {
  event.preventDefault();
  setCount(count - 1);
  changeText();
};

const countReset = (event) => {
  event.preventDefault();
  setCount(0);
};

countUpBtn.addEventListener("click", countUp);
countDownBtn.addEventListener("click", countDown);
countResetBtn.addEventListener("click", countReset);
