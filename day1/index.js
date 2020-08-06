"use strict";

const color = ["red", "blue", "orange", "green"];
const title = document.querySelector(".title");

const superTitle = {
  mouseover: function () {
    title.innerHTML = "The mouse is here!";
    title.style.color = color[0];
  },

  mouseLeave: function () {
    title.innerHTML = "The mouse is gone!";
    title.style.color = color[1];
  },

  resize: function () {
    title.innerHTML = "You just resized!";
    title.style.color = color[2];
  },

  auxclick: function () {
    title.innerHTML = "That was a right click!";
    title.style.color = color[3];
  },
};

// function superTitleMouseover() {
//   title.innerHTML = "The mouse is here!";
//   title.style.color = color[0];
// }

// function superTitleMouseleave() {
//   title.innerHTML = "The mouse is gone!";
//   title.style.color = color[1];
// }

// function superTitleRisize() {
//   title.innerHTML = "You just resized!";
//   title.style.color = color[2];
// }

// function superTitleAuxclick() {
//   title.innerHTML = "That was a right click!";
//   title.style.color = color[3];
// }

function init() {
  title.addEventListener("mouseover", superTitle.mouseover);
  title.addEventListener("mouseleave", superTitle.mouseLeave);
  window.addEventListener("resize", superTitle.resize);
  window.addEventListener("auxclick", superTitle.auxclick);
}

init();
