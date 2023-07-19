document.querySelector(".menu-icon").addEventListener("click", function () {
  this.querySelector(".fa-solid").classList.toggle("fa-bars");
  this.querySelector(".fa-solid").classList.toggle("fa-xmark");
  document.querySelector(".menu").classList.toggle("open");
});

//loop qua cac link cua header
//check if cai link nao tren html click thi get id trong cai link
//loop qua cac link trong tab gt.html
//if get id clicked === id tab thi active tab
//??????
//tao 1 bien
//get id cua clicked header gan cho 1 biến neu khac null
//loop qua tab link trong gt.html
//tab link id === clicked header id thi active tab?????????????????
