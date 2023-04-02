const image = document.querySelector("img");
image.addEventListener("click", function () {
  if (image.classList.contains("full-screen")) {
    image.classList.remove("full-screen");
  } else {
    image.classList.add("full-screen");
  }
});
