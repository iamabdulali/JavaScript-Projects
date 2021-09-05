const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');


textarea.focus()

textarea.addEventListener('keyup', (keypress) => {

    let valueOfTextArea = textarea.value;

    let splitValue = valueOfTextArea.split(',');

    // So when we put comma for spliting the array the it adds space as an element in the array like that ["1", ""] so we do not want that...To remove that space we are going to filter the array....

    let filterValue = splitValue.filter(index => index.trim());

    // The filter() method creates a new array with all elements that pass the test implemented by the provided function.

    // filter(index => index.trim() // this is the test

    // So the above line is triming that space. This is a function because we have only one line of code so that's why there are no curley braces around it...


    let mapValue = filterValue.map(space => space.trim());

    // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. map calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results

    // So now when we add comma the space doesn't show up thanks to filter...But if we add space without putting comma then it adds space like this ["1 ", " 2"]... So to remove it we are going to map the array. And we are creating a new array...

    // And this method can be done only in one line but for the sake of simplicity I have divided them into different variables...

    tagsEl.innerHTML = ""; // So here we are clearing the html of tag div so that we don't pile up every number. For example when we press 1 in the textarea the span tag is created and 1 is written on it but when we press 2 it separately create a span element which contains the text 12 and it is creating a new span element without comma being added...


    mapValue.forEach(element => { // here we are using a forEach loop on our array which we have filtered. If we dont use it then we can't separate the words... So this loop is creating span elements and adding 'tag' class to them and the text of the span element would be the text of that specific element until comma is pressed...In the end we are just appending the span tags in the tagEl div....

        let span = document.createElement('span');
        span.classList.add('tag');
        span.innerText = element;

        tagsEl.appendChild(span);


    })


    // So here we are looking for the key...Means that look for enter key if pressed then clear the textarea and call the randomClassSelect Function:

    if (keypress.key === 'Enter') {
        textarea.value = "";

        randomClassSelect();
    }

})




function randomClassSelect(params) {

    const times = 30; // This show how many times it will highlight each element before it stops...



    // The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds). The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.The ID value returned by setInterval() is used as the parameter for the clearInterval() method.

let interval = setInterval(() => {

        const randomTag = PickRandomTag(); // Here we are calling the PickRandomTag() function and storing its value in random Tag...

        highlightTag(randomTag); // Here we are passing the randomTag to highlight Tag function which highlight the random Tag

       
        // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds. The function is only executed once. If you need to repeat execution, use the setInterval() method. So the below function is running after 100ms and then stop and because it is in set interval so it runs again...
       
        setTimeout(() => {

            UnhighlightTag(randomTag)


        }, 100);


}, 100);


// IN the interval part we were highlighting and unhightling each element after a certain time but we need to stop that and choose one element...So the below part is just doing that


    setTimeout(() => {
        clearInterval(interval);  // Here we are stoping the interval function


        setTimeout(() => {
            const randomTag = PickRandomTag();

            highlightTag(randomTag);

        }, 100);

    }, times * 100); 
    
    // SO this function will run after 3 seconds and when it run it will highlight a random tag

}

function PickRandomTag(params) {

    const allTags = document.querySelectorAll('.tag'); 

    return allTags[Math.floor(Math.random() * allTags.length)] // So basically allTags return us a nodeList which is similar to an array with an index so we are basically randomly selecting the tag...This is only thing which I can't seem to understand...I think it is changing their indexes if i am not wrong
}


    

// just a simple function to highlight the tag

function highlightTag(tag) {
    if(tag !== undefined){
    tag.classList.add('highlight'); 
    
}
}
// just a simple function to unhighlight the tag

function UnhighlightTag(tag) {
    if(tag !== undefined){
    tag.classList.remove('highlight');
}
}