document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('gadgetsButton')
  const show = document.querySelector('.gadgets__wrapper-button')
  const list = document.getElementById('gadgetList')

  button.addEventListener('click', function (event) {
    event.preventDefault

    if (show.classList.contains('gadgets__wrapper-button')) {
      button.textContent = 'Скрыть'
      button.className = 'gadgets__button-show'
      show.className = 'gadgets__wrapper-button-show'
      list.className = 'gadgets__list-show'
    } else {
      button.textContent = 'Показать все'
      button.className = 'gadgets__button'
      show.className = 'gadgets__wrapper-button'
      list.className = 'gadgets__list'
    }
  })
})
