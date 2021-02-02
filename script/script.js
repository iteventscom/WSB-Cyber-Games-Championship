let hero__btns = document.querySelector('.hero__btns');
let hero__line = document.querySelector('.hero__line');
let hero__section = document.querySelector('.hero-section')

hero__btns.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.classList.contains('button')) {
    changeBtn(event.target);
  }
});

function changeBtn(btn) {
  btns = [...hero__btns.children];
  btns.forEach((element) => {
    element.classList.remove('button__active');
  });
  btn.classList.add('button__active');

  hero__line.className = 'hero__line';
  hero__line.classList.add(`hero__line--${btn.id}`);
  
  hero__section.className = 'section section--margin hero-section';
  hero__section.classList.add(`hero-section--${btn.id}`);
}
