"use strict";
const prod = document.querySelector(".prod");
const comp = document.querySelector(".comp");
const cont = document.querySelector(".cont");
const ham = document.querySelector(".ham");
const mobileMenu = document.querySelector(".mobilemenu");
const closem = document.querySelector(".close");
const productMobile = document.querySelector(".productm");
const companyMobile = document.querySelector(".companym");
const connectMobile = document.querySelector(".connectm");

function navBar(nav) {
  if (document.querySelector(`.${nav}`).classList.contains("hidden"))
    document.querySelector(`.${nav}`).classList.remove("hidden");
  else {
    document.querySelector(`.${nav}`).classList.add("hidden");
  }
}

function navLinks(navx, navy) {
  document.querySelector(`.${navx}`).classList.add("hidden");
  document.querySelector(`.${navy}`).classList.add("hidden");
}

prod.addEventListener("click", function () {
  navLinks("company", "connect");
  navBar("product");
});

comp.addEventListener("click", function () {
  navLinks("product", "connect");
  navBar("company");
});

cont.addEventListener("click", function (e) {
  navLinks("company", "product");
  navBar("connect");
});


productMobile.addEventListener("click",function(){
    navBar("prodm")
    navLinks("compm", "contm");
})
companyMobile.addEventListener("click",function(){
    navBar("compm")
    navLinks("prodm", "contm");
})
connectMobile.addEventListener("click",function(){
    navBar("contm")
    navLinks("compm", "prodm");
})