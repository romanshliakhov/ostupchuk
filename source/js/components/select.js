// Select
let select = function() {
  let selectHeader = document.querySelectorAll('.access__variant-header');
  let selectItem = document.querySelectorAll('.access__variant-selected');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText;
    let select = this.closest('.access__variant-choose');

    currentText = select.querySelector('.access__variant-current');
    currentText.innerText = text;
    select.classList.remove('is-active');
  }
}

select();

