// -------------------------- Home work --------------------------
// -------------------------- Дорошенко Никита Андреевич --------------------------

// This. Задачи.

// #1
const rectangle = {
	width: 10,
	heigth: 50,
	getSquare: function () { return this.width * this.heigth }
}

rectangle.getSquare();

// #2
const price = {
	price: 10,
	discount: '15%',
	getPrice: function () { return this.price},
	getPriceWithDiscount: function () { return this.price * (100 - parseFloat(this.discount)) / 100 }
}

price.getPrice();
price.getPriceWithDiscount();

// #3
const obj = {
	height: 10,
	increase: function () { this.height += 1; return this.height}
}

// obj.height = 10;
// obj.increase();

// #4
const numerator = {
	value: 1,
	double: function () { this.value *= 3; return this},
	plusOne: function () { this.value += 1 ; return this},
	minusOne: function () { this.value -= 1 ; return this}
}

// This. Задачи.

// #1
const shop = {
	price: 10,
	prod1: 'apple',
	prod2: 'orange',
	prod3: 'banana',
	fullPrice: function () { return this.price * (Object.keys(shop).length - 2)}
}

// #2
const shop1 = {
	prod1: 'apple',
	prod2: 'orange',
	prod3: 'banana',
	fullPrice: function () { return this.price * this.allProd }
}

const shopDetails = {
	price: 10,
	allProd: Object.keys(shop1).length - 1,
}

console.log(shop1.fullPrice.call(shopDetails));

// #3
let sizes = {width: 5, height: 10};

let getSquare = function () {return this.width * this.height};

console.log(getSquare.call(sizes));

// #4
let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);

// Замыкания. Задачи.

// #1
function minus(a) {
	return function (b) {
		return a - b;
	}
}

// #2
function multiplyMaker(a)  {
	let number = a;
	return function (b) {
		return number *= b
	}
}

const multiply = multiplyMaker(2);

// #3
const string = (function () {
	let string


	function setString(str = '') {
	 	if (typeof str == 'number') {
	 		return string = str + ''
	 	} else {
	 		return string = str;
	 	}
	};

	function getString() { return string };

	function getLength() { return string.length };

	function getNewString() {
		let newString = '';
		for (let i = string.length - 1; i >= 0; i--) {
			newString += string[i]
		}
		return newString
	}
	return {
		setString: setString,
		getString: getString,
		getLength: getLength,
		getNewString: getNewString
	}
}());

// #4
const calc = (function () {
	let number

	function setNumber(val) {
		number = val;
		return this
	};

	function plus(val) {
		number += val;
		return this
	};

	function minus(val) {
		number -= val;
		return this
	};

	function multiplication(val) {
		number *= val;
		return this
	};

	function division(val) {
		number /= val;
		return this
	};

	function exponent(val) {
		number = Math.pow(number, val);
		return this
	}

	function getNumber() {
		return +number.toFixed(1)
	}

	return {
		setNumber: setNumber,
		plus: plus,
		minus: minus,
		multiplication: multiplication,
		division: division,
		exponent: exponent,
		getNumber: getNumber
	}
}())