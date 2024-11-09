document.addEventListener('DOMContentLoaded', function () {
  const feedButton = document.querySelectorAll('.main-button--chat-item')
  const feedModal = document.querySelector('.modal-feedback')
  const closeFeedButton = document.querySelector('.modal-feedback__close')
  const feedBlur = document.querySelector('.modal-feedback--blur')

  feedButton.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault

      feedModal.style.display = 'block'
      document.body.style.overflow = 'hidden'
      feedBlur.style.display = 'block'
    })
  })

  closeFeedButton.addEventListener('click', function (event) {
    event.preventDefault

    feedModal.style.display = 'none'
    document.body.style.overflow = 'auto'
    document.body.style.overflowX = 'hidden'
    feedBlur.style.display = 'none'
  })

  feedBlur.addEventListener('click', function () {
    feedModal.style.display = 'none'
    document.body.style.overflow = 'auto'
    document.body.style.overflowX = 'hidden'
    feedBlur.style.display = 'none'
  })
})
