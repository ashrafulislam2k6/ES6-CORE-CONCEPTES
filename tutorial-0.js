// todo:    Module no-27.0          topic:Module overview,primitive and non-primitive data types

/**  আমরা আগে  জেনেছি ES6 নিয়ে। 
 * 
 *   1.  var let and const : most of case এ আমরা const use  করব। যদি মান চেঞ্জ হয় তবে let use করব।
 *   2.  default parameter or default value . কোন parameter এর পরে = ' default value' ,
 *   3.  template string : very impotent - dynamic ভাবে মান বসাতে পারি । 
 *   4.  Arrow function :    const arrow = (x,y) => x + y ;    console.log(5,4);     output :    9   .
 *   5.  spread operator:  ...array or object  ( array te thaka value ke bichiye deoyar jonno use korte hoy)
 *   6.  destructuring :   {name,age} = {name:'ashraful', age:20}; **/


// today topic:   primitive and non-primitive: 

  let data = 'ashraful ';
      data = 20;
      data = true;
      data = [];
      data = {};

  console.log(typeof  data);


  // 1. primitive data type : 
     const name = 'Ashraful islam';
     let   age  = 20;
     let isTrue = true;
     let giftBox = undefined;
     let nodata = null;

     console.log(name);
     console.log(age);
     console.log(isTrue);
     console.log(giftBox);
     console.log(nodata);



// 2. non primitive data type: একাধিক value বা complex data রাখে ঃ 

    const product = {
        name : 'phone',
        brand: 'apple',
        prise: '110k',
        color: 'white'
    }

    console.log(product);

    const number = [1, 2, 3, 4, 5];

    console.log(number);

    function  food (){
        const rice = 200;
        const water=  20;
        const total = rice + water;
        return total;
    }

    console.log(food());

    /** primitive and non-primitive data:
     * Primitive :String, Number, BigInt, Boolean, Undefined, Null, Symbol.
     
     * Non-Primitive: Object, Array, Function.

    */


