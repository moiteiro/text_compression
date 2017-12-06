

function huffman(dictionary) {

	_print = function (dictionary) {
		var result = ""
		for (i in dictionary) {
			result += dictionary[i].caracter + " = " + dictionary[i].huffman + "\n";
		}

		console.log(dictionary);
		return result;
	}

	_improvingDictionary = function(dictionary) {
		table = [];

		for (i in dictionary) {

			// this is a langague safety measure to make sure I'm getting only the attributes
			// I created when was generating the dictionary.
			if (dictionary.hasOwnProperty(i)) {
				var obj = dictionary[i];
				obj.caracter = i;
				obj.huffman = "";
				table.push(obj);
			}
		}

		// ordering new dictionary
		return table.sort(function (a, b) {
			if (a.count > b.count)
				return -1;
			if (a.count < b.count)
				return 1;
			return 0;
		})
	}


	// Adpating dictionary for new usage.
	// Before we had a object where every letter in the dictionary was a object.
	// Now we have a array of object, this way we can order accordingly with the percentage
	dictionary = _improvingDictionary(dictionary);
	originalSize = dictionary.length;

	var totalPercentage = 0;
	var letterCode = "1";


	for(i in dictionary) {

		if (i < originalSize - 1)
			dictionary[i].huffman = letterCode;
		else
			dictionary[i].huffman = Array(parseInt(i) + 1).join("0");

		letterCode = "0" + letterCode;
	}
	
	return _print(dictionary);
}



