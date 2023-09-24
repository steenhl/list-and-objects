cars = [
	{ id: 0, brand: "volvo", price: 417791, model: "XC40", fuel: "el" },
	{ id: 2, brand: "mercedes", price: 452300, model: "A 250 e AMG Edition", fuel: "hybrid" },
	{ id: 3, brand: "mercedes", price: 439900, model: "A 250 e hatchback", fuel: "hybrid" },
	{ id: 4, brand: "citroen", price: 139990, model: "1.2 PureTech 83 HK YOU", fuel: "benzin" },
];

//******  OPG 1 ***** */
// Opret en funktion der tager tre parameter: cars, discont, brand
// funktionen skal kunne udskrive en ny pris på en bil og den discont som der gives
//discontBrand(cars, 50000, "mercedes");
// Centrale elemnter løkker, betingelser og objekter
function discontBrand(cars, discont, brand) {
	cars.forEach((car) => {
		if (car.brand === brand) {
			const price = car.price;
			const newPrice = price - discont;
			console.log(`newPrice = ${newPrice} Discont= ${discont}`);
		}
	});
}

//******  OPG 2 ***** */
// Skift prisen på en bestemt bil model
// changePrice(cars, "A 250 e AMG Edition", 303010);
// print resultatet ud af den
// 1. nye pris
// 2. bil objeket hvor prisen er blevet ændret
// Centrale elemnter løkker, betingelser og objekter
function changePrice(cars, model, newPrice) {
	cars.forEach((car) => {
		if (car.model == model) {
			car.price = newPrice;
			console.log(newPrice);
			console.log(car);
		}
	});
}

//******  OPG 3 ***** */
// udskriv all mærkerne
// Vigtige elemnter løkker og objekter
// funktionen tager cars som parameter
// allBrands(cars);
function allBrands(cars) {
	cars.forEach((car) => {
		console.log(car.brand);
	});
}

//******  OPG 4 ***** */
// Lave en liste med et en række af objekt som indeholde brand og price
// let carsPriceAndBrand = [];
// const obj = { brand: car.brand, price: car.price };
// Brug console.log til at se listen med objekter
// priceAndBrand(cars);
// funktionen tager cars som parameter
function priceAndBrand(cars) {
	let carsPriceAndBrand = [];
	cars.forEach((car) => {
		const obj = { brand: car.brand, price: car.price };
		carsPriceAndBrand.push(obj);
	});
	console.log(carsPriceAndBrand);
	return carsPriceAndBrand;
}

//******  OPG 5 ***** */
// find den dyreste bil
// Vigtige elemnter løkker, betingelser og objekter
// findMostExpensiveCar(cars);
// funktionen tager cars som parameter
function findMostExpensiveCar(cars) {
	let heighestPrice = cars[0].price;
	cars.forEach((car) => {
		if (car.price > heighestPrice) {
			heighestPrice = car.price;
		}
	});
	console.log(heighestPrice);
	return heighestPrice;
}

//******  OPG 6 ***** */
// Udfordring
// ingen dubletter
// Centrale elemnter løkker, betingelser, lister og objekter
// allBrandsNoRepetitions(cars);
function allBrandsNoRepetitions(cars) {
	let listOfCarBrend = [];
	cars.forEach((car, index) => {
		const brand = car.brand;
		if (listOfCarBrend.length === 0) {
			listOfCarBrend.push(brand);
		} else {
			let prevCarBrand = listOfCarBrend[index - 1];
			if (prevCarBrand !== brand) {
				listOfCarBrend.push(brand);
			}
		}
	});
	console.log(listOfCarBrend);
}

//******  OPG 7 ***** */
// lave en funktion som generer en liste med et en række af objekter som indeholde brand, price og fuel
function bpf(cars) {}
