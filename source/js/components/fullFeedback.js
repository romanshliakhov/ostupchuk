const feedbackBtn = document.querySelectorAll('.feedback__full');
const feedbackCards = document.querySelectorAll('.feedback');

let feedbackCardsReset = function (cards) {
  cards = feedbackCards;

  cards.forEach((item) => {
    item.classList.remove('full');
  })
}

feedbackBtn.forEach(item => {
  item.addEventListener('click', () => {
    let card = item.closest('.feedback');

    feedbackCardsReset();

    card.classList.add('full');
  })
})








