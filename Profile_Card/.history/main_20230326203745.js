image = document.getElementsByClassName("image");
image.addEventListener("click", function () {
  if (image.classList.contains("card_img_click")) {
    image.classList.remove("card_img_click");
  } else {
    image.classList.add("card_img_click");
  }
});
