//  Slide Function, Button Interaction
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
    }, 301)
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
    },301 )
  }
})

// Header Interaction

const header = document.getElementsByClassName('header-container');
const pcHeaderBlank = document.getElementsByClassName('pc-header-blank');

window.addEventListener('scroll', ()=> {
  if(scrollY>500) {
    pcHeaderBlank[0].classList.add('fill');
    header[0].classList.add('setPosition')
    setTimeout(()=>{
      pcHeaderBlank[0].classList.remove('fill');
      header[0].classList.remove('setPosition');
      header[0].classList.add('fix');
      window.clearTimeout();
    }, 500)
  }
  else { 
    pcHeaderBlank[0].classList.remove('fill');
    header[0].classList.remove('fix');
    header[0].classList.remove('setPosition');
  }
})

// Mobile Header Interaction

const mobileTrigger = document.getElementsByClassName('mobile-trigger');
const mobileSubmenu = document.getElementsByClassName('mobile-submenu');
const mobileHeader = document.getElementsByClassName('mobile-header');
const mobileHeaderBlank = document.getElementsByClassName('mobile-header-blank');
const submenuBlog = document.getElementsByClassName('submenu-blog');

mobileTrigger[0].addEventListener('click', ()=> {
  mobileHeader[0].classList.toggle('active');
})

submenuBlog[0].addEventListener('click', ()=> {
  submenuBlog[0].classList.toggle('active');
})

window.addEventListener('scroll', ()=> {
  if(scrollY == 0) {
    mobileHeader[0].classList.remove('fix');
  }
  if(scrollY>500) {
  mobileHeaderBlank[0].classList.add('fill');
  mobileHeader[0].classList.add('setPosition')
    setTimeout(()=>{
      mobileHeaderBlank[0].classList.add('fill');
      mobileHeader[0].classList.remove('setPosition');
      mobileHeader[0].classList.add('fix');
    }, 500)
  }
  else { 
    mobileHeaderBlank[0].classList.remove('fill');
    mobileHeader[0].classList.remove('fix');
    mobileHeader[0].classList.remove('setPosition');
  }
})