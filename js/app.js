'use strict';

const elemToggleFunc = function (elem) {
	elem.classList.toggle("active");
}

const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

navbarToggleBtn.addEventListener("click", function () {
	elemToggleFunc(navbar);
});


