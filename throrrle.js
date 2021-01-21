function throttle(fn, interval) {
  let last = Date.now();
  return function () {
    let now = Date.now();
    if (now - last >= interval) {
      fn.apply(this, arguments);
      last = Date.now();
    }
  };
}
