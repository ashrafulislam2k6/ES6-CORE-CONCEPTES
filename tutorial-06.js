// todo:        Module no- 27.6         topic:  (Optional) Callback function and pass different functions  

// call back function : 
// document.getElementById('#btn').addEventListener('click', function(event){}); // call back function.
// addEventListener('click',function(){});  // click, and function() একেক টা parameter.


function settleLife( name, isBCS, marriage, patri ){
    if(isBCS){
            marriage(patri)
    }
}

function boloKobul (patri){
    console.log('Kobul' ,patri);
}


settleLife('kamal',true,boloKobul, 'girl');
// boloKobul('pori')

// এই tutorial থেকে , আমার যেটা , শিখলাম কোন একটা function এর parameter  হিসেবে আমরা একটা  function কে পাঠাইতে পারি। 
