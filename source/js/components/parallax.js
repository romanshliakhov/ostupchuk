// window.onload = function () {
//   const parallax = document.querySelector('.hero');

//   if (parallax) {
//     const phones = document.querySelector('.hero__phones-image');

//     // Коэффициенты
//     const forPhones = 10;

//     // Скорость динамики
//     const speed = 0.05;

//     // Обьявление переменных
//     let positionX = 0, positionY = 0;
//     let coordXprocent = 0, coordYprocent = 0;

//     function setMouseParallaxStyle() {
//       const distX = coordXprocent - positionX;
//       const distY = coordYprocent - positionY;

//       positionX = positionX + (distX * speed);
//       positionY = positionY + (distY * speed);

//       // Передаем стили
//       phones.style.cssText = `transform: translate(${positionX / forPhones}%, ${positionY / forPhones} %); background: red;`;

//       console.log('parallax')

//       requestAnimationFrame(setMouseParallaxStyle);
//     }

//     setMouseParallaxStyle();

//     parallax.addEventListener('mousemove', function (e) {
//       // Получение высоты и ширины блока
//       const parallaxWidth = parallax.offsetWidth;
//       const parallaxHeight = parallax.offseHeight;

//       // Ноль по середине
//       const coordX = e.pageX - parallaxWidth / 2;
//       const coordY = e.pageY - parallaxWidth / 2;

//       // Получаем проценты
//       coordXprocent = coordX / parallaxWidth * 100;
//       coordYprocent = coordY / parallaxHeight * 100;

//       console.log('working');
//     });
//   }
// }

window.onload = function () {
  const parallaxBlock = document.querySelector('.hero');

  if(parallaxBlock) {
    parallaxBlock.addEventListener("mousemove", function(event) {
      const parallaxImage = document.querySelectorAll('.hero__phones-image');

      parallaxImage.forEach((shift) => {
        const position = shift.getAttribute("value");

        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    });
  }
}





