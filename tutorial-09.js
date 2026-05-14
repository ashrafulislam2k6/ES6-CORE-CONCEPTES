// todo:            Module no-27.9          topic:  Array power methods: filter, find, reduce

//*  Filter:  সর্ত জুরে দেয় এবং তারপরে কাজ শুরু করেঃ 
//1. number:

const numbers= [1,322,453,56,76,7,55,505,335,556];

const isEven = numbers.filter(even => even % 2 === 0);
console.log(isEven);


//*2.  how to filter in arrays string value:  first later === a 
const allFriends = [ 'hasibul', 'omor-faruk','ashraful', 'akash', 'habibur','tanvir','tajim','rafin','abir'];

const aFriends = allFriends.filter(af => af[0] === 'a'  || af[0] ==='h');
console.log(aFriends);

//2.5 wot to filter in arrays string value : last later === r
const lFriends= allFriends.filter(rf => rf[rf.length -1 ]=== 'r');
console.log(lFriends);


//* 3.

const students = [
    {name: 'ashraful islam', age: 20},
    {name: 'hasibul islam', age: 30},
    {name: 'abir islam', age: 23},
    {name: 'toriqul islam', age: 26},
    {name: 'miraj islam', age: 27},
    {name: 'rakib ', age: 22},

];

const youngerAge= students.filter(young => young.age <25);
console.log(youngerAge);

//? chatGpT amay ei proble gulo diyeche: 

// 1st problem:b দিয়ে শুরু হওয়া নামগুলো বের করো:
const names = ['abul', 'babul', 'karim', 'bashir', 'rahim'];

const firstLaterB= names.filter(b => b[0] === 'b');
console.log(firstLaterB);


// 2nd problem:যেসব number 10 এর বড়:
const numbers2 = [5, 12, 8, 25, 3, 18];

const getBig = numbers2.filter(big => big > 10);
console.log(getBig);

// 3rd problem: Even number বের করো:
const nums = [1,2,3,4,5,6,7,8];

const isEvenSure = nums.filter( even => even % 2 === 0);
console.log(isEvenSure);


// 4th problem: যেসব ফলের নাম m দিয়ে শুরু:
const fruits = ['mango', 'banana', 'melon', 'apple', 'orange'];

const mFruits = fruits.filter( mF => mF[0]  === 'm');
console.log(mFruits);


// 5th problem :4 letter এর বেশি word বের করো:
const words = ['cat', 'tiger', 'lion', 'elephant', 'dog'];
const laterForth= words.filter( forth => forth.length > 4);
console.log(laterForth);


// 6th problem: যেসব নাম a বা s দিয়ে শুরু:
const free = ['ashraful', 'sakib', 'rahim', 'sojib', 'akib'];
 const towName= free.filter(twon => twon[0] === 'a' || twon[0] === 's');
 console.log(towName); 




// todo : What is find : find অনেকটা filter এর মত তবে, find যাকে খুজবে, তাকে পেলেই সে খুজা বন্ধ করে দিবে, শুধু তাকে দেখাবে
const money = [133,44,55,555,44,33,222,55,55,222];
const detect = money.find(findmoney => findmoney === 55);
console.log(detect);

// todo : find খুজে না পেলে undefined দেখাবেঃ 
const searching = money.find( search => search === 20);
console.log(searching);

const MP= [
    {name:'Nahid islam', age: 28, party:'NCP'},
    {name:'Hasnat Abdullah', age: 27, party:'NCP'},
    {name:'akhatar hosen', age:30, party:'NCP' },
    {name:'abdullah al amin', age:28, party:'NCP' },
    {name:'atiqur rohoman mujahid', age:28, party:'NCP' },
    {name:'hanna masud', age:26, party:'NCP' }
];

// find use kora hoiche: 
const ageMP= MP.find(mpAge => mpAge.age === 28);
console.log(ageMP);





//todo:         what is reduce :

const countNumber= [1,3,4,45,5,6,56];
let sum = 0;

for(const num of countNumber){
    sum = sum + num;
  
}
console.log(sum);



// reduce diye 1 line e kori: 
const reduceResult = countNumber.reduce((acc, num )=> acc + num , 0);
console.log(reduceResult);

// reduce use kore big number get: 
const bigNumberReduce = countNumber.reduce((accumulation, currentValue) => Math.max(accumulation,currentValue));
console.log(bigNumberReduce);


// get small number in array use reduce ();
  const getSmall = countNumber.reduce((accumulated, currentValue) => Math.min(accumulated ,currentValue),10);
  console.log(getSmall);


//* খালি array এর জন্য হলেও ইনিসিয়াল value দিতে হবে :

const ifMTArray = [];
const bigNumberOfMT = ifMTArray.reduce((accu, value) => Math.max( accu, value),10);
console.log(bigNumberOfMT);