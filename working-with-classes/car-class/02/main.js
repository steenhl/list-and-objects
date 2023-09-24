class Car {
	constructor(domElm, carName) {
		this.domElm = domElm;
		this.carName = carName;
	}
	render() {
		const app = document.querySelector(this.domElm);
		const section = document.createElement("section");
		section.innerHTML = `<h2>${this.carName}</h2>`;
		app.append(section);
		return section;
	}
}

const volvo = new Car("#app", "Volvo");
volvo.render();

class SuperCar extends Car {
	constructor(domElm, carName, wheel, color, price) {
		super(domElm, carName);
		this.wheel = wheel;
		this.color = color;
		this.price = price;
	}
	superCarRender() {
		const section = this.render();
		const ul = document.createElement("ul");
		ul.innerHTML = `
			<li>Number of wheel = ${this.wheel}</li>
			<li>Color of the car = ${this.color}</li>
			<li>The price is = ${this.price}</li>
		`;
		section.append(ul);
	}
}

const citroen2 = new SuperCar("#app", "Citroen", "4", "Green", 12000);
citroen2.superCarRender();
