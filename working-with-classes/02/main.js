class Product {
	constructor(id, title, description, price, url) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.url = url;
	}
}
class ProductList {
	products = [
		new Product("a1", "Blå skjorte", "En fantastisk smuk og blød blå skjorte", 400, "./img/blue.jpg"),
		new Product("a2", "Grøn skjorte", "Smuk grøn skjorte når du er i forårs humør", 500, "./img/green.jpg"),
		new Product("a3", "Rød skjorte", "Denne røde skjorte er det oplagte valg til 1 maj ", 600, "./img/red.jpg"),
	];
	render() {
		const shoppingListWrapper = document.querySelector("#shopping-list-wrapper");
		const ul = document.createElement("ul");
		ul.id = "shopping-list-ul";
		this.products.forEach((prod) => {
			const thisProd = new ProductItem(prod);
			const li = thisProd.renderProductItem();
			ul.append(li);
		});
		shoppingListWrapper.insertAdjacentElement("afterbegin", ul);
	}
}
class ProductItem {
	constructor(product) {
		const { id, description, title, price, url } = product;
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.url = url;
	}
	addToCard() {
		console.log(this);
	}
	renderProductItem() {
		const li = document.createElement("li");
		li.classList.add("product-item");
		li.id = this.id;
		li.innerHTML = `
			<section class="prod-infor">
				<h2>${this.title}</h2>
				<p>${this.description}</p>
				<p><span> Price : ${this.price}</span></p>
				<button type="button">ADD ITEM</button>
			</section>
			<section class="prod-img"><img src=${this.url}></section>
		`;
		li.querySelector("button").addEventListener("click", this.addToCard.bind(this));
		return li;
	}
}
const productList = new ProductList();
productList.render();
