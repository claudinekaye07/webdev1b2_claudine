var arr = [4, 8, 15, 16, 23, 42];
console.log(arr);
console.log(arr[2]);
console.log('the value in 3rd index is', arr[3]);
var myname = 'Claudine';
console.log(myname [4]);
console.log(myname [10]);

var cars = ['Honda', 'Toyota', 'Chevrolet', 'Izusu'];
var cars2 = ['Lamborghini', 'Porsche', 'BMW'];
console.log(cars)
console.log('Using at', cars.at(3));
cars[3] = 'Mercedez Benz';
console.log(cars);
console.log('concat', cars.concat(cars2));
console.log(cars);
cars = cars.concat(cars2);
console.log(cars)
console.log(cars.length);
console.log(cars2.length);
console.log('during sort', cars.sort()); 
console.log('after sort', cars);
console.log('reverse', cars.reverse());
console.log('before push', cars2);
cars2.push('Ferrari');
console.log('after push', cars2);
var removedCar = cars2.pop();
console.log(cars2);
console.log(removedCar);
console.log(cars.splice(3, 1));
console.log(cars);
cars.unshift('Kia');
console.log(cars);