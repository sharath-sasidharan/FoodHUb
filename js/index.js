//sticky header

// ES6 CONCEPTS
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >0)

});

//scroll-to-top
  window.addEventListener('scroll', () => {
    var scroll= document.querySelector('.scrollTop');
    scroll.classList.toggle('active', window.scrollY > 500);
  });


//This Functionality used to go to top of the window with smooth scrolling effect 

  function scrollToTop(){
    window.scrollTo({
      top:0,
      behavior: 'smooth'  

     
    })
  }


// Menu-toggle && navigation menus Toggle Functionality used here

  function toggleMenu() {
        const menutoggle = document.querySelector('.menu-toggle');
        const navigation = document.querySelector('.navigation');
        menutoggle.classList.toggle('active');
        navigation.classList.toggle('active');
      }