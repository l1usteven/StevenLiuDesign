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

// Function to handle the typing effect
function typeWriter(elementId, textArr) {
  var count = 0;
  var i = 0;
  // speed for typing effect
  var typingSpeed = 100;
  // speed for interval between text strings
  var intervalSpeed = 2000;

  function type() {
    if (count < textArr.length) {
      if (i < textArr[count].length) {
        document.getElementById(elementId).innerHTML += textArr[count][i];
        i++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(function () {
          i = 0;
          count++;
          document.getElementById(elementId).innerHTML = "";
          setTimeout(type, typingSpeed);
        }, intervalSpeed);
      }
    } else {
      count = 0;
      i = 0;
      document.getElementById(elementId).innerHTML = "";
      setTimeout(type, intervalSpeed);
    }
  }
  setTimeout(type, intervalSpeed);
}

// Text Array
var textArr1 = ["Product Designer", "Product Manager", "UX Designer"];
typeWriter("textMe", textArr1);
