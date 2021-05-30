import {getRes} from '../services/services'
function cards(){
  const menu = document.querySelector('.menu__field')
 class MenuItem {
  constructor(
   img, altimg, title, descr, price, parentSelector, ...classes
  ) {
   this.img = img,
    this.altimg = altimg,
    this.title = title,
    this.descr = descr,
    this.price = price,
    this.parent = document.querySelector(parentSelector)
   this.transfer = 76,
    this.classes = classes;
   this.changeToRUB()
  }
  changeToRUB() {
   this.price = +this.price * this.transfer

  }
  render() {
   const element = document.createElement('div')
   if (this.classes.length === 0) {
    this.element = 'menu__item'
    element.classList.add(this.element);
   } else {
    this.classes.forEach(className => element.classList.add(className))
   }
   element.innerHTML = `
   
    <img src=${this.img} alt=${this.altimg}>
    <h3 class="menu__item-subtitle">${this.title} </h3>
    <div class="menu__item-descr"> ${this.descr}</div>
    <div class="menu__item-divider"></div>
    <div class="menu__item-price">
    <div class="menu__item-cost">Цена:</div>
    <div class="menu__item-total"><span>${this.price} </span> руб/день</div>
    
  `;
   this.parent.append(element)
  }
 }

 getRes('http://localhost:3000/menu')
  .then(data => createCard(data))
  function createCard(data) {
   data.forEach(({
    img,
    altimg,
    title,
    descr,
    price
   }) => {
    const element = document.createElement('div')
    element.classList.add('menu__item')

    element.innerHTML = `
<img src=${img} alt=${altimg}>
    <h3 class="menu__item-subtitle">${title} </h3>
    <div class="menu__item-descr"> ${descr}</div>
    <div class="menu__item-divider"></div>
    <div class="menu__item-price">
    <div class="menu__item-cost">Цена:</div>
    <div class="menu__item-total"><span>${price} </span> грн/день</div>
`
    document.querySelector('.menu .container').append(element)
   })
  }
}

export default cards