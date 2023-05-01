const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  [...tabItems].forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
  const tabNumber = parseInt(event.target.dataset.tab);
  [...tabContents].forEach((item) => {
    item.classList.remove("active");
    console.log(tabNumber);
    console.log(item.getAttribute("data-tab"));
    // [...tabContents][tabNumber - 1].classList.add("active");
    if (parseInt(item.getAttribute("data-tab")) === tabNumber)
      item.classList.add("active");
  });
}
