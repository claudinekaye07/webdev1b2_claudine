var length, height, width = 0
var length =23
var height = 15
var width = 10
var product = length * width * height
var number = 3450

console.log(product)

if (number % 2 == 0) {
    console.log("Product is odd number")
} else {
    console.log("Product is even number")
}

for (var x = 0; x <= 10; x++){
    console.log("Kael", x)
}

for (var counter = 0; counter < 10; counter++){
    if (counter % 2 == 0) {
        console.log(counter, 'Even');
    } else {
        console.log(counter, 'Odd')
    }
}

for (var goingdown = 100; goingdown > 3; goingdown--) {
    console.log("going down for real in" , goingdown);
}
console.log("down");

var y = 0;
while (y < 10) {
    console.log('Kael ulet #', y);
    y++;
}

if (confirm ('Press a Button')){
    console.log('You pressed OK!')
} else {
    console.log('You pressed cancel!');
}

console.log('end #1');

var confirmOutput = confirm('Trying out confirm box');
console.log('checking confirmOutput');

if(confirmOutput == true){
    console.log('it is true');
} else {
    console.log('false');
}
console.log('end #2');


alert('hello', 'hello');
alert('hello3' + 456)
var personName = prompt('Please enter your name so I Can address you');
console.log(personName);
if (personName == 'Claudine') {
    alert ('Welcome to my site, '+ personName);
} else {
    alert ('Only Claudine can enter');
}

for (var counter2 = 0; counter2 < 100; counter2++) {
    console.log('github change counter2', counter2)
}