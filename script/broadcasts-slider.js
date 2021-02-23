const slider = document.querySelector('.broadcasts-slider');
const slides = document.querySelector('.broadcasts-slider__inner');
let activeSlide = Array.from(slides.children)[3];

slider.addEventListener('click', (event) => {
  let videoLink = slides.children[1].firstElementChild.getAttribute('adr');
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
  }
});
