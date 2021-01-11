Array.prototype.inPlaceReverse = function() {
	let l = this.length;
	for (let i = 0; i < l / 2; i++) {
		let tmp = this[i];
		this[i] = this[l - i - 1];
		this[l - i - 1] = tmp;
	}
}

arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.inPlaceReverse();
console.log(arr);

arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
arr.inPlaceReverse();
console.log(arr);