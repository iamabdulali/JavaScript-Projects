let counters = document.querySelectorAll('.counter'); // Here we are selecting all the div with class counter

let speed = 200; // This is how fast it reaches the target value.

counters.forEach(counter =>{  // Here we are looping through all the counter div elements and we are saying that for each counter div do the following:

  function ok() {
    
    const targetValue = +counter.getAttribute('data-target'); // here we are getting the data-target of each counter. So it return us a string. The (+) sign is used to convert string into a number and we are storing it in the targetValue. 
    
    const count = +counter.innerText; // Here we are getting the innerText of each counter div which is 0.
   
    const increment = targetValue / speed; // So here we are dividing the data-target value of each counter div by speed which 500. So it is incrementing it by the answer we get after dividing.

    if (count < targetValue) { // Here is condition that if the count value is less than the data-target then keep incrementing it.
      
      counter.innerText = Math.ceil(count + increment); // Here we are constantly changing the innerText value of each counter div which was 0 at the beginning. We are using the Math.ceil function to avoid float value. And We are adding the count and increment value

      setTimeout(ok, 1); // Here we are calling this ok function every 1 milisecond. We can also slow down the speed of counter if we increase the miliseconds
        
    } 
        else { // If the count value is not less than the targetValue it means that it is equal to it so in that case set the count value to whatever the targetValue is.
          
          count.innerText = targetValue; 
      
        }
  }
 
ok(); // Here we are simply calling our function.

})