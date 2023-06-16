const imgCarousel = [
    './img/01.webp', 
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
];

const carousel = document.getElementById('carousel');
const buttonUp = document.getElementById('button-up')
const buttonDown = document.getElementById('button-down');



for (let i = 0; i < imgCarousel.length; i++) {      //INSERISCO IMG IN DOM IMG 1 SARA L UNICA ATTIVA

    let img = document.createElement('img');
    img.src = imgCarousel[i];

    carousel.append(img);
    img.classList.add('non-active');

    const imgId = 'img_'+i;    
    img.setAttribute('id',imgId);

    if(i == 0){
        img.classList.add('active');
        img.classList.remove('non-active')
    }

}

let activeImg  = 0;

 buttonUp.addEventListener('click',                                                    
        function() {   

            if(activeImg <=4) {                           
            const curentImg = document.querySelector('.active');
            curentImg.classList.remove('active');
            curentImg.classList.add('non-active');
        
        
            activeImg++
            const nextImg = document.getElementById('img_'+ activeImg);
            nextImg.classList.remove('non-active');
            nextImg.classList.add('active');
        } else {
            activeImg  = 0;
            nextImg = document.getElementById('img_'+ 0);
            nextImg.classList.remove('non-active');
            nextImg.classList.add('active');

            let lastImg = document.getElementById('img_'+ 4);
            lastImg.classList.remove('active');
            
        }
    }
);



buttonDown.addEventListener('click',                                                     
        function() {    
            
        const curentImg = document.querySelector('.active');
        curentImg.classList.remove('active');
        curentImg.classList.add('non-active');
        
        
        activeImg--;
        const nextImg = document.getElementById('img_'+ activeImg);
        nextImg.classList.remove('non-active');
        nextImg.classList.add('active');
        
    }
);










