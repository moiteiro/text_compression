function compressText(input) {

	var field = $(input);
	var text = field.value;
	var length = text.length;

	var dictionary = _createDictionary(text, length);

	$(input + 'Entropy').innerText = entropy(dictionary, length);;
	$(input + 'RLE').innerText = RLE(text);
	$(input + 'Huffman').innerText = huffman(dictionary);
}

function readFile(evt) {

	var f = evt.target.files[0]; 

	if (f) {
		var r = new FileReader();
		r.onload = function(e) { 
			var contents = e.target.result;
			$('input4').value = contents;
			compressText('input4');
		}
		r.readAsText(f);
	}
}

function initialize() {
	utils.addListener($('file'), 'change', readFile);
	
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