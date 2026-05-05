// todo:  tutorial no- 27.1     topic:  null vs undefined and why undefined happens
// কি কি কারনে ,undefined আসতে পারে।

// 1. variable er value  declare na korle: 
 let number ;
 console.log(number);

// 2. function call করার সময় parameter er value  না দিলে ঃ 
 const data = (x,y) => {
    console.log(x,y);
 }

 data();


 // 3. function এর return না করলে ঃ 

 let valueReturn = (x,y) => {
    const result = x + y ;
 }
 console.log(valueReturn(5,5));

 //  4. object এর ভেতরে এমন property কে খুজা যা ঐ object এ define করা হয় নাই : 

 const product = {
    name: 'smart phone',
    brand: 'Apple',
    color: 'white'
 }

 console.log(product.price);


 // 5. array এর ভেতরের  এমন index কে খুজা যেটা Array এর ভেতরে নেই: 
 const numbers =[12,33,44,55,66,55];
 console.log(numbers[10]);
 delete numbers[2]
 console.log(numbers);


 // 6. variable er value undefined রাখলে 
  const mainValue= undefined;
  console.log(mainValue);

// 7. Wrong destructuring হলে : 
const {name,brand,prise} ={name:'laptope',brand:'apple',color:'black'}
console.log(prise);




// * null : null সাধারণত JavaScript নিজে দেয় না — developer ইচ্ছা করে set করে।

// 1. Intentionally empty value set করলে
let user = null;
console.log(user);


