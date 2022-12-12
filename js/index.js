//Grey out background when boxes are hovered. 
const itemBoxes = document.getElementsByClassName("itemBox");
const mainPage = document.getElementById("main");

//function to grey out background when entering / leaving item boxes.
for (let i=0; i<itemBoxes.length; i++) {
  itemBoxes[i].addEventListener("mouseover", function() {
    mainPage.style.backgroundColor = "#c7cbc5";
    })};
for (let i=0; i<itemBoxes.length; i++) {
  itemBoxes[i].addEventListener("mouseleave", function() {
    mainPage.style.backgroundColor = "#f1faee";
    })};


