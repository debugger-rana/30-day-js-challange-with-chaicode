//function to check if a number is even or odd and log the reslult in console
// function evenOdd(n){
//     if(n%2==0) return "even";
//     else return "odd";
// }
// const reslult=evenOdd(4);
// console.log(reslult);

//function to calculate the square of a number and return the result
// function squreOfNumber(n){
//     return n*n;
// }
// const result=squreOfNumber(6);
// console.log(result);

//find max number of 2 number and log the result to the console
/*function maxOfTwoNumber(a,b){
    if(a>b) return "maximun number is "+a;
    else return "maximun number is "+b

}
const reslult=maxOfTwoNumber(5,9);
console.log(reslult);  */

//program to express the concationation of two string and return the result
/*function stringConcat(a,b){
 return a+b;
}
const result=stringConcat("debugger","rana");
console.log(result);  */

//arrow function to write sum of two number and return the result 
/*sumOfTwo=(a,b) => a+b;

const reslult= sumOfTwo(5,5);
console.log(reslult); */


//function to check if the string contain a specific character and return a boolean value
/* stringContainCharacter=(x,str)=>{
   for(let i=0;i<str.length;i++){
    if(str[i]==x) return true;
   }
   return false;
}

const result= stringContainCharacter("r","debugger-rana");
console.log(result);  */

// write a function take two parameter and return thier product , 
//provide a default value for the second parameter
/*product=(a,b=5)=>{
return a*b;
}
const result=product(5);
console.log(result); */

//write a program that takes person name and age and retun gretting message. provide a default value for the age.
/*gretting=(name,age="22")=>{
 return `hello ${name}, your age is: ${age}`;
}

const result=gretting("rana",);
console.log(result);
*/
//write  a highorder function that takes function and a number ,and call the function that many time.
/*
const greeting = () => "hello rana";

function printGreting(number) {
  do {
    console.log(`${greeting()}`);
    number--;
  } while (number > 0); 
}

printGreting(4);
*/

//write a highorder function that takes two function and a value , applies  the first function to the value
//and apply the second function to the result 

// add=(a,b)=> a+b;
// multiply=(val)=> val*10;

// highOrderFunction=(addfn,multifn,val)=>{
//     let addition=addfn(5,val);
//     console.log(addition);
//     let result=multifn(addition);
//     console.log(result);
// }

// highOrderFunction(add,multiply,9);