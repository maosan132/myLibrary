/* 
main file for My Library project

First 6 expressions are shorter versions of commonly used functions: console.log, etc. Use it at will
*/
const log = e => console.log(e)
const getIdEl = e => document.getElementById(e)
const getClasEl = e => document.getElementsByClassName(e)
const newEl = e => document.createElement(e)
const newTxt = e => document.createTextNode(e)
const querEl = e => document.querySeector(e)

log('main.js loaded') //?
//work with HTML elements
const bookCreatorForm = getIdEl("collapseContent") //? 
log(bookCreatorForm) //? 
let newCard = newEl('div')
let newCardTitle = newEl('h4')
let newCard
const currentLibrary = []
let myLibrary = [
  {
    title: "The Parfum",
    author: "Patrick Suskind",
    pages: 354,
    read: true
  }]

const Book = function(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
};

Book.prototype.info = () => `${this.title} by ${this.author}, ${this.pages}, ${this.read}`

const addBookToLibrary = function (book, library) {
  library.push(book)
  log(`${book.title} by ${book.author} was added to library
  ${log(library)}`)
}

let secondBook = new Book('4323452345', '8757567', 24, true)

//log(firstBook.title)
addBookToLibrary(secondBook, myLibrary)
log(myLibrary)

bookCreatorForm.addEventListener('submit', (e) => {
  e.preventDefault()
  log('form submitted') //not refreshing index.html for data retaining purposes
  
})


// Book.prototype.updateReadState = function updateReadState() {
//   if (this.read == true) {
//     this.read = false
//   }else {
//     this.read = true
//   }
// }

// const name = querySelect("#name");
// const author = querySelect("#author");
// const pages = querySelect("#pages");
// const read = querySelect("#read");
// const form = querySelect("form").addEventListener("submit", function(e) {  
//   addBookToLibrary();
// });

// function addBookToLibrary() {
//   // do stuff here
// }

// function render(books) {

// }

