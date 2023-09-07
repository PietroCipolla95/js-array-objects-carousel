const slides = [
    {
        pic : './assets/img/01.webp'
    },
    {
        pic : './assets/img/02.webp'
    },
    {
        pic : './assets/img/03.webp'
    },
    {
        pic : './assets/img/04.webp'
    },
    {
        pic : './assets/img/05.webp'
    },
]

let sliderImages = document.querySelector('.images');

let activeSlide = 0;


slides.forEach(myFnc);

function myFnc(slide) {

    let slideDom = `<img src="${slide.pic}" class="my_w">` 
    sliderImages.insertAdjacentHTML('beforeend', slideDom)   
    
}





