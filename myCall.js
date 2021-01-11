function myCall(thisArg, ...args) {
	if (typeof thisArg === 'undefined' || thisArg === null) {
		thisArg = window;
	}
	let tempKey = Symbol();
	thisArg[tempKey] = this;
	let res = thisArg[tempKey] (...args);
	delete thisArg[tempKey];
	return res;
}