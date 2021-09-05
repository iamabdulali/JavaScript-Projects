const filter = document.querySelector('#filter');
const list = document.querySelector('#result');
const load = document.querySelector('#load');



async function getData(params) {
    let url = `https://randomuser.me/api?results=50`;

 const response = await fetch(url);
 return response.json();
}

getData().then((response)=>{
    load.style.display = 'none';
    let results = response.results;
    let list_items = '';

    results.forEach(element => {
        let user_img = element.picture.medium;
        let first_name = element.name.first;
        let last_name = element.name.last;
        let city = element.location.city;
        let country = element.location.country;
     
        list_items +=`
        <li class = "list-item">
            <img src="${user_img}" alt="${first_name} ${last_name}">
            <div class="user-info">
                <h4>${first_name} ${last_name}</h4>
                <p>${city}, ${country}</p>
            </div>
        </li>`

    
    });

    list.insertAdjacentHTML('beforeend',list_items)

  
})


filter.addEventListener('input', (e)=>{
    let filterValue = e.target.value.toUpperCase();
    let list_item = document.querySelectorAll('.list-item');
    
    list_item.forEach(element =>{
        let detailsOfUser = element.innerText.toUpperCase();
  
        if(detailsOfUser.indexOf(filterValue) > -1){
            element.style.display = '';
        }

        else{
            element.style.display = 'none';
        }
    })
    

})
