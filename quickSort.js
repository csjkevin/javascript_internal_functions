function quickSort(arr) {
	let res = arr.slice();
	let sort = function(arr, begin, end) {
		if (begin < end) {
			let pivot = arr[begin];
			let i = begin;
			let j = end;
			while (i < j) {
				while (i < j && arr[j] > pivot) {
					j--;
				}
				if (i < j) {
					arr[i] = arr[j];
				}
				while (i < j && arr[i] < pivot) {
					i++;
				}
				if (i < j) {
					arr[j] = arr[i];
				}
			}
			arr[i] = pivot;
			sort(arr, begin, i - 1);
			sort(arr, i + 1, end);
		}
	}
	sort(res, 0, res.length - 1);
	return res;
}

let arr = [1, 5, 4, 2, 3, 6, 8];
console.log(arr);
console.log(quickSort(arr));