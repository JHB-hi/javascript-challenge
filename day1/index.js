"use strict";

const title = document.querySelector(".title");
const bg = document.getElementsByTagName("body");

// title.innerHTML = "The mouse is here!";
// title.style.color = "red";
// title.innerHTML = "The mouse is gone!";
// title.style.color = "blue";
// title.innerHTML = "You just resized!";
// title.style.color = "orange";
// title.innerHTML = "That was a right click!";
// title.style.color = "green";

function superTitleMouseover() {
  title.innerHTML = "The mouse is here!";
  title.style.color = "red";
}

function superTitleMouseleave() {
  title.innerHTML = "The mouse is gone!";
  title.style.color = "blue";
}

function superTitleRisize() {
  title.innerHTML = "You just resized!";
  title.style.color = "orange";
}

function superTitleAuxclick() {
  title.innerHTML = "That was a right click!";
  title.style.color = "green";
}

title.addEventListener("mouseover", superTitleMouseover);
title.addEventListener("mouseleave", superTitleMouseleave);
window.addEventListener("auxclick", superTitleAuxclick);
window.addEventListener("resize", superTitleRisize);
