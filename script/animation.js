function showCarScroll(){
    let car = document.querySelector('.car');
    let header = document.querySelector('header');
    window.addEventListener('scroll', ()=>{
        if(scrollY > 20){
                car.classList.add('anim');
                header.classList.add('margin');
        }else{
            header.classList.remove('margin');
        }
        if(scrollY == 300){

        }

       //console.log(scrollY)
    })
}
showCarScroll();

function showForm(){
    let form = document.querySelector('.container');

    document.querySelector('.openForm').addEventListener('click', ()=>{
        form.classList.add('show');
    })
    document.querySelector('.close').addEventListener('click', ()=>{
        form.classList.remove('show');
    })
}

showForm()