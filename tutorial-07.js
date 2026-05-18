//todo:         Module no- 27.7         topic:  (Optional) Function arguments pass by reference and pass by value 

// pass by: 

function multiply( a, b){
      console.log( a, b );
      return a * b ; 
}


let x = 10; 
let y = 20; 

console.log('before calling : ', x,y);
const result = multiply( x, y);
console.log(result);


// value update: 
function updateMultiply (num,num2){
       num = num - 5;
       num2 = num2 - 10;
    console.log(num,num2);
    return num * num2 ;
}

const n = 10;
const m = 20; 
console.log('before calling ', n,m);
const total = updateMultiply(n,m);
console.log(total);

console.log('after calling:',n,m);

// কোন একটা function e কোন primitive মান পাঠালে , function er ভেতরে মান change হলেও , original value change হবে না। 



// todo:                pass by reference: 

function firstSum( arr1, arr2){
      
      arr1[0] = 100;
      arr2[0] = 200;

      const first = arr1[0];
      const second= arr2[0];
      return first + second;
}


const num1  =[1,2,3];
const num2  =[4,5,6];

console.log('before the function call:', num1, num2);

const   firstResult = firstSum(num1, num2);
console.log(firstResult);

console.log('after the function call :', num1, num2);

// কোন একটা function e কোন nonPrimitive মান পাঠালে , function er ভেতরে মান change হলেও , original value change হবে। 


//*  arguments :

function add(pera1, pera2){
      console.log('arguments :', arguments, arguments[3]); 
      // convert array. 
      const convertArray = [...arguments];
      console.log(convertArray);
     
      const sum = pera1 + pera2;
      return sum;
}

add(2,4,10,15);
//প্রত্যেক টা function এর ভেতরে একটা default object থাকে। এইটা কে array like object বলে ঃ arguments . আবার আমরা চাইলে এই arguments ke array te convart korte pari spread operator diye.



