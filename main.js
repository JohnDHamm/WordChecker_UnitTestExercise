"use strict";

// Now that the test suite exists, write a simple application to implement the functionality.

// In an HTML file, have two elements: a textarea and a button.
// When the button is clicked, extract the contents of the textarea and validate it against the following rules.
// There should only be alphanumeric characters in the text. No special characters like $%^&*.
// No duplicate words allowed.
// Word count should be less than 100.

let warningArea = $("#warning");

$("button").click(function() {
	let stringInput = $("#textInput").val();
	if (checkWordCount(stringInput) === false) {
		warningArea.append("<p>Please do not go over 100 words.</p>");
	};
	if (duplicateCheck(stringInput) === false) {
		warningArea.append("<p>Please do not use duplicate words.</p>");
	};
	if (verifyAlphaNumeric(stringInput) === false) {
		console.log("no non-alphanumerics!");
		warningArea.append("<p>Please do not use non-alphanumeric characters.</p>");
	}
});






let checkWordCount = function(string){
	let wordArray = string.split(" ");
	console.log("wordArray length", wordArray.length);
	if (wordArray.length > 99) {
		return false;
	}
};


let duplicateCheck = function(string) {
	let wordArray = string.split(" ");
	for (var i = 0; i < wordArray.length; i++) {
		let currentWord = wordArray[i];
		// console.log("currentWord", currentWord);
		for (let j = i + 1; j < wordArray.length; j++){
			// console.log("next word", wordArray[j]);
			if (currentWord === wordArray[j]){
				return false;
			}
		}
	}
};


let verifyAlphaNumeric = function(string) {
	if (string.search(/[^A-Z a-z 0-9]/) !== -1) {
		console.log("please use only letters and numbers!");
		return false;
	}
};