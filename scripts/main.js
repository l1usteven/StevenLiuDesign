// Top Navigation
const mobileNavToggle = document.getElementsByClassName("mobile-nav")[0];
const navLinks = document.getElementsByClassName("link-nav")[0];

mobileNavToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
