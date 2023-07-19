let scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
}

scrollBtn.addEventListener("click", topFunction);
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  // document.documentElement.scrollTo({ top: 0, behavior: smooth });
}
