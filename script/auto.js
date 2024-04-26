import catalog from './catalog.js';
/*Выбор данных из массива объектов*/

//В переменной хранится каталог
const autoCatalog = catalog;
const swiperWrapper = document.querySelector('.swiper-wrapper');



const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});



function autoUnloading(){
    const localId = JSON.parse(localStorage.getItem('car'))  || [];
   /* while (car.firstChild) {
        car.removeChild(car.firstChild);
    }*/

    for (let keyAuto of autoCatalog) {
     
        if(localId.id == keyAuto.id){
            swiperWrapper.innerHTML = `
                <div class="swiper-slide"><img src="${keyAuto.src}"></div>
                <div class="swiper-slide">slide2</div>
            `

        }
        

        /*if (slideIndex < swiperSlides.length) { // Проверяем, не превышен ли лимит слайдов
            const img = document.createElement('img');
            // Добавляем изображение в текущий слайд
            // Используем разные свойства изображений для разных слайдов
            if (slideIndex === 1) {
                img.src = keyAuto.srcHover; // Для второго слайда
            } else {
                img.src = keyAuto.src; // Для остальных слайдов
            }
            swiperSlides[slideIndex].append(img);
            slideIndex++; // Увеличиваем индекс слайда
        } else {
            break; // Прерываем цикл, если все слайды заполнены
        }*/
    }
}
autoUnloading();
