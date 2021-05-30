 function openModal(modalSelector) {
  const modal = document.querySelector(modalSelector)
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
 }

  function closeModal(modalSelector) {
   const modal = document.querySelector(modalSelector)
   modal.classList.add('hide');
   modal.classList.remove('show');
   document.body.style.overflow = '';
  }

function modal(triggerSelector, modalSelector) {
 const modalTriggers = document.querySelectorAll(triggerSelector),
  modal = document.querySelector(modalSelector)

 

 modalTriggers.forEach(btn => {
  btn.addEventListener('click', () => openModal(modalSelector))
 })





 modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.getAttribute('data-close') == '') {
   closeModal(modalSelector);
  }
 })

 document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && modal.classList.contains('show')) {
   closeModal(modalSelector);
  }
 })



 function showModalScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
   openModal(modalSelector)
   window.removeEventListener('scroll', showModalScroll)
  }

 }

 window.addEventListener('scroll', showModalScroll)
 axios.get('http://localhost:3000/menu').then(data => console.log(data))
 
}

export default modal
export { closeModal};
export { openModal};