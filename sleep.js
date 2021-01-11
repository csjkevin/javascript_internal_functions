function sleep(interval) {
	return new Promise(resolve => setTimeout(resolve, interval));
}

(async function() {
	console.log(Date.now());
	await sleep(1000);
	console.log(Date.now());
})();