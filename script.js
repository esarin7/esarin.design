//CODE FOR TEXT COLOUR AND DYNAMICS
"use strict";
function _toArray(arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
}
function makeSpans(selector) {
  var _document$querySelect = document.querySelectorAll(selector);
  var _document$querySelect2 = _toArray(_document$querySelect);
  var elements = _document$querySelect2.slice(0);
  return elements.map(function(element) {
    var text = element.innerText.split("");
    var spans = text
      .map(function(letter) {
        return "<span>" + letter + "</span>";
      })
      .join("");
    return (element.innerHTML = spans);
  });
}
// usage with single selector
makeSpans("h2, h3");

//CODE FOR IMAGE SLIDER

var imageArray = [
  "./assets/guanajuato_gto.jpg",
  "./assets/filandia_colombia.jpg",
  "./assets/maputo_mozambique.jpg",
  "./assets/medellin_colombia.jpg",
  "./assets/df_mexico.jpg",
  "./assets/bogota_colombia.jpg"
];

// Buttons

var backButton = document.getElementById("backButton");
var nextButton = document.getElementById("nextButton");

// Buttons --- Events
nextButton.addEventListener("click", changeImage);
backButton.addEventListener("click", changeImageBack);

//Functions

var myImage = document.getElementById("fullimage");
var imageIndex = 0;

setInterval(function() {
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex > 5) {
    imageIndex = 0;
  }
}, 10000);

function changeImage() {
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex > 5) {
    imageIndex = 0;
  }
}

function changeImageBack() {
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = 5;
  }
}
document.onload = changeImage();
