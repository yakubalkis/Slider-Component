// Slider
const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const maxSlide = slides.length;
const dotContainer = document.querySelector('.dots')

let curSlide = 0;



const toSlide = function(slide){
    for(let i=0;i<maxSlide;i++){
        if(i == slide){
            slides[slide].style.display = 'block'; 
        }else slides[i].style.display = 'none';
    }
}
toSlide(0);

const nextSlide = function(){
    if(curSlide === maxSlide-1){
        curSlide = 0;
    }
    else{ curSlide++;}

    toSlide(curSlide);
    activateDot(curSlide);
};

const preSlide = function(){
    if(curSlide === 0){
        curSlide = maxSlide -1;
    }else{curSlide--;}

    toSlide(curSlide);
    activateDot(curSlide);
};

btnLeft.addEventListener('click', preSlide);
btnRight.addEventListener('click', nextSlide);

// Create dots
const createDots = function(){
    slides.forEach(function(_,i){
        dotContainer.insertAdjacentHTML('beforeend',
        `<button class="dots__dot dots__dot--active" data-slide="${i}"></button>`)
    });
};
createDots();

const activateDot = function(slide){
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}
activateDot(0);

dotContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('dots__dot')){
        const dot = e.target.dataset.slide;  // we gets the value of data-slide
        toSlide(dot);
        activateDot(dot);
    }
});