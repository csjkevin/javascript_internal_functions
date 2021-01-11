Array.prototype.myMap = function(callback, thisArg) {
	let arr = Array.prototype.slice.call(this);
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(callback.call(thisArg, arr[i], i, this));
	}
	return newArr;
}

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.myMap((el) => el * 2));