//todo:         Module no- 27.8         topic: Array power methods: map, forEach

// যেকোন array এর নাম্বার কে double করতে চাইলে আমরা for of use করিঃ

const numbers= [1 , 2, 3, 4, 5];
const double= [];
for( const num of numbers){
    double.push(num*2);   
}
console.log(double);


//* same kaj map দিয়ে সহজে করা যায়ঃ

const doubleIt = num => num * 2;
const doubled = numbers.map(doubleIt);
console.log(doubled);


// map diye aro easy kora jay: 
const doubleIs = numbers.map(num => num * 2);
console.log(doubleIs);

// map use kore square kora jay: 
 const square = numbers.map( num => num * num);
 console.log(square);



 // how to use map of Array in  string:

 const friends = [ 'Tanvir', 'Abir', 'AbuToha','hasibul','ashraful'];

 const firstLater =  friends.map(frd => frd[0].toUpperCase());
 console.log(firstLater);

    

 //* how to use map of object in Array: 

 const products= [
        {name: 'laptop', prise: '200000',model:'2020'},
        {name: 'phone', prise: '400000',model:'2024'},
        {name: 'tablet', prise: '350000',model:'2026'},
        
 ];
 // arrow function single line return default ভাবে auto kore: 

 const prise = products.map(money => money.prise);
 console.log(prise);

 const prises = products.map(money => money.prise*2);  // রমজান মাস তাই দাম বাড়িয়ে দিলাম 😄
 console.log(prises);


 //* multiline map in arrow function: arrow function e multiple line e default ভাবে auto return করে না। 
 const multiPrise= products.map(pd =>{
    return pd.model ;
     
 })
 console.log(multiPrise);


 // map of arrow function : double parameters :

 const family =[
    {name:'abdullah', age:'45',respect : 'leader of our family'},
    {name:'ashraful', age:'20',respect : 'big son of family'},
    {name:'tanvir', age:'12',respect : '2nd son of our family'},
    {name:'abir', age:'5',respect : 'hujur of our family'}
 ];

 const doubleParameter= family.map((fnam, index,doubleParameterArray) =>{
       const names= fnam.name.toUpperCase();
    //    console.log(index,doubleParameterArray);
    console.log(doubleParameterArray);
       return names
      
 })
  console.log(doubleParameter);

 /** 
  *  যা যা জানলাম, array থেকে, loop er পরিবর্তে মাপ করতে পারি। number, strin, object.
  * single parameter use korte pai. 
  * double parameter use korte par. ( name, index);
  * third parameter ,overAll array Take niye aste pari. arraynameArray example: ( familyarray) . */




 // todo:          map এর খালাতো ভাই ,  foreach()

const books= [{name:'bangla', prise:'2000taka', brand:'hack'},
              {name:'english', prise:'2040taka', brand:'hack'},
              {name:'math', prise:'200taka', brand:'hack'}
]

const eachResult = books.forEach((name, index, booksArray) =>{
      return books;
} );
console.log(eachResult);
// forEach() kono value return kore na. ty undefined dibe. 