function slider({container, slide, nextArrow,prewArrow, totalCount, currentCount, wrapper, field}){
 const sliderImg = document.querySelectorAll(slide),
  slider = document.querySelector(container),
  prev = document.querySelector(prewArrow),
  next = document.querySelector(nextArrow),
  current = document.querySelector(currentCount),
 total = document.querySelector(totalCount),
  slidesWrapper = document.querySelector(wrapper),
  slidesField = document.querySelector(field),
  width = window.getComputedStyle(slidesWrapper).width

 let sliderIndex = 1;
 let offset = 0

 if (sliderImg.length < 10) {
  total.textContent = `0${sliderImg.length}`
  current.textContent = `0${sliderIndex}`
 } else {
  total.textContent = sliderImg.length
  current.textContent = sliderIndex
 }

 slidesField.style.width = 100 * sliderImg.length + '%';
 slidesField.style.display = 'flex'
 slidesField.style.transition = '0.5'
 slidesField.style.transition = '0.5s all'

 slidesWrapper.style.overflow = 'hidden'


 sliderImg.forEach(sliderImg => {
  sliderImg.style.width = width
 })

 slider.style.position = 'relative'

 const indicator = document.createElement('ol'),
  dots = [];
 indicator.classList.add('carosel-indicator')
 indicator.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
`
 slider.append(indicator);
 for (let i = 0; i < sliderImg.length; i++) {
  const dot = document.createElement('li')
  dot.setAttribute('data-slide-to', i + 1);
  dot.style.cssText = `box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
`
  //7 50
  if (i == 0) {
   dot.style.opacity = 1
  }
  indicator.append(dot)
  dots.push(dot)

 }

 function removeLetter(str) {
  return +str.replace(/\D/g, '')
 }


 next.addEventListener('click', () => {
  if (offset == removeLetter(width) * (sliderImg.length - 1)) {
   offset = 0
  } else {
   offset += removeLetter(width)
  }
  slidesField.style.transform = `translateX(-${offset}px)`

  if (sliderIndex == sliderImg.length) {
   sliderIndex = 1
  } else {
   sliderIndex++
  }

  if (sliderImg.length < 10) {
   current.textContent = `0${sliderIndex}`
  } else {
   current.textContent = sliderIndex
  }
  dots.forEach(dot => dot.style.opacity = '.5')
  dots[sliderIndex - 1].style.opacity = 1
 })

 prev.addEventListener('click', () => {
  if (offset == 0) {
   offset = removeLetter(width) * (sliderImg.length - 1)
  } else {
   offset -= removeLetter(width)
  }
  slidesField.style.transform = `translateX(-${offset}px)`

  if (sliderIndex == 1) {
   sliderIndex = sliderImg.length
  } else {
   sliderIndex--
  }
  if (sliderImg.length < 10) {
   current.textContent = `0${sliderIndex}`
  } else {
   current.textContent = sliderIndex
  }



  dots.forEach(dot => dot.style.opacity = '.5')
  dots[sliderIndex - 1].style.opacity = 1
 })
 // if(sliderImg.length<10){
 //   total.textContent = `0${sliderImg.length}`
 // } else {
 //   total.textContent = `${sliderImg.length}`
 // }

 // showSlides(sliderIndex)

 // function showSlides(n){
 // if (n > sliderImg.length) {

 //   sliderIndex = 1
 // }

 // if(n<1){
 //   sliderIndex = sliderImg.length
 // }

 // sliderImg.forEach(item => item.style.display = 'none')
 // sliderImg[sliderIndex - 1].style.display ='block';

 // if (sliderImg.length < 10) {
 //   current.textContent = `0${sliderIndex}`
 // } else {
 //   current.textContent = `${sliderIndex}`
 // }

 // }

 // function plusSlides(n){
 //   showSlides(sliderIndex+=n)
 // }

 // prev.addEventListener('click', ()=>{plusSlides(-1)})
 // next.addEventListener('click', () => {
 //   plusSlides(1)
 // })
 dots.forEach(dot => {
   dot.addEventListener('click', (e) => {
     const slideTo = e.target.getAttribute('data-slide-to')
     sliderIndex = slideTo
     offset = removeLetter(width) * (slideTo - 1)
     slidesField.style.transform = `translateX(-${offset}px)`
     if (sliderImg.length < 10) {
       current.textContent = `0${sliderIndex}`
     } else {
       current.textContent = sliderIndex
     }

     dots.forEach(dot => dot.style.opacity = '.5')
     dots[sliderIndex - 1].style.opacity = 1
   })
 })
 fetch('http://localhost:3000/menu').then(data => data.json()).then(res => console.log(res));
}

export default slider