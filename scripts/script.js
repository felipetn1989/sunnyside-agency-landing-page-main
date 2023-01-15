hamburgerIcon.addEventListener("click", menu);

let navMenu = document.querySelector(".nav__top");

function menu() {
  if (window.getComputedStyle(navMenu).display == "none") {
    navMenu.style.display = "flex";
  } else {
    navMenu.style.display = "none";
  }
}
