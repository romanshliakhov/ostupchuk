// Select
// let select = function() {
//   let selectHeader = document.querySelectorAll('.access__variant-header');
//   let selectItem = document.querySelectorAll('.access__variant-selected');

//   selectHeader.forEach(item => {
//     item.addEventListener('click', selectToggle);
//   });

//   selectItem.forEach(item => {
//     item.addEventListener('click', selectChoose);
//   });

//   function selectToggle() {
//     this.parentElement.classList.toggle('is-active');
//   }

//   function selectChoose() {
//     let text = this.innerText;
//     let select = this.closest('.access__variant-choose');

//     currentText = select.querySelector('.access__variant-current');
//     currentText.innerText = text;
//     select.classList.remove('is-active');
//   }
// }

// select();


// Select
let selects = document.querySelectorAll('.access__variant-choose');

let selectScript = function (select) {
  select.forEach((item) => {
    const selectCurrent = item.querySelector(".access__variant-current");

    item.addEventListener("click", (event) => {
        const el = event.target.dataset.choice;
        const text = event.target.innerText;

        if (el === "choosen" && selectCurrent.innerHTML !== text) {
            selectCurrent.innerText = text;
        }

        item.classList.toggle("is-active");
    });
    document.addEventListener("click", function (event) {
        if (!item.contains(event.target)) {
          item.classList.remove("is-active");
        }
    });
  });
}

selectScript(selects);

