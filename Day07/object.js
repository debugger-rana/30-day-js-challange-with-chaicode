//task01
// const book={
//     title:"the monk who sold his farreri",
//     author:"Robin Sharma",
//     year:2000
// }
// console.log(book);
//task02-
// console.log(book.title);
// console.log(book.author);

//task03
// book["getBookInfo"]=function(){
//     return `${this.title} by ${this.author}`
// };
// console.log(book.getBookInfo());

//task04:
// book["update"]=function(updateYear){
//     this.year=updateYear;
//     return `updated year is :${this.year} `
// }
// console.log(book.update(2014));
// console.log(book);


//task04:Nested Object-
function bookName(book,author,year){
    this.book=book,
    this.author=author,
    this.year=year
};

const library={
    name:"",
    books:[]
};

library.name="Indian National library";
const book1= new bookName("the monk who sold his farrier","Robin Sharma",2000);
const book2= new bookName("the power of subconcious mind","Dr Joseph Murphy",2002);

library.books.push(book1,book2);

console.log(library);

//task06:Nested Object
// console.log(library.name);
// console.log(library.books[0].book);

//task07:this keyword
bookName.prototype.getBookInfo = function() {
  return `Book Title: ${this.book}, Year: ${this.year}`;
};
// console.log(book1.getBookInfo());

//task08:Object iteration
for (let property in book1) {
  console.log(`${property}: ${book1[property]}`);
}

//task09:
const keys = Object.keys(book1);
for (let i = 0; i < keys.length; i++) {
  console.log(`${keys[i]}: ${book1[keys[i]]}`);
}

// Using Object.values
const values = Object.values(book1);
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}
