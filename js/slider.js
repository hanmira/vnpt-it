let sliderImages = [
  "slider1",
  "slider2",
  "slider3",
  "slider4",
  "slider5",
  "slider6",
];

let index = 0;
let curIndex = 0;
const sliderImage = document.querySelector(".slider-img");

setInterval(() => {
  sliderImage.src = `./images/${sliderImages[index]}.jpg`;
  let curCir = `.cir-${index}`;
  document.querySelector(curCir).classList.add("active");
  setTimeout(() => {
    document.querySelector(curCir).classList.remove("active");
  }, 3000);
  if (index > 4) {
    index = 0;
  } else {
    index++;
  }
}, 3000);

const circles = document.querySelectorAll(".circle");

circles.forEach((circle, i) => {
  circle.addEventListener("click", function () {
    sliderImage.src = `./images/${sliderImages[i]}.jpg`;

    index = i;
    let curCir = `.cir-${index}`;
    document.querySelector(curCir).classList.add("active");
    if (document.querySelectorAll(".active").length >= 2) {
      document.querySelectorAll(".active")[0].classList.remove("active");
    }
    if (document.querySelectorAll(".active").length >= 3) {
      document.querySelectorAll(".active")[0].classList.remove("active");
      document.querySelectorAll(".active")[1].classList.remove("active");
    }
  });
});
