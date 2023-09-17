const wrapper = document.querySelector("#wrapper");
const shoppingList = wrapper.querySelector("#shopping-list");
const shoppingText = wrapper.querySelector("#shopping-text");
const addToShoppingListBtn = wrapper.querySelector("#add-to-shopping-list");
const resetBtn = wrapper.querySelector("#reset");

let shoppingListArray = [];
let inputObj = { text: "" };

shoppingText.addEventListener("input", (e) => {
	inputObj.text = e.currentTarget.value;
});

addToShoppingListBtn.addEventListener("click", () => {
	// hvis der ikke noget tekst, så stop
	if (inputObj.text.length === 0) return;
	// tilføj til listen
	shoppingListArray.push(inputObj.text);
	// find id, ud fra længden af listen
	const id = shoppingListArray.length - 1;
	// Opret nyt html list element og inset det i <ul> listen
	addToShoppingListHtml(id);
});

function addToShoppingListHtml(id) {
	const shoppingText = shoppingListArray[id];
	const newItem = `<li id=${id}>${shoppingText}</li>`;
	shoppingList.insertAdjacentHTML("beforeend", newItem);
}
resetBtn.addEventListener("click", () => {
	resetList();
});

function resetList() {
	shoppingListArray = [];
	shoppingList.innerHTML = "";
}
