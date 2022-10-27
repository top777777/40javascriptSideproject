const clickMe = document.querySelector("button");

function changeColor() {
  const screen = document.querySelector(".screen");
  const color = document.querySelector(".color");
  screen.style.backgroundColor = "red";
  color.innerText = `Background Color : Red`;
}

clickMe.addEventListener("click", changeColor);
