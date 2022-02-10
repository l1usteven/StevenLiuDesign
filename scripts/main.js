// Menu Overlay Button
function openNav() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("main").style.display = "none";
  document.body.style.backgroundColor = "#1E2124";
}

function closeNav() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.body.style.backgroundColor = "#ffffff";
}
