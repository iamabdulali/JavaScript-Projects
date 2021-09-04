const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;
console.log('First',currentActive)
next.addEventListener('click', () => {
    currentActive++
   
    update()
})

prev.addEventListener('click', () => {
    currentActive--

    update()
})


function update() {
    circles.forEach((circle, idx) => {
     
        if(idx < currentActive) { 
            circle.classList.add('active')
        
        } 
        else {
            circle.classList.remove('active')
           
        }
    })


// LOGIC BEHIND THE UPDATE FUNCTION

/* So basically idx values are 0,1,2,3 and currentActive values are 1,2,3,4...Current Active values are starting from 1...So we have applied a forEach loop on the all the circle elements which doing the following:

1) This is for the if part 

    It is comparing the idx (index value it is feature of ForEach Loop) value with the currentActive value and if it is smaller then it will add active class to that specific circle...


2) This is for the else part

   If the values of idx are greater then currentActive then it is going to and remove the active class from that circle...      


*/




    const actives = document.querySelectorAll('.active')


    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%' 

    // This is how we are going to get the value of progress bar

    // Length of actives = 2; (When We click the next button for the first time)
    // Length of Circles = 4;
  
    // (2-1) / (4-1) *100 + % = 33.33% 

    if(currentActive === 1) {
        prev.disabled = true
    } 
    
    else if(currentActive === circles.length) {
        next.disabled = true
    } 
    else {
        prev.disabled = false
        next.disabled = false
    }
}
