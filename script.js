var color1 = document.getElementById("color1")
var color2 = document.getElementById("color2")
var bg = document.getElementById("bg")
let text = document.getElementById("text")

function updateBackground() {
    bg.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    text.textContent = bg.style.background+";";
  }
  
  color1.addEventListener('input', updateBackground);
  color2.addEventListener('input', updateBackground);
  