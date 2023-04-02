const img = document.getElementById("avatar");
const cardImg = document.querySelector(".card_img");

cardImg.addEventListener("click", () => {
  cardImg.style.width = "100%";
  cardImg.style.height = "100%";
  cardImg.style.borderRadius = "0";
  cardImg.style.border = "none";
  img.style.transform = "scale(2)";
});

cardImg.addEventListener("mouseleave", () => {
  cardImg.style.width = "120px";
  cardImg.style.height = "120px";
  cardImg.style.borderRadius = "50%";
  cardImg.style.border = "4px solid var(--pink-color)";
  img.style.transform = "scale(1)";
});
