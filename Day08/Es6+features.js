//task01:- Template literals
// let name="Rana";
// let age=22;
// let message=`hello my name is ${name} and i am ${age} old`;
// console.log(message);

//task02:- multi line strings
// let greeting=` hello my name is Rana 
//                 and i am 22 year old ! `;
// console.log(greeting);

//task03:-Destructuring
// const array = ['apple', 'banana', 'orange', 'grape'];

// const [first, second] = array;

// console.log(first); 
// console.log(second);

//task04:-
// const book={
//     title:"the monk who sold its farrieri",
//     author:"Robin sharma"
// }

// const {title, author}=book;
// console.log(title);
// console.log(author);

//task05:-spread and rest operator
// const arr1=["r","a","n","a", ,];
// const arr2=[...arr1, "p","a","t","e","l"];
// console.log(arr2);
//task06:-
// function sum(...num){
//     return num.reduce((acc,num)=>acc+num,0);
// }
// console.log(sum(1,2,3,4,5));
// console.log(sum(30,50));

//task07:- Default parameter
// function product(a,b=1){
//     return a*b;
// }
// console.log(product(5,8));
// console.log(product(10));

//task08:- Enhanced object literal
// const obj={
//     name:"rana",
//     type:"student",
//     greetings(){
//         return `hi my name is ${this.name} and i am a ${this.type}`;
//     },
//     employment:true
// }
// console.log(obj);
//task09:-Propert name is same as variable name 
// const name='rana';
// const age=22;
// const obj={
//     name,
//     age
// }

// console.log(obj);

