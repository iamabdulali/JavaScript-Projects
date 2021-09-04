let title = document.querySelectorAll('.accordion-button').innerText;
let news = document.querySelectorAll('.accordion-body').innerText;
let insert = document.querySelector('#insert');


// async function getDataWithFetch() {
//     const url = 'https://newsapi.org/v2/top-headlines/sources?apiKey=52d6ec573b5d4c0180b8ec14a80cc816';
//     const response = await fetch(url);
//     return response.json();
//   }
  
//   getDataWithFetch().then(response => {
    



//     let myObj = response.sources;

//     console.log(myObj)
// myObj.forEach((element,index)=>  {
  

//   let html ='';

//   html += ` <h2 class="accordion-header" id="headingOne">
//            <button id="btn-one" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
//             ${element.name}
//            </button>
//          </h2>
//          <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//          <div id="news" class="accordion-body">
//          ${element.description}
//           </div>
//         </div>
//       </div>`
//       insert.insertAdjacentHTML('afterend',html)


// });
    
    

//   });

  










  let xhr = new XMLHttpRequest();


xhr.onload = function (params) {
    if(this.status == 200){
      let myObj = JSON.parse(this.responseText);
      let source = myObj.sources;
      console.log(source)


  source.forEach((element,index)=>  {
    
  
    let html ='';
  
    html += ` <h2 class="accordion-header" id="headingOne">
             <button id="btn-one" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
              ${element.name}
             </button>
           </h2>
           <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
           <div id="news" class="accordion-body">
           ${element.description}
            </div>
          </div>
        </div>`
        insert.insertAdjacentHTML('beforeend',html)
  
    })
}
}
xhr.open('GET','https://newsapi.org/v2/top-headlines/sources?apiKey=52d6ec573b5d4c0180b8ec14a80cc816',true);

xhr.send();