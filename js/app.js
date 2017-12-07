// function RLE2(text) {

// 	var lastLetter = "";
// 	var letterCount = 1;
// 	var result = "";

// 	var step = 1;
// 	for (i = 0; i < text.length; i++) {

// 		var string = text.substring(i, step + i);

// 		if (string.length == step) {

// 			if (lastLetter == letter) {

// 				letterCount++;

// 			} else {
// 				result += _compressSequence(lastLetter, letterCount);

// 				lastLetter = letter;
// 				letterCount = 1;
// 			}
// 		}
// 	}

// 	result += _compressSequence(lastLetter, letterCount);


// 	return result;
// }


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


function compressText(input) {

	var field = $(input);
	var text = field.value;
	var length = text.length;

	var dictionary = _createDictionary(text, length);

	$(input + 'Entropy').innerText = entropy(dictionary, length);;
	$(input + 'RLE').innerText = RLE(text);
	$(input + 'Huffman').innerText = huffman(dictionary);
	
}

function initialize() {
	
	utils.addListener($('input1'), 'keyup', function () {
		compressText('input1');
	});

	utils.addListener($('input2'), 'keyup', function () {
		compressText('input2');
	});

	utils.addListener($('input3'), 'keyup', function () {
		compressText('input3');
	});

	utils.addListener($('input4'), 'keyup', function () {
		compressText('input4');
	});

	compressText('input1');
	compressText('input2');
	compressText('input3');
	compressText('input4');
}

utils.addListener(window, 'load', initialize);