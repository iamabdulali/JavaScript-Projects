const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const circle = document.querySelector('.circle');
const container = document.querySelector('.container');
const navItems = document.querySelectorAll('nav ul li');



openBtn.addEventListener('click', () => {

circle.style.transform = 'rotate(-70deg)';
container.style.transform = 'rotate(-20deg)';   

navItems.forEach(element =>{
    element.style.transform = 'translateX(0%)';
})
})

closeBtn.addEventListener('click', () => {

    circle.style.transform = 'rotate(0deg)';
    container.style.transform = 'rotate(0deg)';   
    
    navItems.forEach(element =>{
        element.style.transform = 'translateX(-100%)';
    })
    })