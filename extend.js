function extend(Child, Parent) {
	var F = function() {};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
}

function A() {}
A.prototype.a = function() {
	console.log("a!");
}

function B() {}

extend(B, A);

let b = new B();
b.a();