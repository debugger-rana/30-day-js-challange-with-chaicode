//task-01
// let arr=[1,2,3,4,5];
// console.log(arr);

//task-02:
// let arr=[1,2,3,4,5];
// const firstEleent=arr[0];
// const lastElement=arr[arr.length-1];
// console.log(`first element:`,firstEleent);
// console.log(`lastelement:`,lastElement);

//task-03:
// let arr=[1,2,3,4,5];
// arr.push(6);
// console.log(arr);

//task-04:
// let arr=[1,2,3,4,5];
// arr.pop();
// console.log(arr);

//task-05:
// let arr=[1,2,3,4,5];
// arr.shift();
// console.log(arr);

//task-06:
// let arr=[1,2,3,4,5];
// arr.unshift(0);
// console.log(arr);

//task-07:
// let arr=[1,2,3,4,5];
// const updatedArray= arr.map(arr1=>arr1*arr1);
// console.log(updatedArray);

//task-08:
// let arr=[1,2,3,4,5];
// const filteredArray=arr.filter(arr1=>arr1%2==0);
// console.log(filteredArray);

//task-09:
// let arr=[1,2,3,4,5];
// const sumArray=arr.reduce((sum,arr1)=>sum+arr1,0);
// console.log(sumArray);

//task-10:
// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++)[
//     console.log(arr[i])
// ]

//task-11:
// let arr=[1,2,3,4,5];
// arr.forEach(ele => {
//     console.log(ele);
// });

//task-12:
// function create2dArray(rows,cols){
//     {
//         const matrix=[];
//         for(let i=0;i<rows;i++){
//             matrix[i]=new Array(cols).fill(0);
//         }
//         for(let i=0;i<rows;i++){
//             console.log(matrix[i]);
//         }
//     }
// }
// create2dArray(3,4);

//task-13:
// function accessAndLogElement(matrix,row,col){
//     if(row<0||row>=matrix.length||col<0||col>=matrix[0].length){
//         console.log("Invalid rows and cols");
//         return;
//     }
//     const element=matrix[row][col];
//     console.log(`element at row ${row} coloum ${col}:`,element);
// }
// const matrix=[[1,2,3],[4,5,6],[7,8,9]];

// accessAndLogElement(matrix,1,2);