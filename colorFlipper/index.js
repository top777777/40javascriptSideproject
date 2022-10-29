const clickMe = document.querySelector("button");
const color = document.querySelector(".color");
const screen = document.querySelector(".screen");
const colors = ["red", "blue", "green"];

clickMe.addEventListener("click", function () {
  const result = colors[Math.floor(Math.random() * colors.length)];

  screen.style.backgroundColor = result;
  console.log(result);

  color.innerText = `Background Color : ${result}`;
});
