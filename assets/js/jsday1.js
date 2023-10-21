var x = 5, y = 6;
var z, a = 100;
var b = '5'
var firstname = 'Claudine';
var lastname = 'Apalla'
var sum = x + y;
var test = x + b;
var fullName = firstname + ' ' + lastname;
var istrue = true

console.log(x, y);
console.log(z);
console.log(a);
console.log(firstname);
console.log('Apalla');
console.log(sum);
console.log(test);
console.log(typeof test);
console.log(fullName);
console.log(firstname, lastname);
console.log('My name is', firstname, 'and my math is', sum);
console.log(istrue);
console.log(false)
console.log('The opposite of istrue is', false)
console.log('The value of istrue is', istrue);
console.log(firstname * 3);
console.log(x ** y)
var sum = 10 % 3;
console.log('The new value of sum is', sum);
console.log(x);
console.log(x > y);
console.log(x ==5);
console.log(x == b);
console.log(x ===b);
console.log(x > 5);
console.log(x >= 5);
console.log(!istrue)
console.log(x != 5)
console.log(x == 5 && y == 6)
console.log(x != 5 && y == 6)
console.log(x == 5 && y != 6)
console.log(x != 5 && y != 6)
console.log(x == 5 || y == 6)
console.log(x == 5 || y != 6)
console.log(x != 5 || y == 6)
console.log(x != 5 || y != 6)

if (x == 5 && y == 6) {
    console.log('our condition is true');
}
if (x == 5 && y != 6) {
    console.log('our condition is false so this will not show')
} else if (x >= 6) { 
    console.log('x is not equal to 6 that is why this is showing')
} else {
    console.log('This shows if all if/else if statements are false')
}

x = 10;
if (x % 2 == 0) {
    console.log('x is an even number')
} else {
    console.log('x is an odd number')
}

if (firstname == 'Claudine') {
    console.log('access granted')
}

if (lastname == 'apalla') {
    console.log('access is granted even if lowercase')
} else {
    console.log('Comparison is case sensitive')
}

if (firstname == 'Claudine' || lastname == 'apalla'){
    console.log('coach is in')
} else {
    console.log('coach is out')
}