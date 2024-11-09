document.addEventListener('DOMContentLoaded', function () {
  const callButton = document.querySelectorAll('.main-button--call-item')
  const callModal = document.querySelector('.modal-call')
  const closeCallButton = document.querySelector('.modal-call__close')
  const callBlur = document.querySelector('.modal-call--blur')

  callButton.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault

      callModal.style.display = 'block'
      document.body.style.overflow = 'hidden'
      callBlur.style.display = 'block'
    })
  })

  closeCallButton.addEventListener('click', function (event) {
    event.preventDefault

    callModal.style.display = 'none'
    document.body.style.overflow = 'auto'
    document.body.style.overflowX = 'hidden'
    callBlur.style.display = 'none'
  })

  callBlur.addEventListener('click', function () {
    callModal.style.display = 'none'
    document.body.style.overflow = 'auto'
    document.body.style.overflowX = 'hidden'
    callBlur.style.display = 'none'
  })
})
