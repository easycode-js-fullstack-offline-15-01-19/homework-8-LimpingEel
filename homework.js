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