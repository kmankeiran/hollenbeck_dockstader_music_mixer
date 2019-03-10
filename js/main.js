(() => {
	console.log("javascript linked up");

	var keyValuesPairs = {  
	// Defines an object which will store a element ID as a key and a song url for the associative value
		audioOne: 'audio/something_just_like_this.mp3', 
		audioTwo: 'audio/adventure.mp3',
		audioThree: 'audio/epic.mp3', 
		audioFour: 'audio/breaking_silence.mp3', 
		audioFive: 'audio/shape_of_you.mp3'
	};

	// define the audio player and set it to undefined
	var audioPlayer;

	// if someone clicks on the reset button then check if the music player is defined pause it
	document.getElementById('resetButton').addEventListener('click', function () {
		if (!!audioPlayer) {
			audioPlayer.pause();
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

		if (!!audioPlayer) { // If the audio player is already defined then pasuse it, we do this so when a user drags another song over we want to stop it before it plays
			audioPlayer.pause();
		}

		let musicPieceID = e.dataTransfer.getData("text"); // get the id

		audioPlayer = new Audio(keyValuesPairs[musicPieceID]); // create a new audio object using the url from the key value pairs object
		audioPlayer.play(); // Play the the music

	});
})();