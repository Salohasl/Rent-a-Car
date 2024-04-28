import catalog from './catalog.js';
/*Выбор данных из массива объектов*/

//В переменной хранится каталог
const autoCatalog = catalog;
const slider = document.querySelector('.slider');
const titleSite = document.querySelector('title');


function autoUnloading(){
    const localId = JSON.parse(localStorage.getItem('car'))  || [];
   /* while (car.firstChild) {
        car.removeChild(car.firstChild);
    }*/

    for (let keyAuto of autoCatalog) {
     
        if(localId.id == keyAuto.id){
          titleSite.textContent = keyAuto.name
            slider.innerHTML = `
              <img src="${keyAuto.src}" alt="photo">
              <img src="${keyAuto.srcHover}" alt="photo">
            `;
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
