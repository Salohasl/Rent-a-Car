function showFaq(){
    const btnFaq = document.querySelectorAll('.btnFaq');
    const faqAnswers = document.querySelectorAll('.faq-block__answer');

    btnFaq.forEach(elem =>{
        elem.addEventListener('click',()=>{
            for(let faqAnswer of faqAnswers){
                if(elem.dataset.faq == faqAnswer.dataset.faq){
                    faqAnswer.classList.toggle('active');
                    elem.classList.toggle('rotate');
                }
            }
        })
    })
}
showFaq();

function linkUnderline() {
    const catalog = document.getElementById('catalog');
    const conditions = document.getElementById('conditions');
    const faq = document.getElementById('faq');
    const links = document.querySelectorAll('.link');

    window.addEventListener('scroll', () => {
        const windowY = window.scrollY;
        //каталог
        const rectCatalog = catalog.getBoundingClientRect();
        const catalogY = rectCatalog.y + windowY;
        //условия
        const rectConditions = conditions.getBoundingClientRect();
        const conditionsY = rectConditions.y + windowY;
        //FAQ
        const rectFaq = faq.getBoundingClientRect();
        const faqY = rectFaq.y + windowY;

        for (let link of links) {
            let activeElement = '';

            if (windowY >= catalogY && windowY < catalogY + rectCatalog.height) {
                activeElement = 'catalog';
            } else if (windowY >= conditionsY && windowY < conditionsY + rectConditions.height) {
                activeElement = 'conditions';
            } else if (windowY >= faqY && windowY < faqY + rectFaq.height){
                activeElement = 'faq';
            }

            switch (activeElement) {
                case 'catalog':
                    if (catalog.dataset.num == link.dataset.num) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                    break;
                case 'conditions':
                    if (conditions.dataset.num == link.dataset.num) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                    break;
                case 'faq':
                    if (faq.dataset.num == link.dataset.num) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                default:
                    link.classList.remove('active');
            }
        }
    });
}

linkUnderline();