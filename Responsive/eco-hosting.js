const slideItems = document.getElementsByClassName('slide-items');
const slideItem = document.getElementsByClassName('slide-item');
const slidePrev = document.getElementsByClassName('slide-prev');
const slideNext = document.getElementsByClassName('slide-next');
let slideLength = slideItem.length;
let currentIndex = 1;
slide(currentIndex)
function slide(index) {
  slideItems[0].style.transform = 'translateX('+ -20*index +'%)';
}

slidePrev[0].addEventListener('click', ()=> {
  slideItems[0].style.transition = '0.3s';
  slide(currentIndex-1);
  currentIndex-=1;
  if(currentIndex==0) {
    setTimeout(()=> {
      slideItems[0].style.transition  = '0s';
      slide(slideLength-2)
      currentIndex = slideLength-2;
    }, 10)
  }
})
slideNext[0].addEventListener('click', ()=> {
  slideItems[0].style.transition = '0.3s';
  slide(currentIndex+1);
  currentIndex+=1;
  if(currentIndex==slideLength-1) {
    slide(slideLength-1)
    setTimeout(()=> {
      slideItems[0].style.transition  = '0s';
      slide(1)
      currentIndex = 1;
    },101 )
  }
})


const header = document.getElementsByClassName('header-container');

window.addEventListener('scroll', ()=> {
  if(scrollY>500) {
    header[0].classList.add('setPosition')
    setTimeout(()=>{
      header[0].classList.remove('setPosition');
      header[0].classList.add('fix');
    }, 500)
  }
  else { 
    header[0].classList.remove('fix');
    header[0].classList.remove('setPosition');
  }
})