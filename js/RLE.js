function RLE(text) {

	_compressSequence = function(lastLetter, letterCount) {
		if (letterCount > 3) {
			
			return "!" + lastLetter + letterCount;
			
		} else {
			// cheat
			return Array(letterCount + 1).join(lastLetter);
		}
	}


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

