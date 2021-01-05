/* 
main file for My Library project

First 6 expressions are shorter versions of commonly used functions: console.log, etc. Use it at will
*/
const log = e => console.log(e)
const getIdEl = e => document.getElementById(e)
const getClasEl = e => document.getElementsByClassName(e)
const newEl = e => document.createElement(e)
const newTxt = e => document.createTextNode(e)
const queSel = e => document.querySelector(e)

log('main.js loaded') //?
//work with HTML elements
const bookCreatorForm = getIdEl("collapseContent") //? 
log(bookCreatorForm) //? 
let newCard = newEl('div')
let newCardTitle = newEl('h4')
let newAuthor = newPages = newEl('span')
log(newPages, newAuthor)
let newRadioButton = newEl('input')
newRadioButton.setAttribute('type', 'radio')
newRadioButton.value = false



//initial library

const currentLibrary = [
  {
    title: "The Parfum",
    author: "Patrick Suskind",
    pages: 354,
    read: true
  }
]
let myLibrary = []

//      Book constructor
const Book = function(title, author, pages, description, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.description = description
  this.readStatus = read
};

//      prototyping both info and read status toggler functions for Book
Book.prototype.info = () => `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
Book.prototype.toggleReadStatus = () =>{
  this.readStatus = !this.readStatus;
};

// Book.prototype.updateReadState = function updateReadState() {
//   if (this.read == true) {
//     this.read = false
//   }else {
//     this.read = true
//   }
// }


//      Functions to build library
const addCurrentBookToLibrary = () => {}

const addBookToLibrary = function (book, library) {
  library.push(book)
  log(`${book.title} by ${book.author} was added to library
  ${log(library)}`)
}

// const removeBookFromLibrary = function (book, library) {
//   library.push(book)
//   log(`${book.title} by ${book.author} was added to library
//   ${log(library)}`)
// }

let secondBook = new Book('4323452345', '8757567', 24, true)

//log(firstBook.title)
addBookToLibrary(secondBook, myLibrary)
log(myLibrary)


//      Update page with lastest books



//      submit book event handler
bookCreatorForm.addEventListener('submit', (e) => {
  e.preventDefault()
  log('form submitted') //not refreshing index.html for data retaining purposes
  const newTitle = queSel("#title").value
  const newAuthor = queSel("#author").value
  const newPages = queSel("#pages").value
  const newDescription = queSel("#description").value
  const newRead = queSel("#read").value
  let newBook = {} 
  newBook = new Book(newTitle, newAuthor, newPages, newDescription, newRead)
  addBookToLibrary(newBook)
  updateBookView()
  log(newAuthor)
  
})


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

