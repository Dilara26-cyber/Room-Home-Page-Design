const open_the_menu = document.querySelector('.fa-bars');
const close_the_menu = document.querySelector('.fa-times');
const menu = document.querySelector('.nav__hmbrg__menu');
const overlay = document.querySelector('.overlay');

open_the_menu.addEventListener('click', () => {
  menu.classList.add('nav__hmbrg__menu--active');
  overlay.classList.add('overlay--active');
});

close_the_menu.addEventListener('click', () => {
  menu.classList.remove('nav__hmbrg__menu--active');
  overlay.classList.remove('overlay--active');
});
overlay.addEventListener('click', () => {
  menu.classList.remove('nav__hmbrg__menu--active');
  overlay.classList.remove('overlay--active');
});

//Slider:

const image_container = document.querySelector('.bg__images');
const images = document.querySelectorAll('.bg__images img');
const right_btn = document.querySelector('#forward');
const left_btn = document.querySelector('#backwards');

let counter = 1;

const size = images[0].clientWidth;
console.log(size);

image_container.style.transform = `translateX(${-size * counter}px)`;

left_btn.addEventListener('click', () => {
  if (counter <= images.length - 1) {
    image_container.style.transition = 'transform 0.3s ease-in';
    counter++;
    image_container.style.transform = `translateX(${-size * counter}px)`;
  }
});
right_btn.addEventListener('click', () => {
  console.log('I am pressed.');
  if (counter >= 0) {
    image_container.style.transition = 'transform 0.3s ease-in';
    counter--;
    image_container.style.transform = `translateX(${-size * counter}px)`;
  }
});

image_container.addEventListener('transitionend', () => {
  if (images[counter].id === 'last__image') {
    image_container.style.transition = 'none';
    counter = images.length - 2;
    image_container.style.transform = `translateX(${-size * counter}px)`;
  }
  if (images[counter].id === 'first__image') {
    image_container.style.transition = 'none';
    counter = images.length - counter;
    image_container.style.transform = `translateX(${-size * counter}px)`;
  }
});
