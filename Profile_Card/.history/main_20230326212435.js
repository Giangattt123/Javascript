const image = document.querySelector("img");
const card = document.getElementsByClassName("card_img");
card.addEventListener("click", function () {
  if (card.classList.contains("full-screen")) {
    card.classList.remove("full-screen");
  } else {
    card.classList.add("full-screen");
  }
});
