import catalog from './catalog.js';

// В переменной хранится каталог
const autoCatalog = catalog;
const slider = document.querySelector('.slider');
const titleSite = document.querySelector('title');
const wrapperLeft = document.querySelector('.wrapper-left');
const equipment = document.querySelector('.equipment');
function autoUnloading(){
    const localId = JSON.parse(localStorage.getItem('car')) || [];

    for (let keyAuto of autoCatalog) {
        if(localId.id == keyAuto.id){
            titleSite.textContent = keyAuto.name;
            // Проверяем, что src атрибуты не равны undefined или пустым
            const srcs = [
                keyAuto.src,
                keyAuto.srcHover,
                keyAuto.img1,
                keyAuto.img2,
                keyAuto.img3,
                keyAuto.img4,
                keyAuto.img5,
                keyAuto.img6
            ].filter(src => src !== undefined && src !== '');
            // Формируем HTML только для существующих src
            const sliderImages = srcs.map(src => `<img class="slider-img" src="${src}" alt="photo">`).join('');
            slider.innerHTML = sliderImages;

            wrapperLeft.innerHTML = `
                <h1 class="form-car" data-id="${keyAuto.id}">${keyAuto.name}</h1>
                <select name="select">
                    <option value="Посмотреть прайс">Посмотреть прайс</option>
                    <option value="${keyAuto.price1}">${keyAuto.price1}</option>
                    <option value="${keyAuto.price2}">${keyAuto.price2}</option>
                    <option value="${keyAuto.price3}">${keyAuto.price3}</option>
                    <option value="${keyAuto.price4}">${keyAuto.price4}</option>
                </select>
                <a href="/feedback/index.html"><button class="show-form" data-id="${keyAuto.id}">Забронировать</button></a>
                <h2>${keyAuto.engine}</h2>
                <p>${keyAuto.text}</p>
                <p>- Объем: <b>${keyAuto.engine}</b> <br>- Тип топлива: <b>${keyAuto.fuel}</b> <br>- Кузов: <b>${keyAuto.description}</b> <br>- Средний расход: <b>${keyAuto.consumption}</b></p>
            `;


            let equipmentText = keyAuto.comp;
            const arrayEquipment = equipmentText.split(',')
            
            arrayEquipment.forEach(item => {
                let equipmentItem = document.createElement('div');
                equipmentItem.classList.add('equipment-item');
            
                // Создание тега img
                let img = document.createElement('img');
                img.src = '/icon/like.png';
                equipmentItem.appendChild(img);
            
                // Создание тега p
                let p = document.createElement('p');
                p.textContent = item; // Установка текста из массива
                equipmentItem.appendChild(p);
            
                equipment.append(equipmentItem);
            });
        }
    }
}


// Вызываем функцию autoUnloading для добавления изображений в DOM
autoUnloading();


function locarStorage() {
    const showForm = document.querySelector('.show-form');
    const selects = document.querySelectorAll('select');
    const formCarText = document.querySelector('.form-car');
    let resultSelect;
    selects.forEach(elem => {
        elem.addEventListener('change', ()=>{
            resultSelect = elem.value;
        })
    })

        showForm.addEventListener('click', (event) => {
            if(resultSelect == '' || resultSelect == undefined){
                event.preventDefault();
                alert('Пожалуйста, выберите цену')
            }else{

                const formObj = {
                    name: formCarText.textContent,
                    price: resultSelect
                }

                localStorage.setItem('feedback', JSON.stringify(formObj));
                 
            }   
        });
}

locarStorage();