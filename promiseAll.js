Promise.myAll = function(promises) {
	return new Promise(function(resolve, reject) {
		if (Array.isArray(promises)) {
			return;
		}
		let resolvedNum = 0;
		let totalNum = promises.length;
		let resolvedValues = new Array(totalNum);
		for (let i = 0; i < totalNum; i++) {
			(function(i) {
				Promise.resolve(promises[i]).then(function(res) {
					resolvedNum++;
					resolvedValues[i] = value;
					if (resolvedNum === totalNum) {
						return resolve(resolvedValues);
					}
				}, function(err) {
					return reject(err);
				})
			})(i)
		}
	})
}