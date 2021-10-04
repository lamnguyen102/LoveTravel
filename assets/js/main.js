// Menu
var closeBtn = document.querySelector('.header-menu__close-icon');
var headerMenu = document.querySelector('.header-menu');
var menuBtn = document.querySelector('.header-menu__btn');
menuBtn.onclick = function () {
    headerMenu.style.transform = "translateX(0)";
    headerMenu.style.opacity = "1";
}

closeBtn.onclick = function () {
    headerMenu.style.transform = "translateX(100%)";
}

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const sliderBtns = $$('.slider-btn');
const sliderImgs = $$('.best-place-slider__img')


sliderBtns.forEach((sliderBtn, index) => {
    const sliderImg = sliderImgs[index];
    sliderBtn.onclick = function() {
        $('.slider-btn.slider-btn--active').classList.remove('slider-btn--active')
        $('.best-place-slider__img.best-place-slider__img--active').classList.remove('best-place-slider__img--active')
        this.classList.add('slider-btn--active')
        sliderImg.classList.add('best-place-slider__img--active')
    }
});