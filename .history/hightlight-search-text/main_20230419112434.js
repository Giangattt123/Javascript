window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  input.addEventListener("keypress", handleHightLight);
  let filter = "";
  function handleHightLight(event) {
    console.log(event.key);
  }
});
