function showForm(){
    const btn = document.querySelectorAll('.show-form');
    const reservation = document.querySelector('.reservation');
    const close = document.querySelector('.close');
    const formCarTexts = document.querySelectorAll('.form-car');
    const selects = document.querySelectorAll('select');

    let resultSelect;
    selects.forEach(elem => {
        elem.addEventListener('change', ()=>{
            resultSelect = elem.value;
        })
    })

    btn.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            if(resultSelect != undefined){
                reservation.classList.add('showForm');
                for(const formCarText of formCarTexts){
                    if(formCarText.dataset.id == btn.dataset.id){
                        document.getElementById('car').value = formCarText.textContent + ',' + ' ' + resultSelect;
                    }
                }
            }else{
                alert('Выберите цену!')
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

            if(elem.dataset.place === 'receiving' && !elem.classList.contains('active')){
                document.getElementById('receiving').value = 'г. Калининград, ул. Ю. Гагарина, д.225, к. А1';
            }else{
                document.getElementById('receiving').value = '-';
            }
        })
    })


    for(const elem of btnPlace){
        if(elem.dataset.place == 'delivery' && !elem.classList.contains('active')){
            document.getElementById('submitForm').setAttribute('disabled', '');
        }else{
            document.getElementById('submitForm').removeAttribute('disabled');
        }
    }


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
