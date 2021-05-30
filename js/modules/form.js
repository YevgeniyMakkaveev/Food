import {closeModal, openModal} from './modal';
import {postData} from '../services/services'
function forms(formSelector) {
const forms = document.querySelectorAll(formSelector);
const message = {
 loading: `054_spinner.svg`,
 success: 'Спасибо! Скоро мы с вами свяжемся',
 failure: 'Все упало'
};

forms.forEach(item => {
 bindPostData(item);
});
 function bindPostData(form) {
  form.addEventListener('submit', (e) => {
   e.preventDefault();

   let statusMessage = document.createElement('img');
   statusMessage.src = message.loading
   statusMessage.style.cssText = `display: block;margin: 0 auto`;
   form.appendChild(statusMessage);



   const formData = new FormData(form);

   const object = {};
   formData.forEach(function (value, key) {
    object[key] = value;
   });




   postData('http://localhost:3000/requests', JSON.stringify(object)).then(data => {
    console.log(data);
    showThanksModal(message.success);

    statusMessage.remove();
   }).catch(() => {
    showThanksModal(message.failure);
   }).finally(() => {
    form.reset();
   })


  });
 }

 function showThanksModal(message) {
  const prevModalDialog = document.querySelector('.modal__dialog');
  prevModalDialog.classList.add('hide')
  openModal();

  const thanksModal = document.createElement('div')
  thanksModal.classList.add("modal__dialog");
  thanksModal.innerHTML = `
  <div class="modal__content">
  <div class="modal__close" data-close>×< </div>
  <div class="modal__title"> ${message}</div>
  
  
  </div>
  `
  document.querySelector('.modal').append(thanksModal)
  setTimeout(() => {
   thanksModal.remove();
   prevModalDialog.classList.add('show')
   prevModalDialog.classList.remove('hide')
   closeModal();
  }, 4000);
 }
 

}
export default forms