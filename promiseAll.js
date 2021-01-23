Promise.myAll = function (promises) {
  if (!Array.isArray(promises)) {
    return;
  }
  let count = 0;
  let total = promises.length;
  let results = new Array(total);
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < total; i++) {
      Promise.resolve(promises[i]).then(
        (res) => {
          results[i] = res;
          count++;
          if (count === total) {
            resolve(resolvedValues);
          }
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};
