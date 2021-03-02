const hero__btns = document.querySelector('.hero__btns');
const hero__pic = document.querySelector('.hero__pic');
const heroSection = document.querySelector('.hero-section');
const section__titles = document.querySelectorAll('.section__title');
const buttons = document.querySelectorAll('.button');
const format__items = document.querySelectorAll('.format__item');
const hero__subtitle = document.querySelector('.hero__subtitle');
const subject__section = document.querySelector('#subjects').closest('section');
const addit__options = document.querySelectorAll('.addit-options__item');

const about__inner = document.querySelector('.about__inner');
const aboutPic = document.querySelector('.about__pic');
const about__title = document.querySelector('.about__title');

const about__close__btn = document.querySelector('.pop-up-about__close-btn');
const pop_up__img = document.querySelector('.pop-up-about__img');
const pop_up_about = document.querySelector('.pop-up-about');
const body = document.body;

if (window.innerHeight > window.innerWidth) {
  heroSection.classList.add('hero-section--width');
}
body.addEventListener('click', (event) => {
  if (event.target.closest('.about__pic') === aboutPic) {
    togglePopUp();
    setTimeout(playVideo, 500);
  }
  if (event.target === about__close__btn) {
    togglePopUp();
    pauseVideo();
  }
});

body.addEventListener('keydown', (event) => {
  // console.log(event.key);
  if (
    event.key === ('Escape' || 'Esc') &&
    pop_up_about.classList.contains('pop-up-about--full-screen')
  ) {
    togglePopUp();
    pauseVideo();
  }
});

function togglePopUp() {
  pop_up_about.classList.toggle('pop-up-about--full-screen');
  document.body.classList.toggle('body--full-screen');
  about__title.classList.toggle('about__title--full-screen');
  about__close__btn.classList.toggle('pop-up-about__close-btn--full-screen');
}

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

  hero__pic.className = 'hero__pic';
  hero__pic.classList.add(`hero__pic--${btn.id}`);

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
