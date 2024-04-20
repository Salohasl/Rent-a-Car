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
            img.classList.add('img-auto');
            img.setAttribute('id', keyAuto.id);
            img.src = keyAuto.src;
            carItem.append(img);
            
            let carItemText = document.createElement('div');
            carItemText.classList.add('auto-item__text');
            carItemText.innerHTML = `
                <div class="auto-item__text-desc">
                    <h3>${keyAuto.name}</h3>
                    <p>- Объем: <b>${keyAuto.engine}</b> <br>- Тип топлива: <b>${keyAuto.fuel}</b> <br>- Кузов: <b>${keyAuto.description}</b> <br>- Средний расход: <b>${keyAuto.consumption}</b></p>
                </div>
                <div class="auto-item__text-button">
                    <h2>Цена за сутки: <span>${keyAuto.price}</span></h2>
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


document.addEventListener('DOMContentLoaded', function () {
    var listItems = document.querySelectorAll('.auto-item');
    var loadMoreButton = document.getElementById('loadMore');
    var showLessButton = document.getElementById('showLess');
    var currentItems = 3;
    var totalItems = listItems.length;

    function showItems(itemsToShow) {
        for (var i = 0; i < itemsToShow; i++) {
            listItems[i].style.display = 'flex';
        }
    }

    function hideItems(itemsToHide) {
        for (var i = itemsToHide; i < totalItems; i++) {
            listItems[i].style.display = 'none';
        }
    }

    showItems(currentItems);

    loadMoreButton.addEventListener('click', function () {
        currentItems += 3;
        if (currentItems > totalItems) {
            currentItems = totalItems;
        }
        showItems(currentItems);
        if (currentItems === totalItems) {
            loadMoreButton.style.display = 'none';
        }
        showLessButton.style.display = 'block';
    });

    showLessButton.addEventListener('click', function () {
        currentItems -= 3;
        if (currentItems < 3) {
            currentItems = 3;
        }
        hideItems(currentItems);
        if (currentItems === 3) {
            showLessButton.style.display = 'none';
        }
        loadMoreButton.style.display = 'block';
    });
});