Array.prototype.myMap = function(callback, thisArg) {
	let newArr = [];
	for (let i = 0; i < this.length; i++) {
		newArr.push(callback.call(thisArg, this[i], i, this));
	}
	return newArr;
}

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.myMap((el) => el * 2));