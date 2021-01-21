function myNew(constructor, ...rest) {
  const obj = {};
  obj.__proto__ = constructor.prototype;
  const res = constructor.apply(obj, rest);
  return typeof res === "object" ? res : obj;
}

function Person(firtName, lastName) {
  this.firtName = firtName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return `${this.firtName} ${this.lastName}`;
};

const p1 = new Person("Kevin", "Chen");
console.log(p1);
console.log(p1 instanceof Person);

const p2 = myNew(Person, "Kevin", "Chen");
console.log(p2);
console.log(p2 instanceof Person);
