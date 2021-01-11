Array.prototype.myReduce = function(callback, initialValue) {
	let res = initialValue ? initialValue : this[0];
	let startIndex = initialValue ? 0 : 1;
	for (let i = startIndex; i < this.length; i++) {
		res = callback.call(null, res, this[i], i, this);
	}
	return res;
}

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.myReduce((a, b) => a + b));