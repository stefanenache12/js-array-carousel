const imgCarousel = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
  ];
  
  const carousel = document.getElementById('carousel');
  const buttonUp = document.getElementById('button-up');
  const buttonDown = document.getElementById('button-down');
  
  
  let currentImg = 0;

  const img = document.createElement('img');
  img.src = imgCarousel[currentImg];            //CREO IMG E ASEGNO VALORE 0 DELLA ARRAY;
  carousel.append(img);

 
  

buttonUp.addEventListener('click',             // AL CLICK UP currentImg INCREMENTA DI 1
    function() {                                
        currentImg = (currentImg + 1) % imgCarousel.length;     //GRAZIE AL MODULO % QUANDO currentImg RAGGIUNGE 
        img.src = imgCarousel[currentImg];              // VALORE 4 + 1 VIENE DIVISO PER imgCarousel.length
});                                                     // SE RESTO DELLA DIVISIONE è 0 curentImg torna a 0;
  
buttonDown.addEventListener('click',
    function() {
        currentImg = (currentImg - 1 + imgCarousel.length) % imgCarousel.length;
        img.src = imgCarousel[currentImg];
});
  

















