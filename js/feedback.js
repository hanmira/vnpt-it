const feedbackList = document.querySelectorAll(".feedback-item");
let cur = 0;

function next() {
  if (cur === feedbackList.length - 1) {
    cur = 0;
  } else {
    cur++;
  }
}

function prev() {
  if (cur === 0) {
    cur = feedbackList.length - 1;
  } else {
    cur--;
  }
}

document.querySelector(".feedback").addEventListener("scroll", (e) => {});

feedbackList.forEach((_, i) => {
  let newCircle = document.createElement("div");
  newCircle.classList.add("circle");
  newCircle.classList.add("fb-circle");
  document.querySelector(".feedback-circle").appendChild(newCircle);
});

const feedbackCircles = document.querySelectorAll(".fb-circle");
feedbackCircles.forEach((circle, index) => {
  circle.addEventListener("click", function () {
    // document.querySelector(
    //   `.fb-${index}`
    // ).style.transform = `translateX(-${curr * 100}%)` ;
    console.log(document.querySelector(`.fb-${index}`));
    console.log(`translateX(-${cur * 110}%)`);
  });
});

/////////////
const sliderFb = document.querySelector(".feedback");
const item = document.querySelector(".feedback-item");

let isPressed = false;

let cursorX;

sliderFb.addEventListener("mousedown", (e) => {
  isPressed = true;
  cursorX = e.offsetX - item.offsetLeft;
  sliderFb.style.cursor = "grabbing";
});

sliderFb.addEventListener("mouseup", () => {
  sliderFb.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressed = false;
});

sliderFb.addEventListener("mousemove", (e) => {
  if (!isPressed) return;
  e.preventDefault();
  item.style.transform = `translateX(-110%)`;
});
