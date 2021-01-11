function debounce(fn, interval) {
	let timer = null;
	return function() {
		if (timer !== null) {
			clearTimeout(timer);
		}
		setTimeout(fn, interval);
	}
}