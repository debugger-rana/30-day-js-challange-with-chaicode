 /*Activity-1: If Else Statement
Task-01:write a program o ceck if a number is positive negative or zero and log thier result.
function check1(x){
if(x>0) return "its positive number"
else if(x<0)  return " its a negative number "
else return "its a zero number"
}
const result=check1(0);
console.log(result);

Task-02:write a prorgrm to check if  apreson is elegible to vote or not and log the result in console 
function voteEleigble(age){
    if(age>=18) return "person is eligible to vote"
    else return "person is not eligible to vote"
}
const result = voteEleigble(9);
console.log(result); 
*/

/* Activity-2:Nested if-Else Statement
   Task-03: Write a program to find a largest of the 3 number using nested if-else statement. 
   function largestOfThreeNumber(a,b,c){
    if(a>b){
        if(a>c) return "a is largest of 3 number"
        else return "c is largest of all 3 number "
    }
    else{
        if(b>c) return "b is largest of all 3 number"
        else return "c is largest of all 3 number"
    }
   }
   const largest=largestOfThreeNumber(23,5,222);
   console.log(largest)  */

   /*Activity-3: Switch cases
   Task-04:Write a program that uses switch cases to determine day of the week based on a number(1-7) 
   and log the day name 
   function weekDay(x){
    let day;
    switch(x-1){
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesady";
            break;
        case 4:
            day="Thrusday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
        
    }
    return day;
   }

   const day=weekDay(1);
   console.log(day);  
   
   Task-05:Write a program that uses switch case to assign a grade to ('A','B','C','D','F') base on the score
        and log the grade on the console. 
    function gradeSwitch(marks){
        switch(marks<=100 && marks>=0){
            case(marks<=100 && marks>80):
            return "A"
            case(marks<=80 && marks>70):
            return "B"
            case(marks<=70 && marks>60):
            return "C"
            case(marks<=60 && marks>50):
            return "D"
            case(marks<=50 && marks>35):
            return "E"
            default: return "F";
        }
    }
    const mark=gradeSwitch(50);
    console.log(mark)
    */

/* Activity-04:(conditional)Ternary operator
   Task-06: Write a program that uses ternary operator to check if a number is even or odd and log thier result 
   function oddEven(n){
    return (n%2==0)?"even":"odd";
   }

   const result=oddEven(8);
   console.log(result); 
   */
/* Activity-05:Combining Condition
Task-07:Write a program to check if a number is a leap year multiple conditions and log thier result.
function leapYearCheck(year){
    if(year%400==0) return "the "+ year+" is a leap year"
    
    if(year%4==0 && year%100!=0) return "year "+year+" is a leap year";
    
    return "year "+year+" is not a leap year";
} 
const result=leapYearCheck(2025);
console.log(result);
 */