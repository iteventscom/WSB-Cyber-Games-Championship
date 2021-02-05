const hero__btns = document.querySelector('.hero__btns');
// const hero__line = document.querySelector('.hero__line');
const hero__section = document.querySelector('.hero-section');
const section__titles = document.querySelectorAll('.section__title');
const buttons = document.querySelectorAll('.button');
const format__items = document.querySelectorAll('.format__item');
const hero__subtitle = document.querySelector('.hero__subtitle');
const subject__section = document.querySelector('#subjects').closest('section');
const addit__options = document.querySelectorAll('.addit-options__item');
console.log(addit__options);

hero__btns.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.classList.contains('button')) {
    changeBtn(event.target);
  }
});

let prevTheme = '';
function changeBtn(btn) {
  btns = [...hero__btns.children];
  btns.forEach((element) => {
    element.classList.remove('button__active');
  });
  btn.classList.add('button__active');

  // hero__line.className = 'hero__line';
  // hero__line.classList.add(`hero__line--${btn.id}`);

  hero__section.className = 'section section--margin hero-section';
  hero__section.classList.add(`hero-section--${btn.id}`);

  section__titles.forEach((element) => {
    element.classList.remove(`section__title--${prevTheme}`);
    element.classList.add(`section__title--${btn.id}`);
  });

  buttons.forEach((element) => {
    element.classList.remove(`button--${prevTheme}`);
    element.classList.add(`button--${btn.id}`);
  });

  format__items.forEach((element) => {
    element.classList.remove(`format__item--${prevTheme}`);
    element.classList.add(`format__item--${btn.id}`);
  });
  
  addit__options.forEach((element) => {
    element.classList.remove(`addit-options__item--${prevTheme}`);
    element.classList.add(`addit-options__item--${btn.id}`);
  });

  hero__subtitle.classList.remove(`hero__subtitle--${prevTheme}`);
  hero__subtitle.classList.add(`hero__subtitle--${btn.id}`);

  if (btn.id !== 'main') {
    subject__section.classList.add('section--invisible');
  } else {
    subject__section.classList.remove('section--invisible');
  }

  prevTheme = btn.id;
}
