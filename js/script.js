import tabs from './modules/tabs'
import calc from './modules/calc'
import cards from './modules/cards'
import modal from './modules/modal'
import slider from './modules/slider'
import timer from './modules/timer'
import forms from './modules/form'
window.addEventListener('DOMContentLoaded', ()=>{
 
tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
calc()
cards()
modal('[data-modal]', '.modal')
slider({
 
  container: '.offer__slider',
  slide: '.offer__slide',
  nextArrow: '.offer__slider-next',
  prewArrow: '.offer__slider-prev',
  totalCount: '#total',
  currentCount: '#current',
  wrapper: '.offer__slider-wrapper',
  field: '.offer__slider-inner'
})
forms('form')
timer('.timer', '2022-06-11')

});

//73 22 59