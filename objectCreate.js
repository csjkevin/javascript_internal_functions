function myCreate(obj) {
	function F() {};
	F.prototype = obj;
	return new F();
}

let a = {name: "Kevin"};
let b = myCreate(a);
console.log(b);
console.log(b.name);