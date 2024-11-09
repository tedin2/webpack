document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('brandsButton')
  const show = document.querySelector('.brands__wrapper-button')
  const list = document.getElementById('brandList')

  button.addEventListener('click', function (event) {
    event.preventDefault

    if (show.classList.contains('brands__wrapper-button')) {
      button.textContent = 'Скрыть'
      button.className = 'wrapper-button__button-show'
      show.className = 'brands__wrapper-button-show'
      list.className = 'brands__list-show'
    } else {
      button.textContent = 'Показать все'
      button.className = 'wrapper-button__button'
      show.className = 'brands__wrapper-button'
      list.className = 'brands__list'
    }
  })
})
