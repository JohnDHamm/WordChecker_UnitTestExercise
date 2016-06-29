"use strict";

let checkWordCount = function(string){
	let wordArray = string.split(" ");
	console.log("wordArray", wordArray);
	if (wordArray.length > 99) {
		return false;
	}
};


let duplicateCheck = function(string) {
	let wordArray = string.split(" ");
	for (var i = 0; i < wordArray.length; i++) {
		let currentWord = wordArray[i];
		console.log("currentWord", currentWord);
		for (let j = i + 1; j < wordArray.length; j++){
			console.log("next word", wordArray[j]);
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
