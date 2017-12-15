function _createDictionary (text, length) {
	var dictionary = {};

	for (i in text) {
		var letter = text[i];

		if (typeof dictionary[letter] == "undefined")	
			dictionary[letter] = {count: 1, frequency: 0};
		else
			dictionary[letter].count++;
	}

	// calculating the frequency of each word in the text
	for (i in dictionary) {
		dictionary[i].frequency = dictionary[i].count / length;
	}

	return dictionary;
}