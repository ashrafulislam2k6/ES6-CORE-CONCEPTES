// todo     Module no-27.5          topic:   (Advanced) Explore closure in details:

 function outerFunction (){
     function innerFunction (){
        console.log('This is inner function');
     }
     return innerFunction;
 }

 console.log(outerFunction());
 const result = outerFunction();
 result();

//  console.log('In the outSide', result);
/** 
 ** আমরা জানি , inner function নিজে, এবং parent and global parent কে access করতে পারে । কিন্তু , outer function অর্থাৎ  parent কিন্তু inner function এ কি আছে তা access করতে পারে না। inner function এর বাহির থেকে, inner function কে call করা যায়না । 


 ** inner function কে বাহির থেকে, access করতে চাইলে , parent function এর ভেতরে, inner function কে return করতে হবে, তারপরে, parent function ke call করে দিতে হবে। inner function er ভেতরের কর্মকাণ্ড দেখতে চাইলে, একটা ভেরিয়েবল এর ভেতরে  parent function ke call করতে হবে। এরপরে variable টাকে call করতে হবে।  এইভাবেই আমরা বাহির থেকে inner function কে call করতে পারি বা access করতে পারি। 

 */



 //*  closure : 

 function  counter (){
     let count = 0;
        function increment(){
             count = count + 1; 
            console.log('value of count', count);
        }

     return increment;
 }

const counter1 = counter();
counter1();
counter1();
counter1();

/**
 * একটা function ke call করলে,  সেইটার ভেতর থেকে আরেকটা function ke return করলে, তাহলে সে একটা close environment or স্পেস create করে। এবং সেই স্পেস এর ভেতরে সে তার নিজেস্ব রেফারেন্স রাখে।   এইটা বঝতে নিচের code দেখিঃ 
 */


function parentFunction (owner) {
    let count =0;
        function childFunction(){
            count= count + 1; 
            console.log(`Owner name : ${owner}.   and her profit Number ${count}`);
        }
    return childFunction;
}


const rohimAndProfit = parentFunction('Rohim');
rohimAndProfit()
rohimAndProfit()
rohimAndProfit()
rohimAndProfit()
rohimAndProfit()


const korimAndProfit = parentFunction('korim');
korimAndProfit();
korimAndProfit();
korimAndProfit();
korimAndProfit();

// rohim er profit : 
rohimAndProfit()

// korims profit:
korimAndProfit();

