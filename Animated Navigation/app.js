let nav = document.querySelector('#nav');
let toggle = document.querySelector('#toggle');
let ul = document.querySelectorAll('#list li a');
console.log(ul)


toggle.addEventListener('click', () =>{
    nav.classList.toggle('active');
});

ul.forEach(element=>{

    console.log(element)
    element.addEventListener('click', (e) =>{
        
        ul.forEach(btn=> {
                btn.classList.remove('bold');
                e.target.classList.add('bold');
         
        })
    })
})
