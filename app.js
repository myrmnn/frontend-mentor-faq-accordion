const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');

question.forEach((el) =>
	el.addEventListener('click', () => {
		el.classList.toggle('bold');
		el.nextElementSibling.classList.toggle('open');
	})
);
