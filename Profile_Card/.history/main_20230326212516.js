const image = document.querySelector("img");
const card = document.getElementsByClassName("card_img");
image.addEventListener("click", function () {
    card.classList.add("full-screen");
  }
});
