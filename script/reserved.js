function showForm(){
    const btn = document.querySelectorAll('.show-form');
    const reservation = document.querySelector('.reservation');
    const close = document.querySelector('.close');
    const formCarTexts = document.querySelectorAll('.form-car');
  
    btn.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            reservation.classList.add('showForm');
            for(const formCarText of formCarTexts){
                if(formCarText.dataset.id == btn.dataset.id){
                    document.getElementById('car').value = formCarText.textContent;
                }
            }
        })
    })
    close.addEventListener('click',()=>{
        reservation.classList.remove('showForm');
    })
}

showForm();

function deliveryChoice(){
    const btnPlace = document.querySelectorAll('.btnPlace');
    const formGroups = document.querySelectorAll('#blockPlace');

    btnPlace.forEach(elem => {
        elem.addEventListener('click', ()=>{
            for(const formGroup of formGroups){
                if(elem.dataset.place == formGroup.dataset.place){
                    formGroup.classList.add('active');
                }else{
                    formGroup.classList.remove('active');
                }
            }
        })
    })

    const checkbox = document.querySelectorAll('.checkbox');
    const inputCheckbox = document.querySelector('#checkbox');
    let arrValue = [];
    checkbox.forEach(checkbox => {
        checkbox.addEventListener('click', ()=>{
            if (checkbox.checked) {
                arrValue.push(checkbox.value);
            } else {
                arrValue = arrValue.filter(value => value !== checkbox.value);
            }
            const mySet = new Set(arrValue);
            const updatedValues = Array.from(mySet);

            inputCheckbox.value = updatedValues.join(', ');
        })
    })
}
deliveryChoice();