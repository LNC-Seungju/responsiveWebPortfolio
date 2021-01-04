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
const header = document.getElementsByClassName('header-container');
const Top = document.documentElement.offsetTop;
window.addEventListener('scroll', ()=>{
  if(scrollY>Top+500) {
    header[0].classList.add('sticky');
  }
  else {
    header[0].classList.remove('sticky');
  }
})

const mobileHeader = document.getElementsByClassName('mobile-header');
window.addEventListener('scroll', ()=> {
  if(scrollY>Top+500) {
    mobileHeader[0].classList.add('sticky');
  }
  else {
    mobileHeader[0].classList.remove('sticky');
  }
})
const mobileTrigger = document.getElementsByClassName('mobile-trigger');
const mobileSubmenu = document.getElementsByClassName('mobile-submenu');
const submenuBlog = document.getElementsByClassName('submenu-blog');

mobileTrigger[0].addEventListener('click', ()=> {
  mobileHeader[0].classList.toggle('active');
})

submenuBlog[0].addEventListener('click', ()=> {
  submenuBlog[0].classList.toggle('active');
})