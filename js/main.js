const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation-links");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("active");
});

// Sticky navigation ////////////////////////////////////////////////////
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
