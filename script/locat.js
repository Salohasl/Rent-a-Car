function addToCartLocalStorage(){

    let moreBtn = document.querySelectorAll('.more');

    moreBtn.forEach(elem => {
        elem.addEventListener('click', function click() {

                const productObj = {
                    id: elem.dataset.id
                }
                
              
                localStorage.setItem('car', JSON.stringify(productObj));
                     
        })
    })
  }
  
  addToCartLocalStorage();
