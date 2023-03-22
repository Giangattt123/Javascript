const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handelToggleMenu);
function handelToggleMenu(event) {
  event.target.classList.toggle("fa-times");
  event.target.classList.toggle("fa-bars");
  menu.classList.toggle("menu-is_show");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
  if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
    menu.classList.remove("menu-is_show");
    toggle.classList.remove("fa-times");
    toggle.classList.add("fa-bars");
  }
}
const tabItems = document.querySelectorAll(".tab-item");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  console.log(event.target);
  [...tabItems].forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
  const tabNumBer = event.target.dataset.tab;
}
