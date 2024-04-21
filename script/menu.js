/* Для всплывающего окна */ 
const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('nav');
const messenger = document.querySelector('.messenger-act')
menuBtn.addEventListener('click', () =>{
menuBtn.classList.toggle('active');
menu.classList.toggle('popUp');
messenger.classList.toggle('act')
});
document.addEventListener('click', function(event) {
    // Проверяем, что клик произошел вне меню и кнопки открытия
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        // Закрываем меню, добавляя класс, который изменяет его видимость или другие свойства
        menu.classList.remove('popUp');
        menuBtn.classList.remove('active');
    }
});
