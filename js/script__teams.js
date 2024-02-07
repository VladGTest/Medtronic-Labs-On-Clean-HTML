const hamburger = document.querySelector('.header__hamburger');
const headerMenu = document.querySelector('.header__nav');
const headerWrapper = document.querySelector('.header__wrapper');
const teamsCards = document.querySelectorAll('.team-section__list-card');
const overviewsCards = document.querySelectorAll('.team-overview__list-card');
const overlayTeamCard = document.querySelector('.overlay');
const closeOverlayTeamCard = document.querySelector('.team-card-overlay__right-panel-close');



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

for(let i = 0; i < teamsCards.length;i++){
    teamsCards[i].addEventListener('mouseenter',()=>{
        if(teamsCards[i].getElementsByClassName('team-section__list-card-image')[0] != null){
            teamsCards[i].getElementsByClassName('team-section__list-card-image')[0].classList.add('active');
        }
        teamsCards[i].getElementsByClassName('team-section__list-card-name-proff')[0].style.color = "#2514be";
        teamsCards[i].getElementsByClassName('team-section__list-card-name-full-name')[0].style.color = "#2514be";
        teamsCards[i].getElementsByClassName('team-section__list-card-icons-links-link')[0].getElementsByTagName('path')[0].classList.add('active');
        teamsCards[i].getElementsByClassName('team-section__list-card-icons-plus')[0].getElementsByTagName('path')[0].classList.add('active');
        teamsCards[i].getElementsByClassName('team-section__list-card-icons-plus')[0].getElementsByTagName('path')[1].classList.add('active');

    });
    teamsCards[i].addEventListener('mouseleave',()=>{
        if(teamsCards[i].getElementsByClassName('team-section__list-card-image')[0] != null){
            teamsCards[i].getElementsByClassName('team-section__list-card-image')[0].classList.remove('active');
        }
        teamsCards[i].getElementsByClassName('team-section__list-card-name-proff')[0].style.color = "black";
        teamsCards[i].getElementsByClassName('team-section__list-card-name-full-name')[0].style.color = "black";
        teamsCards[i].getElementsByClassName('team-section__list-card-icons-links-link')[0].getElementsByTagName('path')[0].classList.remove('active');
        teamsCards[i].getElementsByClassName('team-section__list-card-icons-plus')[0].getElementsByTagName('path')[0].classList.remove('active');
        teamsCards[i].getElementsByClassName('team-section__list-card-icons-plus')[0].getElementsByTagName('path')[1].classList.remove('active');
    });

    teamsCards[i].getElementsByClassName('team-section__list-card-icons-plus')[0].addEventListener('click',()=>{
        overlayTeamCard.classList.add('active');
    });
}

for(let i = 0; i < overviewsCards.length;i++){
    overviewsCards[i].addEventListener('mouseenter',()=>{
        if(overviewsCards[i].getElementsByClassName('team-overview__list-card-image')[0] != null){
            overviewsCards[i].getElementsByClassName('team-overview__list-card-image')[0].classList.add('active');
        }
        overviewsCards[i].getElementsByClassName('team-overview__list-card-name-proff')[0].style.color = "#2514be";
        overviewsCards[i].getElementsByClassName('team-overview__list-card-name-full-name')[0].style.color = "#2514be";
        overviewsCards[i].getElementsByClassName('team-overview__list-card-icons-links-link')[0].getElementsByTagName('path')[0].classList.add('active');
       

    });
    overviewsCards[i].addEventListener('mouseleave',()=>{
        if(overviewsCards[i].getElementsByClassName('team-overview__list-card-image')[0] != null){
            overviewsCards[i].getElementsByClassName('team-overview__list-card-image')[0].classList.remove('active');
        }
        overviewsCards[i].getElementsByClassName('team-overview__list-card-name-proff')[0].style.color = "black";
        overviewsCards[i].getElementsByClassName('team-overview__list-card-name-full-name')[0].style.color = "black";
        overviewsCards[i].getElementsByClassName('team-overview__list-card-icons-links-link')[0].getElementsByTagName('path')[0].classList.remove('active');
    });
}



closeOverlayTeamCard.addEventListener('click',()=>{
    overlayTeamCard.classList.remove('active');
});

