"use strict";

const menu = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");
const darkThemeBtn = document.getElementById("dark");

darkThemeBtn.onclick = function () {
  document.body.classList.toggle("dark-theme");
};

menu.addEventListener("click", function () {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

let slides = document.querySelectorAll(".slide-container");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

document.querySelectorAll(".featured-image-1").forEach((image_1) => {
  image_1.addEventListener("click", () => {
    const src = image_1.getAttribute("src");
    document.querySelector(".big-image-1").src = src;
  });
});

document.querySelectorAll(".featured-image-2").forEach((image_2) => {
  image_2.addEventListener("click", () => {
    const src = image_2.getAttribute("src");
    document.querySelector(".big-image-2").src = src;
  });
});

document.querySelectorAll(".featured-image-3").forEach((image_3) => {
  image_3.addEventListener("click", () => {
    const src = image_3.getAttribute("src");
    document.querySelector(".big-image-3").src = src;
  });
});
