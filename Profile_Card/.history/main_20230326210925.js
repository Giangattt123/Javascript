const cardImg = document.querySelector(".card_img");
const card = document.querySelector(".card");

const img = cardImg.querySelector("img");

img.addEventListener("click", function () {
  cardImg.classList.toggle("full-screen");
  card.classList.toggle("full-screen");
});
