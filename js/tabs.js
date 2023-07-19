document.querySelectorAll(".tab-item").forEach((item) => {
  item.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();

    // document.querySelectorAll(".tab-item").forEach((i) => {
    //   if (i.querySelector(".tab-dropdown") !== null) {
    //     if (
    //       getComputedStyle(i.querySelector(".tab-dropdown")).display === "block"
    //     ) {
    //       i.querySelector(".tab-dropdown").style.display = "none";
    //       i.querySelector(".fa-solid").classList.toggle("fa-chevron-right");
    //       i.querySelector(".fa-solid").classList.toggle("fa-chevron-down");
    //       //   console.log(1);
    //     }
    //   }
    // });

    if (item.querySelector(".tab-dropdown").style.display === "block") {
      item.querySelector(".tab-dropdown").style.display = "none";
      item.querySelector(".fa-solid").classList.toggle("fa-chevron-right");
      item.querySelector(".fa-solid").classList.toggle("fa-chevron-down");
    } else {
      item.querySelector(".tab-dropdown").style.display = "block";
      item.querySelector(".fa-solid").classList.toggle("fa-chevron-right");
      item.querySelector(".fa-solid").classList.toggle("fa-chevron-down");
    }
  });
});

const tabLinks = document.querySelectorAll(".tab-link");
const tabContent = document.querySelectorAll(".tab-content");

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  let btn = el.currentTarget;
  let id = btn.dataset.id;

  //loop qua menu header
  //check xem cai nao co data-tab === data-section cua btn thi active
  document.querySelectorAll(".nav-link").forEach((nav) => {
    if (nav.dataset.tab === btn.closest(".tab-panel").dataset.section) {
      nav.classList.add("active-tab");
    } else {
      nav.classList.remove("active-tab");
    }
  });

  tabContent.forEach(function (el) {
    el.classList.remove("show");
  });

  tabLinks.forEach(function (el) {
    el.classList.remove("active-item");
    el.closest(".tab-item").classList.remove("active-item");
  });

  document.querySelector("#" + id).classList.add("show");

  if (hasClass(btn, "tab-item-nested")) {
    btn.classList.add("active-item");
  } else {
    btn.closest(".tab-item").classList.add("active-item");
  }
}

function hasClass(element, className) {
  return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
}
