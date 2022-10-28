const clickMe = document.querySelector("button");
const color = document.querySelector(".color");
const screen = document.querySelector(".screen");
const colors = ["red", "blue", "green"];
const result = colors[Math.floor(Math.random() * colors.length)];
console.log(result);

function changeColor() {
  screen.style.backgroundColor = result;
  color.innerText = `Background Color : ${result}`;
}

clickMe.addEventListener("click", changeColor);
