const emailLine = document.querySelectorAll('.email-line')
const emailBox = document.querySelector('.email-box')
const mainContainer = document.querySelector('.main-container')
const oneEmail = document.querySelector('.one-email')

const btnMoreEmail = document.querySelector('.btn-more-email')
const hidenEmailList = document.querySelector('.hiden-email-list')

const btnReload = document.querySelector('.btn-reload')

const oneEmailModalWindow = document.querySelector('.one-email-modal-window')

emailLine.forEach(item => {
  item.addEventListener('click', (e) => {
    console.log(e.currentTarget);
    oneEmailModalWindow.classList.remove('hide')
    oneEmailModalWindow.classList.add('dm-overlay-show')
  })
})

btnReload.addEventListener('click', (e) =>{
  hidenEmailList.classList.add('hide')

})

btnMoreEmail.addEventListener('click',()=>{
  hidenEmailList.classList.remove('hide')
})



