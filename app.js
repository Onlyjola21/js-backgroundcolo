const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");
const container = document.querySelector(".container");
const text = document.querySelector(".text");

function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }

  if ((document.body.style.background = "white")) {
    document.body.style.background = "linear-gradient( purple, midnightblue)";
    document.body.style.color = "white";
  }
}

function containerBorder() {
  container.style.border = "2px solid white";
  text.style.border = "2px solid white";
}

revealBtn.addEventListener("click", revealContent);
container.addEventListener("click", containerBorder);
