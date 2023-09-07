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



/* const slides = [
    './assets/img/01.webp', 
    './assets/img/02.webp', 
    './assets/img/03.webp', 
    './assets/img/04.webp',
    './assets/img/05.webp',
] */

let activeSlide = 0;

const sliderImagesEl = document.querySelector('.slider .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')

slides.forEach(eachSl);

function eachSl(slide) { 

    let slidePath = slide.pic
    console.log(slidePath);
    const slideMarkup = `<img class="" src="${slidePath}" alt="">`
    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup);

}

const slidesImages = document.querySelectorAll('.slider .images > img')
console.log(slidesImages);


const thumbsElement = document.querySelector('.thumbnails')

/* for (let i = 0; i < slides.length; i++) {
  const thumbPath = slide.pic;
  const thumbMarkup = `<img class="thumb ${activeSlide === i ? 'active' : ''}" src="${thumbPath}" alt="">`
  //console.log(thumbMarkup);

  thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
  
} */

// intercept click on the next icon 
nextEl.addEventListener('click', function(){
    console.log('cliccato su next');
  
    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')
  
    /* // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active') */
  
    
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
  
  
    
  
  
    /* // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active') */
  
  
})
  
  // intercept click on the prev icon
  
  
  // activeSlide = 0
  prevEl.addEventListener('click', function () {
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
})







