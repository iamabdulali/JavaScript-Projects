let first_child = document.querySelector('.container').firstElementChild;
let second_child = first_child.nextElementSibling;


first_child.addEventListener('mouseover', () =>{
    first_child.style.width = '75%';
    second_child.style.width = '25%';
})

second_child.addEventListener('mouseover', () =>{
    first_child.style.width = '25%';
    second_child.style.width = '75%';
})
