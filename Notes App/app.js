// Selectors
let title = document.querySelector('#title');
let date = document.querySelector('#date');
let notes = document.querySelector('#addtxt');
let submitBtn = document.querySelector('#addbtn');
let new_notes = document.querySelector('#notes');
let empty_notes = document.querySelector('#empty-notes');
let search = document.querySelector('#search-txt');

// Event Listeners

new_notes.addEventListener('click', deleteItems);

new_notes.addEventListener('click', bookmarkItems);


submitBtn.addEventListener('click', function (e) {

    let valOfTitle = title.value;
    let valOfDate = date.value;
    let valOfNotes = notes.value;

    if(valOfNotes.length >= 2 && valOfTitle.length >= 2 && valOfDate !=''){
        let new_card = `<div class="card" style="width: 18rem; margin: 0em 1em 1em 0em; padding:1em" >
  
        <h5 class="card-title">${valOfTitle}</h5>
        <h6 class="card-date">${valOfDate}</h6>
        <p class="card-text">${valOfNotes}</p>
        <a id = 'delete' class="delete btn btn-primary">Delete Note</a>
        <button id='bookmark' class="bookmark btn btn-primary" style="margin: 1em 0em 0em 0em">Bookmark Note</button>
    
    </div>`;
    
  new_notes.insertAdjacentHTML('beforeend',new_card);
  empty_notes.innerHTML = "";


    }

    else{
        alert("Make sure text is at least 2 characters long and date value cannot be empty")
    }


 

  
});

// Search Filter

search.addEventListener('keyup', function (params) {
    let valOfSearch = search.value.toUpperCase();
    let cards = document.querySelectorAll('.card');
    let card_title = document.querySelectorAll('.card .card-title');
    
    for (let i = 0; i < card_title.length; i++) {
        const element = card_title[i].innerText.toUpperCase();
        if (element.indexOf(valOfSearch) > -1) {
            cards[i].style.display = '';
        }

        else{
            cards[i].style.display = 'none';
        }
        
        
    }
})




// Functions
function deleteItems(e){
    const item = e.target;
    if(item.classList[0] === 'delete'){
        const card = item.parentElement;
        card.remove();
        
    }
}


function bookmarkItems(e){
    const item = e.target;
    if(item.classList[0] === 'bookmark'){
        const card = item.parentElement;
        card.classList.toggle('card-border');

    }
}
