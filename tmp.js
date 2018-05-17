const alphabet = new Array(26)
	.fill(1)
	.map((_, i) => String.fromCharCode(65 + i));

console.log(alphabet);

const getAlphabetSlice = n => alphabet.slice(0, n);

console.log(getAlphabetSlice(3));

