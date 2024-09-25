
let name = "Prinz Jan Lee Paulo";
let residence = "Baguio";


let sentence = name + " lives in " + residence;


function toUpperCase(str) {
return str.toUpperCase();
}

let originalString = "this exam is about appdev";
let uppercaseString = toUpperCase(originalString);


function findFirstA(str) {
let index = str.indexOf("a");
if (index !== -1) {
    return "The first occurrence of \"a\" is at index " + index;
} else {
    return "\"a\" not found in the string";
}
}

let searchString = "this is an exam for appdev";
let result = findFirstA(searchString);


let originalString2 = "I am learning JavaScript at school.";
let replacedString = originalString2.replace(/JavaScript/g, "JS");


let sentenceElement = document.getElementById("sentence");
let uppercaseElement = document.getElementById("uppercase");
let aElement = document.getElementById("a");
let replaceElement = document.getElementById("replace");
let foodsElement = document.getElementById("foods");


sentenceElement.innerHTML = "Sentence: " + sentence;
uppercaseElement.innerHTML = "Uppercase string: " + uppercaseString;
aElement.innerHTML = "First occurrence of \"a\": " + result;
replaceElement.innerHTML = "Replaced string: " + replacedString;
foodsElement.innerHTML = "Favorite foods:<br>";
function printFoods(arr) {
    for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    }
}

let favoriteFoods = ["Chicken Adobo", "Pizza", "Pesto", "Burgers", "Jolibee Chickenjoy"];


favoriteFoods.push("Ice Cream");


favoriteFoods.splice(1, 1);


favoriteFoods.sort();

for (let i = 0; i < favoriteFoods.length; i++) {
    foodsElement.innerHTML += favoriteFoods[i] + "<br>";
}
