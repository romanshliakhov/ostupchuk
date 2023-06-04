const anchorButtons = document.querySelectorAll('.nav__link');
const header = document.querySelector('header');

let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.mobile');
let disableScroll = document.querySelector('body');

window.addEventListener('DOMContentLoaded', () => {
  anchorButtons.forEach(function(item){
    item.addEventListener('click', function(e){
      e.preventDefault();

      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      disableScroll.classList.remove('body-scroll');

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  })
})
