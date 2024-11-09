document.addEventListener('DOMContentLoaded', function () {
  const bButton = document.querySelector('.main-button--burger-item')
  const eButton = document.querySelector('.main-button--exit-item')
  const sideMenu = document.querySelector('.side-menu')
  const blur = document.querySelector('.side-menu--blur')

  bButton.addEventListener('click', function (event) {
    event.preventDefault

    sideMenu.style.display = 'flex'
    document.body.style.overflow = 'hidden'
    blur.style.display = 'block'
  })

  eButton.addEventListener('click', function (event) {
    event.preventDefault

    sideMenu.style.display = 'none'
    document.body.style.overflow = 'auto'
    document.body.style.overflowX = 'hidden'
    blur.style.display = 'none'
  })
  blur.addEventListener('click', function () {
    sideMenu.style.display = 'none'
    document.body.style.overflow = 'auto'
    document.body.style.overflowX = 'hidden'
    blur.style.display = 'none'
  })
})
