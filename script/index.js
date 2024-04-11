import catalog from './catalog.js';
/*Выбор данных из массива объектов*/

//В переменной хранится каталог
const autoCatalog = catalog;

let numberOfCars = document.querySelector('.numberOfCars');

const car = document.querySelector('.catalog-auto');

function autoUnloading(){
    while (car.firstChild) {
        car.removeChild(car.firstChild);
    }
    
    for(let keyAuto of autoCatalog){

        numberOfCars.textContent = keyAuto.id;

        let carItem = document.createElement('div');
        carItem.classList.add('auto-item');
        car.append(carItem);

        function creatingBlocks(){
            let img = document.createElement('img');
            img.classList.add('img-auto')
            img.src = keyAuto.src;
            carItem.append(img);

            let carItemText = document.createElement('div');
            carItemText.classList.add('auto-item__text');
            carItemText.innerHTML = `
                <h3>${keyAuto.name}</h3>
                <p>- Объем: <b>${keyAuto.engine}</b> <br>- Тип топлива: <b>${keyAuto.fuel}</b> <br>- Кузов: <b>${keyAuto.description}</b> <br>- Средний расход: <b>${keyAuto.consumption}</b></p>
                <h2>Цена за сутки: <span>${keyAuto.price}</span></h2>
                <div class="auto-item__text-button">
                    <button>Забронировать</button>
                    <button>Подробнее</button>
                </div>
            `;
            carItem.append(carItemText);
        }
        creatingBlocks();

        function creatingBlocksHover(){

            let carItemHover = document.createElement('div');
            carItemHover.classList.add('auto-item__hover');
            carItem.append(carItemHover);

            let imgHover = document.createElement('img');
            imgHover.src = keyAuto.srcHover;
            imgHover.classList.add('img-hover');
            carItemHover.append(imgHover);
        }
        creatingBlocksHover();
    }
}   

autoUnloading();