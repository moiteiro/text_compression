function entropy(dictionary, length) {
	var entropy = 0;

	for (letter in dictionary) {
		var frequency = dictionary[letter].frequency;
		entropy -= frequency * (Math.log(frequency) / Math.log(2));
	}

	return entropy;
}
