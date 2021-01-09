const track = document.querySelector('.track');
const slides = Array.from(track.children);
console.log(track);
const nextbtn = document.querySelector('.ConDBtn--right');
const prebtn = document.querySelector('.ConDBtn--left');
const slidesize = slides[4].getBoundingClientRect().width;
slides[0].style.left =0;
slides[1].style.left = slidesize + 'px';
slides[2].style.left = slidesize *2 + 'px';
const setSlide = (slide,index) => {
    slide.style.left= slidesize * index + 'px';
}
slides.forEach(setSlide);

nextbtn.addEventListener('click', e => {
    const currentslide = track.querySelector('.currentslide');
    console.log(currentslide);
})


