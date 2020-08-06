const bodyB = document.querySelector("body");
const bColor = ["#C5E99B", "#8FBC94", "#548687"];

function bodyResize() {
  if (window.innerWidth >= 800) {
    bodyB.style.backgroundColor = bColor[2];
  } else if (window.innerWidth < 800 && window.innerWidth >= 400) {
    bodyB.style.backgroundColor = bColor[1];
  } else {
    bodyB.style.backgroundColor = bColor[0];
  }
}

window.addEventListener("resize", bodyResize);
