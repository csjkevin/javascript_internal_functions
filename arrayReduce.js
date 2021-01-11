Array.prototype.myReduce = function(callback, initialValue) {
	let arr = Array.prototype.slice.call(this);
	let res = initialValue ? initialValue : arr[0];
	let startIndex = initialValue ? 0 : 1;
	for (let i = startIndex; i < arr.length; i++) {
		res = callback.call(null, res, arr[i], i, this);
	}
	return res;
}

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.myReduce((a, b) => a + b));