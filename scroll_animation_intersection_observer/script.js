const observer = new IntersectionObserver((elements) => {
	elements.forEach((el) => {
		el.target.classList.toggle('show', el.isIntersecting);
	})
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));
