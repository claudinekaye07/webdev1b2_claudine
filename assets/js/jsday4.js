var userInput = parseInt ('500.00');
var multiplier = 5;

console.log(parseInt(userInput) * multiplier);

console.log(multiplier);
console.log(multiplier.toString());

var pi = 3.141516
var currencyConverted = userInput * pi;
console.log(currencyConverted);
console.log(currencyConverted.toFixed(2));
console.log(currencyConverted);
console.log(currencyConverted.toFixed(0))

// var firstName = 'Jenina';
//var nameInput = prompt('What is your name?');

// if (nameInput.toUpperCase == firstName.toUpperCase) {
 //   alert('The same!' + nameInput);
// } else {
 //   alert('Not the same');
// }

var fruits = ['apple', 'orange', 'mango'];

if (fruits.includes('apple')) {
    console.log('Apple is present');
} else {
    console.log('Apple is not present');
}

// OBJECT
var person = {
    firstName: 'Shiela',
    lastName: 'Bangs',
    gender: 'F',
    age: 7,
};

console.log(person);
person.gender = 'M';
person.age = '21';
console.log(person)
console.log('the person age is', person.age);

var phoneBook = [
    {
        name: 'Johnny Cash',
        number: 123123,
    },
    {
        name: 'John Doe',
        number: 33313,
    },
    {
        name: 'Alphi Holmes',
        number: 177742,
    },
    {
        name: 'Kenji Cash',
        number: 827343,
    }
];

console.log(phoneBook);

phoneBook[1].name = 'Carlos Jones';
phoneBook[1].number = 1238273;

console.log(phoneBook);

console.log(phoneBook[2].name);
console.log(phoneBook[2]);

console.log(document.getElementById('companyName'));

document.getElementById('companyName').innerHTML = 'The Coding School';

var contentElement = document.getElementById('contentDiv');
contentElement.innerHTML = 'Coding for the future'

console.log(document.getElementsByClassName('listItem')[0].innerHTML);

var listItem = document.getElementsByClassName('listItem');

for(var counter = 0; counter < listItem.length; counter++) {
    console.log(listItem[counter].innerHTML);
    listItem[counter].innerHTML = listItem[counter].innerHTML +  'is my friend';
}

console.log(document.getElementById('nameForm').value);

/**
 * FUNCTIONS:
 * console.log()
 * alert()
 * prompt()
 * confirm()
 * document.getElementById
 * document.getElementByClassName()
 * 
 */
function displayValue() {
    console.log('hello');
};

displayValue();


function add (x, y) {
    return x + y;
};


function displayInput() {
    var inputValue = document.getElementById('nameForm').value;

    console.log('Hello there', inputValue);
    alert('welcome' + inputValue);
};

console.log(add(5, 4));

var sum = add(7, 11);

console.log(add (sum, 5));

console.log(sum);
