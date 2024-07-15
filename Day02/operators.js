/*Activity-01:
 Task-1: write the program to add 2 number and log the result in the console
function addTwoNumber(x,y){
    return x+y;
}
let ans=addTwoNumber(5,5);
console.log(ans);

 Task-2: write a program to substract two number and log the result in the console 
 function substractTwoNumber(a,b){
    if(a>b) return a-b;
    else return b-a;
 }
 let ans = substractTwoNumber(5,20)
 console.log(ans);

 Task-3: write a program to multiply two number and log the result in the console 
 function multiplicationOfTwoNumber(a,b){
    return a*b;
 }
 let ans = multiplicationOfTwoNumber(5,10);
 console.log(ans);
 
 Task-4: write a program to divide two number and log the result in the console.
 function divisionOfTwoNumber(num,den){
    if (den === 0) {
        return "Error: Cannot divide by zero.";
      }
    
      return num / den;
 }
const result=divisionOfTwoNumber(9,5);
 console.log(result);

  Task-5: Write a program to find the remainder when one number is divided by another and log the result  to the console 
  function remainder(a,b){
   if(b==0){
      return "error : cannot divide by zeror";
   }
   return a%b;
  }
  const rem=remainder(8,16);
  console.log(rem);  */

  /*Activiy-2: Assignment  operator
  Task-6: use the += operator and add a number to a vairable and log the result 
  function incrementOperator(x){
   var y=5;
   return  y+=x;
  }
  const result=  incrementOperator(5);
  console.log(result);

  Task-7: use the -= operator and subtract the number to a vairable and log the result 
  function decrementOperator(x){
   let y=Math.floor((Math.random()*100)+1);
   console.log("y =",y)
   return y-=x;
  }
  const result=decrementOperator(5);

  console.log(result); */

  /* Activity-3: comparision operators 
  Task-8:Write a profram to compare two nummber using > and < and log thier result.
  function comparision1(a,b){
  return  (a>b) ? "a is greater" : "b is greater ";
  }
  const result=comparision1(5,9);
  console.log(result); 

  Task-9:Write a profram to compare two nummber using >= and <= and log thier result. 
  function comparision2(a,b){
   return (a>=b)?" a is greater than equal to b":"b is greater than equal to a";
  }
  const result=comparision2(4,55);
  console.log(result); 

  Task-10: write a program to perform comparsion between two number using == and ==== operator. 
  function equality(a,b){
    if(a===b) return "a === b :both data type and value are same";
   else{
      if(a==b) return "a==b :values are same but data type are not ";
      else 
      return "values are different";
   }
  }
  const result = equality(7,"5");
  console.log(result);  */

  /*Acitvity-4:Logical operator
  Task-11:Write a program that uses && operator to combine two condition and log thier result.
  function andOperator(a,b){
   if(a>5 && b>5) return "both value is greater than 5";
   else return "atlest one of tr value is less than 5";
  }
  const result=andOperator(8,8);
  console.log(result);  

  Task-12:write a program that uses || operator to ccombine the two condition and log thier result; 
  function orOperator(a,b){
   if(a>5 || b>5) return "atlest 1 value is greater than 5";
   else return "both the value is less than 5";
  }
  const result=orOperator(2,0);
  console.log(result); 

  Task-13:write a program that uses the ! operator to negate a condition and log the result in console 
  function evenNumber(x){
   return (x%2!=0)?"odd":"even";
  }
  const result=evenNumber(5);
  console.log(result);  */

  /*Activity-05: Ternary Operator
  Task-14:Write a program that uses the ternaey operator to check if the number is positive or negative 
  and log the result in console
  function ternary(x){
  return (x!=0)?((x>0)?"positive number":"negative number"):(" value is neither poitive nor negative");
  }
  const result=ternary(0);
  console.log(result);
   */