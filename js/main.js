(() => {
	console.log("javascript linked up");

	var keyValuesPairs = {  
	// Defines an object which will store a element ID as a key and a song url for the associative value
		audioOne: 'audio/guitar.mp3', 
		audioTwo: 'audio/guitar2.mp3',
		audioThree: 'audio/guitar3.mp3', 
		audioFour: 'audio/drum.mp3', 
		audioFive: 'audio/rock_drums.mp3',
		audioSix: 'audio/drum_beats.mp3',
		audioSeven: 'audio/bass.mp3',
		audioEight: 'audio/bass2.mp3',
		audioNine: 'audio/bass_guitar.mp3'
	};

	// define the audio player and set it to undefined
	var audioPlayer = [];

	// if someone clicks on the reset button then check if the music player is defined pause it
	document.getElementById('resetButton').addEventListener('click', function () {
		// if audio player has some music inside of it, then go through each music piece it has and pause them all
		if (!!audioPlayer.length) {
			for(let i = 0; i < audioPlayer.length; i++) {
				audioPlayer[i].pause()
			}
			// Then reset the audio into a empty array
			audioPlayer = []
		}
	})

	// for each img add a drag start listener which sets the transfer data to the element id so we can use it to retrieve the url from the object
	document.querySelectorAll('img').forEach(img => {
		img.addEventListener("dragstart", function (e) {
			e.dataTransfer.setData('text', e.target.id)
			console.log('dragging has started');
		});
	})

	document.getElementById('dropZone').addEventListener("dragover", function (e) {
		e.preventDefault();
		console.log('there is something over me!');
	});

	// Listen for the drop event on the dropZone
	document.getElementById('dropZone').addEventListener("drop", function (e) {
		e.preventDefault();
		console.log('you dropped some sick beats on me');

		// if (!!audioPlayer) { // If the audio player is already defined then pasuse it, we do this so when a user drags another song over we want to stop it before it plays
		// 	audioPlayer.pause();
		// }

		let musicID = e.dataTransfer.getData("text"); // get the id
		
		
		let musicPlayer = new Audio(keyValuesPairs[musicID]);
		

		musicPlayer.play(); // Play the the music

		audioPlayer.push(musicPlayer);
	});
})();