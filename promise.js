class Promise {
  constructor(fn) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    let resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
      }
    };
    let reject = (value) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = value;
      }
    };
    try {
      fn(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === "fulfilled") {
      onFulfilled();
    } else if (this.state === "rejected") {
      onRejected();
    }
  }
}
