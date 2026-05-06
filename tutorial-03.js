//todo       Module no-27.3         topic: Double equal (==) vs triple equal (===), implicit conversion

//* triple equal sing:
console.log( 2 === 2);
console.log( 2 === 1);
console.log( 2 === '2');
// compares the data type first. if data types are different,if returns false. if data types are same , it compares the values and returns true or false accordingly


//* Double equal sine == : double equals does type coercion.
console.log( 2 == 2 );

console.log( 2 == '2' );
// compares the values after converting them to a common type. if the values are equal after type coercion ,it returns true .if the values are not equal after type coercion ,it returns false.

console.log( true == 1);
// true is convert to 1 and then compared. returns true.

console.log( 0 == false);
// false is convert to 0 and the compared .returns true.

console.log( true == '1');
// true is converted to 1 and then compared with '1'. '1' is converted to number 1 and then compared .returns true.

console.log( false == '0');
console.log( null == undefined);

console.log(NaN == NaN);
console.log([5] == '5');

console.log( {} == {});
console.log( [] == []);

// console.log([5].toString());

//* most of case এ আমরা === use করব। 

