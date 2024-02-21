"use strict";

document.querySelector(".cv-button").addEventListener("click", function () {
  document.querySelector(".cv-ca-nhan").classList.remove("hide");
});

document.querySelector(".cv-thu-cung").addEventListener("click", function () {
  document.querySelector(".thu-cung").classList.remove("hide");
});

document.querySelector(".cv-tin-tuc").addEventListener("click", function () {
  document.querySelector(".tin-tuc").classList.remove("hide");
});
