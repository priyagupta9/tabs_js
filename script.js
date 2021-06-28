"use strict";

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btns;
    btn.classList.add("active");
  });
});
