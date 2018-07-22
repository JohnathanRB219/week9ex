// // made a array with five strings
// var myArray = ["the", "big", "bang","theory","Awesome"]
// // console log the array
// console.log(myArray.length)
// // for loop that spits out the strings one by one
// for(i = 0; i < myArray.length; i++) {
// 	console.log(myArray[i].length)

// }
// // reverse the array
// // var reverseArray = myArray.reverse();
// // console.log(reverseArray)

// // var newArray = myArray.slice().reverse()

// // var copiedArray = function(reverseArray) {
// // 	for(var i = 0; i < reverseArray.length; i ++) {

// // 		newArray.push(reverseArray[i]);
// // 	}
// // 	return 
// // }
// //  copiedArray (myArray);
// //  var reverseArray = copiedArry(myArray).reverse();

// // create a copy of original array


// var emptyArray = [];
// emptyArray.push("the", "big", "bang", "theory");
// console.log(emptyArray);
// emptyArray.reverse();
// console.log(emptyArray);
// // sort array alphabetically
// emptyArray.sort();
// console.log(emptyArray);


// var myArray2 = [44,190,55,879,97];

// myArray2.sort(function(a,b){return a -b})
// console.log(myArray2)

// myArray2.sort(function(a,b){return a + b})
// console.log(myArray2)


// // create an array with three strings
// var myArray3 = ["that", "70's", "show"]
// // pushing two strings to myArray3
// myArray3.push("Erica", "Donna")

// // removing one string from the beginning
// myArray3.shift()
// console.log(myArray3)



// #13 creating a new empty array in a variable


var emptyArray4 = [];



// creating function that will run when button is clicked. the function should add value of the input to empty array

var unorder = document.getElementsByTagName("ul")[0];


function moreList() {
	var value = document.getElementsByTagName("input")[0].value;

		emptyArray4.push(value);


		unorder.innerHTML = "";

	for (var i = 0; i < emptyArray4.length; i ++) {
	
		var newLi = document.createElement("li");

		newLi.innerText = emptyArray4[i];

		unorder.appendChild(newLi);
	}



}


function sort() {
	var boom = document.getElementsByTagName("input")[0].value;

		emptyArray4.sort();


		unorder.innerHTML = "";

	for (var i = 0; i < emptyArray4.length; i++) {
		

		var newLi = document.createElement("li");

		newLi.innerText = emptyArray4[i];
		
		unorder.appendChild(newLi);
	}

}


function remove() {

		emptyArray4.pop();


		unorder.innerHTML = "";
	for (var i = 0; i < emptyArray4.length; i++) {
		
		var newLi = document.createElement("li");

		newLi.innerText = emptyArray4[i];

		unorder.appendChild(newLi);
	}
}

function removeFirst() {

		emptyArray4.shift();


		unorder.innerHTML = "";


	for (var i = 0; i < emptyArray4.length; i++) {
		 var newLi = document.createElement("li");


		 newLi.innerText = emptyArray4[i];

		 unorder.appendChild(newLi)
	}


}



