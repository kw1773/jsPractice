# jsPractice
## jsArrayPractice
* Specify the number of elements in this array. 
* Delete the element with index 2. (Element content: 3) 
* Determine the index of the "meier" element and store it in a variable. 
* Delete the item with the content "meier" from the array. 
* Insert a new element ("begin") at the beginning of the array. 
* Add a new element ("end") to the array.

<pre>
    <code>
        var myArray = [1, 2, 3, 4, "hans", "meier", 7, 8, 9];
        console.log(myArray);

        var myArrayLength = myArray.length;
        console.log(myArrayLength);

        var removeIndexTwo = myArray.splice(2, 1);
        console.log(removeIndexTwo);

        var indexOfMeier = myArray.indexOf("meier");
        myArray.splice(indexOfMeier, 1);

        myArray.unshift("anfang");
        myArray.push("ende");

        console.log("Mit beginn und ende:" + myArray);
    </code>
</pre>

## jsCalcPractice

Write a calculator in javascript, which has.. 
* two numbers and the operator (+, -, *, /,%)
* output the value
* error handling of the input by numbers and dividing by 0

