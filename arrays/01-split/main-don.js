// Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.
// Store the length of the array in a variable called arrayLength.
// Store the last item in the array in a variable called lastItem.

// use the function split()

const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
const newArray = myString.split("+");
const arrayLength = newArray.length;
console.log(newArray);
console.log(arrayLength);
