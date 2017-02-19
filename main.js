'use strict';

window.onload = function() {

	var str, calc = document.querySelector('#calc');

	calc.addEventListener('click', function(e) {

		let letters = {};
		str = document.querySelector('#str').value;

		for (var i = 0; i < str.length; i++) {
			let letter = str[i];
			letters[letter] = letter in letters ? letters[letter] + 1 : 1;
		}
		insertResults(letters);
		setTimeout(clearClasses, 551);

	}, false);

};

function insertResults(letters) {
	var resultBox = document.querySelectorAll('.result > div');

	for (var i = 0; i < resultBox.length; i++) {
		let output = '', letter = resultBox[i].dataset.letter;

		resultBox[i].classList.remove('result__anim');
		resultBox[i].classList.add('result__anim', 'result__box');

		output += '<h3 class="result__letter">' + letter.toUpperCase() + '</h3><div class="result__count">';
		output += letter in letters ? ('Count: ' + letters[letter]) : 'There`s no matches :(';
		output += '</div>';

		resultBox[i].innerHTML = output;
	}
}

function clearClasses() {
	var resultBox = document.querySelectorAll('.result__anim');

	for (var i = 0; i < resultBox.length; i++) {
		resultBox[i].classList.remove('result__anim');
	}
}