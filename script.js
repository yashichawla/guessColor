var grids = document.querySelectorAll(".grid");
var hex = document.querySelector(".color-code");
var colors;
var pickedColor;
setScreen();
init();
function get() {
  alert("grid x was clicked");
}
function setScreen() {
  colors = getRandomColor();
  pickedColor = pickColor();
  document.querySelector(".color-code").textContent = pickedColor;
  for (var i = 0; i < 3; i++) {
    //add initial colors to squares
    grids[i].style.backgroundColor = colors[i];
  }
}
function init() {
  document.querySelector(".color-code").textContent = pickedColor;
  for (var i = 0; i < 3; i++) {
    //add click listeners to squares
    grids[i].addEventListener("click", function () {
      if (this.style.backgroundColor === pickedColor) {
        correct();
      } else {
        wrong();
      }
    });
  }
}
function reset() {
  document.body.style.backgroundColor = pickedColor;
  for (var i = 0; i < colors.length; i++) {
    grids[i].style.backgroundColor = pickedColor;
  }
  setScreen();
}
function correct() {
  $(".color-code").text("COLOR MASTER");
  var score = Number($(".score").text());
  var newScore = score + 5;
  $(".score").text(newScore);
  setTimeout(reset, 300);
}
function wrong() {
  $(".color-code").text("you got it wrong :(");
  var score = Number($(".score").text());
  var newScore = score - 5;
  $(".score").text(newScore);
  setTimeout(reset, 300);
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function getRandomColor() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(randomColor());
  }
  return arr;
}
function randomColor() {
  //pick red 0 to 255
  var red = Math.floor(Math.random() * 256);
  //pick green 0 to 255
  var green = Math.floor(Math.random() * 256);
  //pick blue 0 to 255
  var blue = Math.floor(Math.random() * 256);
  //return one string of color
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
