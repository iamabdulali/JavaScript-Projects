let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input', (params) => {
    let valueOfInput = numberInput.value;

    // Using Fetch Method

    fetch(`http://numbersapi.com/${valueOfInput}`)
    .then((response)=>{
      return response.text();
    })
    .then((data)=>{
        fact.style.display = 'block';
        factText.innerHTML = data;
    })
    .catch((error)=>{
        console.log('Error');
    })


// Using Older Method AJAX

//     let xhr = new XMLHttpRequest();

// xhr.onload = function (params) {
//     if(this.status == 200 && valueOfInput !='') {
//         fact.style.display = 'block';
//         factText.innerHTML = this.responseText;
//     }
// }


//     xhr.open('GET',`http://numbersapi.com/${valueOfInput}`,true);
//     xhr.send();
})