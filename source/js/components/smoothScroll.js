const anchorButtons = document.querySelectorAll('.nav__link');
const header = document.querySelector('header');

let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.mobile');
let disableScroll = document.querySelector('body');

window.addEventListener('DOMContentLoaded', () => {
  anchorButtons.forEach(function(item){
    item.addEventListener('click', function(e){
      let clickValue = e.target.getAttribute('href');

      e.preventDefault();

      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      disableScroll.classList.remove('body-scroll');


      window.scrollTo({
        top: document.getElementById(`${clickValue.replace('#', '')}`).offsetTop,
        behavior: 'smooth'
      })
    });
  })
})
