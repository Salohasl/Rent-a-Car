function showForm(){
    let btnShow = document.querySelectorAll('#btnShow');
    let container = document.querySelector('#container');
    let closeShow = document.querySelector('.close');
    let text = document.querySelector('.text');
    btnShow.forEach(btnShow =>{
        btnShow.addEventListener('click', ()=>{
            container.classList.add('active');
            text.textContent = btnShow.value;
            if(btnShow.value == 'СКИДКА 15%'){
               let res = confirm('Скидка действует при предъявлении удостоверения')
                if(!res){
                    container.classList.remove('active');
                }
            }
        })
    })

    closeShow.addEventListener('click', ()=>{
        container.classList.remove('active');
    })
}

showForm();
/*function agree(){
    const agree = document.getElementById('agree');
    const buttonForm = document.getElementById('buttonForm');
    agree.addEventListener('click', () =>{
        if(!(agree.checked)){
            buttonForm.style.backgroundColor = 'grey';
            buttonForm.setAttribute('disabled', '.');
        }else{
            buttonForm.style.backgroundColor = '#EF7D3F';
            buttonForm.removeAttribute('disabled', '.');
        }
    })
}agree();
*/


