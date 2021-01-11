function debounce(fn, interval) {
	let timer = null;
	return function() {
		if (timer !== null) {
			clearTimeout(timer);
		}
		timer = setTimeout(fn, interval);
	}
}