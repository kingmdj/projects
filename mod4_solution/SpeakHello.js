(function(window) {

	var helloSpeaker = {};
	var speakWord = "Hello";

	helloSpeaker.speak = function (name) {
  		var speakGreeting = speakWord + " " + name
  		console.log(speakGreeting);
	};

	window.helloSpeaker = helloSpeaker;

})(window);