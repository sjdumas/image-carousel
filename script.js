const slides = document.querySelector(".carousel-slides");
const dots = document.querySelectorAll(".dot");
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");

let currentSlide = 0;
let autoSlideInterval;

const showSlide = (index) => {
	if (index >= slides.children.length) {
		currentSlide = 0;
	} else if (index < 0) {
		currentSlide = slides.children.length - 1;
	} else {
		currentSlide = index;
	}

	const offset = -currentSlide * 100;
	slides.style.transform = `translateX(${offset}%)`;

	// Update dots
	dots.forEach((dot, i) => {
		dot.classList.toggle("active", i === currentSlide);
	});
};

const nextSlide = () => showSlide(currentSlide + 1);

const prevSlide = () => showSlide(currentSlide - 1);

const startAutoSlide = () => {
	autoSlideInterval = setInterval(nextSlide, 5000);
};

const stopAutoSlide = () => clearInterval(autoSlideInterval);

prevArrow.addEventListener("click", () => {
	prevSlide();
	stopAutoSlide();
	startAutoSlide();
});

nextArrow.addEventListener("click", () => {
	nextSlide();
	stopAutoSlide();
	startAutoSlide();
});

dots.forEach((dot, index) => {
	dot.addEventListener("click", () => {
		showSlide(index);
		stopAutoSlide();
		startAutoSlide();
	});
});

startAutoSlide();
