Function.prototype.myBind = function (thisArg) {
  if (typeof this !== "function") {
    return;
  }
  let self = this;
  let args = Array.prototype.slice.call(arguments, 1);
  let bound = function () {
    return self.apply(
      this instanceof self ? this : thisArg,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };
  let nop = function () {};
  if (this.prototype) {
    nop.prototype = this.prototype;
  }
  bound.prototype = new nop();
  return bound;
};

function foo(name) {
  this.name = name;
}

let obj = {};
let bar = foo.myBind(obj);
bar("Jack");
let alice = new bar("Alice");
console.log(obj.name);
console.log(alice.name);
