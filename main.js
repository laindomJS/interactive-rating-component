// EVENTO DE CARGA DEL DOCUMENTO 
window.addEventListener('load', () => {

    // CONSTANTES
    const btn = document.querySelector('#button');
    const image = document.querySelector('#icon');
    const cardContainer = document.querySelector('#cardC');
    const selectedText = document.querySelector('#selection');
    const text = document.querySelector('#text');
    const numbers = document.querySelector('#selectNum');
    const val = document.querySelectorAll('.num');
    const span = document.querySelector('#value');
    let value = 0;
    
    // FUNCION PARA ENCONTRAR EL VALOR
    findValue = () => {
       value = event.target.innerHTML;
    }

    // EVENTO DE TOMA DE VALOR
    val.forEach(item => {
        item.addEventListener('click', findValue);
    })

    // EVENTO DE CLICK
    btn.addEventListener('click', () => {
        
        // CAMBIO DE LA ILUSTRACIÓN
        cardContainer.className = 'card center';
        image.setAttribute('src', './images/illustration-thank-you.svg');
        image.className = 'illustration';


        // VISUALIZACIÓN DE UN NODO HTML
        selectedText.className = 'selected view';
        span.innerHTML = value;


        // CAMBIO DEL TEXTO DE LA CARD
        text.className = 'card__text';
        document.querySelector('.card__title').innerHTML = 'Thank You!';
        document.querySelector('.card__para').innerHTML = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';


        // DESACTIVACIÓN DE NUMBEROS Y BOTON
        numbers.className = 'hidden';
        btn.className = 'hidden';

    });


})