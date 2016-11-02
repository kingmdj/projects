(function(window) {

	var byeSpeaker = {};
	var speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {
  		var speakGreeting = speakWord + " " + name
  		console.log(speakGreeting);
  	};
	window.byeSpeaker = byeSpeaker;

}) (window);