window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  const items = document.querySelectorAll(".dropdown-item");
  input.addEventListener("keypress", handleHightLight);
  let filter = "";
  function handleHightLight(event) {
    console.log(event.key);
    filter += event.key;
    filter = filter.toLowerCase();
    [...items].forEach((item) => {
      const text = item.textContent.toLowerCase();
      const index = text.indexOf(filter);
      console.log(index);
    });
  }
});
