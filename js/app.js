'use strict';

const elemToggleFunc = function (elem) {
	elem.classList.toggle("active");
}

const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

navbarToggleBtn.addEventListener("click", function () {
	elemToggleFunc(navbar);
});


const whishlistBtn = document.querySelectorAll("[data-whishlist-btn]");

for (let i = 0; i < whishlistBtn.length; i++) {
	whishlistBtn[i].addEventListener("click", function () {
		elemToggleFunc(this);

	});
	
}

const upBtn = document.querySelector("[data-up]");

window.addEventListener("scroll", function () {
	if (this.window.scrollY >= 800 ) {
		upBtn.classList.add("active")
	} else {
		upBtn.classList.remove("active");
	}
});









