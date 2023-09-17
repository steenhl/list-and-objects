const blushirt = { id: 0, color: "blue", price: 400, discound: 0 };
const pants = { id: 1, color: "blue", price: 600, discound: 100 };
const totalPrice = { id: null, price: 0, discound: 0 };

// hvis der bestilles mere end 2 produkter gives der discount
// lav en funktion der beregner hvor varens pris plus dicound og udskriver den
// 1. hvis der ikke gives discount
// 2. Prisen med discount samt hvad disconten er
// funktionen tager to parameter product og numberOfItems
// du kan med fordel bruge betingelser og en for løkke
order(pants, 2);
function order(product, numberOfItems) {
	// calculate discont
	if (numberOfItems > 2) {
		totalPrice.id = product.id;
		for (let i = 0; i < numberOfItems; i++) {
			const price = product.price;
			const discound = product.discound;
			const newPrice = price - discound;
			totalPrice.price += newPrice;
			totalPrice.discound += product.discound;
		}

		console.log(`numberOfItems =  ${numberOfItems}`);
		console.log(`totalPrice =  ${totalPrice.price}`);
		console.log(`discound = ${totalPrice.discound}`);
	} else {
		for (let i = 0; i < numberOfItems; i++) {
			const price = product.price;
			totalPrice.price += price;
		}
		console.log(`numberOfItems =  ${numberOfItems}`);
		console.log(`totalPrice =  ${totalPrice.price}`);
		console.log(`discound = ${totalPrice.discound}`);
	}
}
