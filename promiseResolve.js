Promise.myResolve = function (value) {
  if (value instanceof Promise) {
    return value;
  }
  if (value === null) {
    return null;
  }
  if (typeof value === "object" || typeof value === "function") {
    try {
      let then = value.then;
      if (typeof then === "function") {
        return new Promise(then.call(value));
      }
    } catch (err) {
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
  }
  return value;
};
