const slider = document.querySelector('.broadcasts-slider');
const slides = document.querySelector('.broadcasts-slider__inner');
let activeSlide = Array.from(slides.children)[3];

slider.addEventListener('click', (event) => {
  let videoLink = slides.children[1].firstElementChild.getAttribute('adr');
  if (event.target !== slider && event.target !== slides) {
    if (event.target.id === 'broadcasts__arrow-down') {
      event.preventDefault();
      slides.prepend(slides.lastElementChild);
      videoLink = slides.children[1].firstElementChild.getAttribute('adr');
      broadcastplayer.loadVideoById(videoLink);
    } else if (event.target.id === 'broadcasts__arrow-up') {
      event.preventDefault();
      slides.append(slides.firstElementChild);
      videoLink = slides.children[1].firstElementChild.getAttribute('adr');
      broadcastplayer.loadVideoById(videoLink);
    } else if (event.target.closest('.broadcasts-slider__item')) {
      console.log(slides.children[1]);
      if (slides.children[1] !== event.target.closest('.broadcasts-slider__item')) {
        videoLink = event.target.closest('.broadcasts-slider__link').getAttribute('adr');
        broadcastplayer.loadVideoById(videoLink);
        
      slides.prepend(slides.lastElementChild);
      }
    }
  }
});
