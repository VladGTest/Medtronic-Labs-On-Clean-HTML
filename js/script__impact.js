const hamburger = document.querySelector('.header__hamburger');
const headerMenu = document.querySelector('.header__nav');
const headerWrapper = document.querySelector('.header__wrapper');

hamburger.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    if(headerMenu.classList.contains('active')){
        headerWrapper.style.backgroundColor = 'white';
        document.body.style.overflow = "hidden";
    }   
    else{
        document.body.style.overflow = "auto";
        headerWrapper.style.backgroundColor = 'transparent';
    }
});