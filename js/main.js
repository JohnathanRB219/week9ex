// made a array with five strings
var myArray = ["the", "big", "bang","theory","Awesome"]
// console log the array
console.log(myArray.length)
// for loop that spits out the strings one by one
for(i = 0; i < myArray.length; i++) {
	console.log(myArray[i].length)

}
// reverse the array
// var reverseArray = myArray.reverse();
// console.log(reverseArray)

// var newArray = myArray.slice().reverse()

// var copiedArray = function(reverseArray) {
// 	for(var i = 0; i < reverseArray.length; i ++) {

// 		newArray.push(reverseArray[i]);
// 	}
// 	return 
// }
//  copiedArray (myArray);
//  var reverseArray = copiedArry(myArray).reverse();

// create a copy of original array


var emptyArray = [];
emptyArray.push("the", "big", "bang", "theory");
console.log(emptyArray);
emptyArray.reverse();
console.log(emptyArray);
emptyArray.sort();
console.log(emptyArray);


var myArray2 = [44,190,55,879,97];

