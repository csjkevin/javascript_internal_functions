let len;

function swap(arr, i, j) {
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

function heapify(arr, i) {
	let left = 2 * i + 1;
	let right = 2 * i + 2;
	let largest = i;

	if (left < len && arr[left] > arr[largest]) {
		largest = left;
	}

	if (right < len && arr[right] > arr[largest]) {
		largest = right;
	}

	if (largest != i) {
		swap(arr, i, largest);
		heapify(arr, largest);
	}
}

function buildMaxHeap(arr) {
	len = arr.length;
	for (let i = Math.floor(len / 2); i >= 0; i--) {
		heapify(arr, i);
	}
}

function heapSort(arr) {
	let res = arr.slice();
	buildMaxHeap(res);

	for (let i = res.length - 1; i > 0; i--) {
		swap(res, 0, i);
		len--;
		heapify(res, 0);
	}

	return res;
}

let arr = [1, 4, 5, 2, 3, 6, 8];
console.log(arr);
console.log(heapSort(arr));