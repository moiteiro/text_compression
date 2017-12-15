

function huffman(dictionary) {

	_print = function (dictionary) {
		var result = ""
		for (i in dictionary) {
			result += dictionary[i].caracter + " = " + dictionary[i].huffman + "\n";
		}

		console.log(dictionary);
		return result;
	}


	// this function converts the dictionary to an array of objects.
	// this way, we can sort each letter by its frenquecy.
	_improvingDictionary = function(dictionary) {
		tmp_dic = [];

		for (i in dictionary) {

			// this is a langague safety measure to make sure I'm getting only the attributes
			// I created when was generated the dictionary.
			if (dictionary.hasOwnProperty(i)) {
				var obj = dictionary[i];
				obj.caracter = i;
				obj.huffman = "";
				tmp_dic.push(obj);
			}
		}

		// sorting and returning the new dictionary.
		return tmp_dic.sort(function (a, b) {
			if (a.count > b.count)
				return -1;
			if (a.count < b.count)
				return 1;
			return 0;
		})
	}

	dictionary = _improvingDictionary(dictionary);
	originalSize = dictionary.length;

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



