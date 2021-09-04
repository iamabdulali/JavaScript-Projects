let panel = document.querySelectorAll('.panel');

panel.forEach(element =>{
    element.addEventListener('click',(e)=>{
        
        panel.forEach(btn =>{
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
    })
})