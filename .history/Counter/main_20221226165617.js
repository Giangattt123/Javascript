const minus = document.querySelector(".counter-decrease");
const plus = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let numberValue = parseInt(counterNumber.textContent);
minus.addEventListener("click", function () {
  if (counterNumber.textContent <= 0) return 0;
  numberValue--;
  k;
  counterNumber.textContent = numberValue;
});
plus.addEventListener("click", function () {
  numberValue++;
  counterNumber.textContent = numberValue;
});
const button = document.querySelector(".change");
button.addEventListener("click", handleChangeColor);
const colors = ["#ffa400", "#00aefd", "#07a787", "#ffb86c", "#2979ff"];
function handleChangeColor() {
  //   document.body.setAttribute("style", "background-color:red");
  //   document.body.style.backgroundColor = "red";
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
}
