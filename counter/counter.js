const result = document.querySelector(".result");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
let resultValue = 0;

function resetBtn() {
  result.innerHTML = 0;
}

function decreaseBtn() {
  resultValue = resultValue - 1;
  if (resultValue < 0) {
    result.innerHTML = `<font color = red>${resultValue}</font>`;
  } else {
    result.innerHTML = resultValue;
  }
}

function increaseBtn() {
  resultValue = resultValue + 1;
  if (resultValue > 0) {
    result.innerHTML = `<font color = blue>${resultValue}</font>`;
  } else {
    result.innerHTML = resultValue;
  }
}

reset.addEventListener("click", resetBtn);
decrease.addEventListener("click", decreaseBtn);
increase.addEventListener("click", increaseBtn);
