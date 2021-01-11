function myInstanceOf(a, b) {
	if (typeof a !== 'object' || a === null) {
		return false;
	}
	let currentPrototype = a.__proto__;
	while (currentPrototype !== null) {
		if (currentPrototype === b.prototype) {
			return true;
		}
		currentPrototype = currentPrototype.__proto__;
	}
	return false;
}

console.log(myInstanceOf(new Array(), Array));
console.log(myInstanceOf(new Array(), Object));