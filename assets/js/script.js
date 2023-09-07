//
//
//
//
//
//
//
//


const slides = [
    {
       pic : './assets/img/01.webp',
    },
    {
        pic : './assets/img/02.webp',
    },
    {
        pic : './assets/img/03.webp',
    },
    {
        pic : './assets/img/04.webp',
    },
    {
        pic : './assets/img/05.webp',
    },
]

let activeSlide = 0;

const sliderImagesEl = document.querySelector('.slider .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')

slides.forEach(eachSl);

function eachSl(slide, i) { 

    console.log(slide.pic);
    const slideMarkup = `<img class="thumb ${activeSlide === i ? 'active' : ''}" src="${slide.pic}" alt="">`
    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup);

}

const slidesImages = document.querySelectorAll('.slider .images > img')
console.log(slidesImages);

nextEl.addEventListener('click', goNextSl)
prevEl.addEventListener('click', goPrevEl)


function goNextSl() {

    console.log('cliccato su next');
  
    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')
    
    // activeSlide = 4
  
    if (activeSlide === slidesImages.length - 1) {
      activeSlide = 0
      // activeSlide = 5
    } else {
      // increment the activeSlide of 1
      activeSlide++
    }
  
    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')
    
}

function goPrevEl() {

   console.log('cliccato su prev');
  
    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')
  
    if (activeSlide === 0) {
      activeSlide = slidesImages.length - 1
      // activeSlide = 5
    } else {
        // decrement the activeSlide of 1
        activeSlide--
    }
    
    console.log(activeSlide);
  
    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active') 

}







