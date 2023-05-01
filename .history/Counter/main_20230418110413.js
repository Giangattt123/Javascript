const minus = document.querySelector(".counter-decrease");
const plus = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let numberValue = parseInt(counterNumber.textContent);
minus.addEventListener("click", function () {
  if (counterNumber.textContent <= 0) return 0;
  numberValue--;
  counterNumber.textContent = numberValue;
});
plus.addEventListener("click", function () {
  numberValue++;
  counterNumber.textContent = numberValue;
});
