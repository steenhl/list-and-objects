const products = [
	{ id: "a1", title: "Blå skjorte", description: "En fantastisk smuk og blød blå skjorte", price: 400 },
	{
		id: "a2",
		title: "Grøn skjorte",
		description: "Smuk grøn skjorte når du er i forårs humør",
		price: 500,
	},
	{
		id: "a3",
		title: "Rød skjorte",
		description: "Denne røde skjorte er det oplagte valg til 1 maj",
		price: 600,
	},
];

function productList(products) {
	const shoppingListWrapper = document.querySelector("#shopping-list-wrapper");
	const ul = document.createElement("ul");
	ul.id = "shopping-list-ul";
	products.forEach((prod) => {
		const li = renderProductItem(prod);
		ul.append(li);
	});
	shoppingListWrapper.insertAdjacentElement("afterbegin", ul);
}

function renderProductItem(prod) {
	const { id, title, description, price } = prod;
	const li = document.createElement("li");
	li.classList.add("product-item");
	li.id = id;
	li.innerHTML = `
			<section>
				<h2>${title}</h2>
				<p>${description}</p>
				<p><span> Price : ${price}</span></p>
			</section>
		`;
	return li;
}
productList(products);
