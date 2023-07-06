const burgerButton = document.querySelector('.button-burger');
const header = document.querySelector('.header');
burgerButton.addEventListener('click', function () {
	header.classList.toggle('open')
})