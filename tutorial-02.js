// todo     Module no -27.2         topic : Different truthy and falsy values in JavaScript 


let data ;
// falsy value;
    data = 0;
    data = '';
    data = null;
    data = NaN;
    data = 0n;
    data = -0;
    data = undefined

    // truthy value 
    data = 1;
    data = -1;
    data = ' ';
    data = '0';
    data =[];
    data = {};
   

if(data){
    console.log('truthy');
} else{
    console.log('falsy');
}



// যদি কখন ও প্রয়োজোন যে false হলে , check করতে হবে।তাহলে ঃ value কে  একবার  উল্টানোর জন্য ১টা  ! use করতে হয়।

let prise = 0;

if(!prise){
    console.log('prise is falsy ');
}



// bang sing  !! দুই বার use করলে সেইটা  boolean data type hobe. 

let change = 0 ;

if(!!change){
    console.log('change complete');
}


// single bang !   opposite boolean e convert করে। and !! truthy and falsy কে original boolean e convert করে। 

