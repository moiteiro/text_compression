function Huffman() {}

function _compressSequence(lastLetter, letterCount) {
	if (letterCount > 3) {
		
		return "!" + lastLetter + letterCount;
		
	} else {
		// cheat
		return Array(letterCount + 1).join(lastLetter);
	}
}

function RLE2(text) {

	var lastLetter = "";
	var letterCount = 1;
	var result = "";

	var step = 1;
	for (i = 0; i < text.length; i++) {

		var string = text.substring(i, step + i);

		if (string.length == step) {

			if (lastLetter == letter) {

				letterCount++;

			} else {
				result += _compressSequence(lastLetter, letterCount);

				lastLetter = letter;
				letterCount = 1;
			}
		}
	}

	result += _compressSequence(lastLetter, letterCount);


	return result;
}

function RLE(text) {

	var lastLetter = "";
	var letterCount = 1;
	var result = "";

	for (l in text) {
		var letter = text[l];

		
		if (lastLetter == letter) {
			letterCount++;

		} else {

			result += _compressSequence(lastLetter, letterCount);

			lastLetter = letter;
			letterCount = 1;
		}
	}

	result += _compressSequence(lastLetter, letterCount);

	return result;
}

function calculateEntropy(dictionary, length) {
	var entropy = 0;

	for (letter in dictionary) {
		var frequency = dictionary[letter].frequency;
		entropy -= frequency * (Math.log(frequency) / Math.log(2));
	}

	return entropy;
}


function _createDictionary (text, length) {
	var dictionary = {};

	for (i in text) {
		var letter = text[i];

		if (typeof dictionary[letter] == "undefined")	
			dictionary[letter] = {count: 1, frequency: 0};
		else
			dictionary[letter].count++;
	}

	// calculating percentage of each word in the text
	for (i in dictionary) {
		dictionary[i].frequency = dictionary[i].count / length;
	}

	return dictionary;
}


function compressInupt(input) {

	var field = $(input);
	var text = field.value;
	var length = text.length;

	var dictionary = _createDictionary(text, length);

	$(input + 'Entropy').innerText = calculateEntropy(dictionary, length);;
	$(input + 'RLE').innerText = RLE(text);
}

function initialize() {
	
	utils.addListener($('input1'), 'keyup', function () {
		compressInupt('input1');
	});
	compressInupt('input1');
}

utils.addListener(window, 'load', initialize);