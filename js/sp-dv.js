var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
  var electronic = btn.dataset.electronic; // lấy giá trị trong data-electronic

  tabContent.forEach(function (el) {
    el.classList.remove("active--tab");
  });

  tabLinks.forEach(function (el) {
    el.classList.remove("active--tab");
  });

  document.querySelector("#" + electronic).classList.add("active--tab");

  btn.classList.add("active--tab");
}
