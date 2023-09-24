class Car {
	constructor(domElm, carName, wheel, color, price) {
		this.domElm = domElm;
		this.carName = carName;
		this.wheel = wheel;
		this.color = color;
		this.price = price;
	}
	render() {
		const app = document.querySelector(this.domElm);
		const section = document.createElement("section");
		section.innerHTML = `
            <h2>${this.carName}</h2>
            <p>Number of wheel = ${this.wheel}</p>
            <p>The color of the car is = ${this.color}</p>
            <p>The price is = ${this.price}</p>
            `;
		app.append(section);
		console.log(app);
	}
}

const volvo = new Car("#app", "Volvo", "4", "red", 30000);
volvo.render();

const citroen = new Car("#app", "Citroen", "4", "Green", 12000);
citroen.render();
