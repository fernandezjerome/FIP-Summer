const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-links')



const navSlide = () => {
  burger.addEventListener('click',() => {
  nav.classList.toggle('nav-active');
      
  });

}

navSlide();