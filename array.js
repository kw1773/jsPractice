/*
Geben Sie die Anzahl der Elemente in diesem Array aus.
Löschen Sie das Element mit dem Index 2. (Elementinhalt: 3)
Ermitteln Sie den Index des Elements "meier" und speichern Sie diesen in eine Variable ab.
Löschen Sie das Element mit dem Inhalt "meier" aus dem Array.
Fügen Sie ein neues Element ("anfang") an dem Array-Anfang ein.
Fügen Sie ein neues Element ("ende") an dem Array an.
*/

var myArray = [1, 2, 3, 4, "hans", "meier", 7, 8, 9]; 
console.log(myArray); // [1, 2, 3, 4, "hans", "meier", 7, 8, 9]

var myArrayLength = myArray.length; // 9
console.log(myArrayLength); 

var removeIndexTwo = myArray.splice(2, 1); // 3
console.log(removeIndexTwo);

var indexOfMeier = myArray.indexOf("meier"); // 4
myArray.splice(indexOfMeier, 1);

myArray.unshift("anfang");
myArray.push("ende");

console.log("Mit beginn und ende:" + myArray); // Mit beginn und ende:anfang,1,2,4,hans,7,8,9,ende
