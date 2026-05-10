//todo      Module no-27.4      topic: Block scope, global scope, simple understanding of hoisting :
 
// scope এর concept হলো:1. local scope: function এর ভেতরের কোন element কে function er বাহির থেকে call করা যাবে না।referenceError দিবে।    2.  global scope: function  এর বাহিরের element কে সব জায়গা থেকে access করা যায়। 
let pi= 3.14;

function add (a,b){
    const factor =0.5;
    const result = (a+b) * factor + pi;
    let mejor = doubleIt(result);

    console.log(thisIsWork(5)); // this is worked 
     function thisIsWork(num1){
        const total = num1 + 1;
        return total ;
     }
    //  console.log(thisIsWork(2));  // this is worked . 
    return mejor;
}

// console.log(thisIsWork(5)); // কাজ করবে না ।  

// console.log(factor);    // ReferenceError : factor is not defined. factor is only accessible with in the add function. it is not accessible outside the function.

console.log(add(10,10));

doubleIt(2,3)
function doubleIt(num){
        const total = num * 2 ;
        return total ; 
}


// TDZ: temporal death zone: declare korar pore theke run korbe, declear korar age run hobe : TDZ:
// console.log(temporal(5,5)); // not work :TDZ: 
const temporal = (numb,numb2) => numb + numb2;
// console.log(temporal(5,5));


