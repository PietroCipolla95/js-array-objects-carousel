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

let sliderImages = document.querySelector('.images'); //contenitore slides

const slideImg = document.querySelectorAll('.images > img') //immagini generate

slides.forEach(createSl);

function createSl(slide) {

    let slideDom = `<img src="${slide.pic}" class="active">` 
    sliderImages.insertAdjacentHTML('beforeend', slideDom)   
    
}


// controls variables
const nextSl = document.getElementById('next')
const prevSl = document.getElementById('prev')


nextSl.addEventListener('click', function() {

    const currentSlide = slideImg

    currentSlide.classList.remove('active')

    
})







