const faqs = document.querySelectorAll('.faq');

faqs.forEach(element => {
    element.addEventListener('click', () =>{
        element.classList.toggle('active')
    })
});