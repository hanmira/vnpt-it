document.querySelector(".menu-icon").addEventListener("click", function () {
  this.querySelector(".fa-solid").classList.toggle("fa-bars");
  this.querySelector(".fa-solid").classList.toggle("fa-xmark");
  document.querySelector(".menu").classList.toggle("open");
});

document.querySelectorAll(".nav-link-disabled").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
  console.log(link);
});
