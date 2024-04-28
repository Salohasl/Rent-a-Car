const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();



let touchstartX = 0;
let touchendX = 0;

// тоучь перелистывание
slider.addEventListener('touchstart', function(event) {
 touchstartX = event.changedTouches[0].screenX;
}, false);

slider.addEventListener('touchend', function(event) {
 touchendX = event.changedTouches[0].screenX;
 handleSwipe();
}, false);


function handleSwipe() {
 if (touchendX < touchstartX) {
    showNextSlide();
 } else if (touchendX > touchstartX) {
    showPreviousSlide();
 }
}