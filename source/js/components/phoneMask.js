import  Inputmask from '../vendor/inputmask.js';

// imput Mask
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+9 (999) 999-99-99');
im.mask(selector);

new window.JustValidate('.form', {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = telSelector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    },
    telegram: {
      required: true,
    }
  },
  colorWrong: 'red',

  messages: {
    name: {
      required: 'Заполните поле',
      minLength: 'Введите 3 и более символов',
      maxLength: 'Запрещено вводить более 15 символов',
    },
    telegram: {
      required: 'Заполните поле',
    },
    email: {
      required: 'Введите email'
    },
    tel: {
      required: 'Введите номер телефона',
    }
  }
})
