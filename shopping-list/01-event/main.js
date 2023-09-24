// HTML Selectors
const wrapper = document.querySelector("#wrapper");
const shoppingList = wrapper.querySelector("#shopping-list");
const shoppingText = wrapper.querySelector("#shopping-text");
const addToShoppingListBtn = wrapper.querySelector("#add-to-shopping-list");
const resetBtn = wrapper.querySelector("#reset");
// 1. Når der skrives i input feltet shoppingText så udskriv med console.log() hvad der står
// Du kan bruge shoppingText.addEventListener("input", (event)=>{})
// Brug : event.currentTarget
let shoppingArray = [];
let vare = null;
shoppingText.addEventListener("input", (event) => {
	//console.log(event.currentTarget.value);
	vare = event.currentTarget.value;
});

addToShoppingListBtn.addEventListener("click", () => {
	if (vare !== null) {
		shoppingArray.push(vare);
		console.log(shoppingArray);
	}
});

// 2. tilføj en begivenhedslytter til addToShoppingListBtn af typen click
// Når der trykkes på knappen så tilføj teksten til en liste i JavaScript
// let shoppingArray = []
// Du kan bruge funktionen push() fx. mitArray.push(item)
// udskrive hvad der står i listen med console.log
