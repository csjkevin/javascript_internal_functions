function merge(a, b) {
	let res = [];
	while (a.length > 0 && b.length > 0) {
		if (a[0] <= b[0]) {
			res.push(a.shift());
		} else {
			res.push(b.shift());
		}
	}
	if (a.length > 0) {
		res = res.concat(a);
	}
	if (b.length > 0) {
		res = res.concat(b);
	}
	return res;
}

function mergeSort(arr) {
	let len = arr.length;
	if (len < 2) {
		return arr;
	}
	let mid = Math.floor(len / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
}

let arr = [1, 5, 4, 2, 3, 6, 8];
console.log(arr);
console.log(mergeSort(arr));