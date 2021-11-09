Array.prototype.myShiftMethod = function () {
	if (this.length === 0) {
		return undefined;
	}

	let firstEl = this[0];
	for (let i = 0; i < this.length; i++) {
		this[i] = this[i + 1];
	}
	this.length = this.length - 1;
	return firstEl;
};

let arr = [10, 30, 50, 70, 39, 23, 12];
let shifted = arr.myShiftMethod();
console.log(arr, shifted);
