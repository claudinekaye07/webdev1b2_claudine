var fruits = [];
var fruitNumber = prompt('How many Fruits do you want to enter? (min. 3, max. 10)');

for(var counter = 0; counter < fruitNumber; counter++) {
    var fruitName = prompt('Enter the name of the fruits' + (counter +1) + ":")
    fruits.push(fruitName.toLowerCase());
}

console.log(fruits);
console.log('First fruit entered', fruits[0]);
console.log('Last fruit entered', fruits[fruitNumber -1]);
console.log(fruits.sort());
console.log(fruits[1]);
console.log(fruits.splice(0, 1));
console.log(fruits.splice(2, 1));


var vegetables = [];
var veggieNumber = prompt('How many Vegetables do you want to enter? (min. 3, max. 10)');

for(var counter = 0; counter < veggieNumber; counter++) {
    var veggieName = prompt('Enter the name of the vegetables' + (counter +1) + ":")
    vegetables.push(veggieName.toLowerCase());
}

console.log(vegetables);
console.log('First vegetables entered', vegetables[0]);
console.log('Last vegetables entered', vegetables[veggieNumber -1]);
console.log(vegetables.sort());
console.log(vegetables[1]);
console.log(vegetables.splice(0, 1));
console.log(vegetables.splice(2, 1));

var food = fruits.concat(vegetables);
console.log(food);

for (let i = 0; i < food.length; i++) {
    var foodName = food[i];
    var length = foodName.length;
    var secondLetter = foodName[1];
    var reversedFood = foodName.split("").reverse().join("");
    var isEven = i % 2 === 0;
    console.log(`Index ${i} is ${isEven ? "even" : "odd"} and the food inside it is called ${foodName}. The word ${foodName} has ${length} letters and the second letter is ${secondLetter}. If you reverse it, it becomes ${reversedFood}.`);
  }

var foodInput = prompt("Enter a food to check if it exists:");
foodInput = foodInput.toLowerCase();
var foodIndex = food.indexOf(foodInput);

if (foodIndex == -1) {
    alert("Food is found at index " + foodIndex);
} else {
  alert("Food not found");
}

food[0] = "START";
    food[food.length - 1] = "END";
    food = food.map(item => item.toUpperCase());

console.log(food);



  