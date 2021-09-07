// innerHeight = (which includes only the content not the toolbars or browser elements or height...Same for innerWidth)


const boxes = document.querySelectorAll('.box')




// we have to add a scroll Event listener on window object and calling a function checkBoxes() when the event fires


window.addEventListener('scroll', checkBoxes)


checkBoxes() // we are calling this function here because if we don't then the first 2 boxes won't show up..And because the boxTop value of 1st 2 boxes is < to 299.2 so they show up without having to scroll...


function checkBoxes() {



    // So here we are taking the innerHeight and dividing it to 5 and then multipying it to 4 we get 299.2...We can directly write 299.2 but when we does then it doesn't show us the last element so no idea why it is happening

    const triggerBottom = window.innerHeight / 5 * 4
    // const triggerBottom = 299.2




    // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport. Following is the info of 1st box...

    // bottom: 268
    // height: 200
    // left: 2074.5
    // right: 2474.5
    // top: 68
    // width: 400

    // So we are looping throught all the boxes so that we can get position of every box

    boxes.forEach(box => {

        // So here we are getting the top position of every box

        const boxTop = box.getBoundingClientRect().top;


        // And here we are saying that if the boxTop is less than the 299.2 which is the value of triggerBottom then add a class show to box otherwise remove that class

        if (boxTop < triggerBottom) {

            box.classList.add('show')

        } else {

            box.classList.remove('show')
        }

    })
}