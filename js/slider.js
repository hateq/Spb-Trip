const slider = document.querySelector('.slider');
const SliderImages = document.querySelectorAll('.slider-img');
const sliderLine = document.querySelector('.slider-line');
const sliderBtnPrev = document.querySelector('.slider-btn-prev');
const sliderBtnNext = document.querySelector('.slider-btn-next');
let sliderCount = 0;
let sliderWidth	= slider.offsetWidth;
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);
function nextSlide(){
	sliderCount++;
	if(sliderCount >= SliderImages.length){
		sliderCount = 0;
	}
	rollSlider();
}
function prevSlide(){
	sliderCount--;
	if(sliderCount < 0) {
		sliderCount = SliderImages.length - 1;
	}
	rollSlider();
}
function rollSlider(){
	sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px`
}
setInterval(function(){
	nextSlide();
}, 5000);	