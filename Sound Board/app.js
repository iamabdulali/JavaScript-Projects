// Below is an array of all the sounds...Basically we are making an array of all the id's of the audio tag...

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']


// Here we are running a forEach loop on the sounds array and we are saying that for each sound or should I say that for each audio tag make a button element and give it the class of btn and add the respective innerText to it...



sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound


    // Here are adding a event listener on each button that whenever a button is clicked stop the song and get the audio tag and add method play to it play.

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play() // The play() method starts playing the current audio or video.
    })


    // Here we are appending all our buttons in the buttons div...

    document.getElementById('buttons').appendChild(btn)
})




function stopSongs() {

    sounds.forEach(sound => { // Again using a for each loop on sounds array 
        const song = document.getElementById(sound); // here we are getting all the audio tags and storing them in a variable called song...

        song.pause() // Use the pause() method to pause the current audio/video.
        song.currentTime = 0; // The currentTime property sets or returns the current position (in seconds) of the audio/video playback. When setting this property, the playback will jump to the specified position.
    })
}


