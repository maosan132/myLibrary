/* 
Main file for My Library project
*/
//        For testing purposes

const log = e => console.log(e) 
const check1 = () => console.log('---------- check -----------')
const check2 = () => console.log('********** check ***********')

//        Work with HTML predefined elements
const bookCreatorForm = document.getElementById('collapseContent') //? 
const libraryHolder = document.querySelector('.card-group')
const bookHolder = document.querySelector('.card')
const newCard = document.createElement('div')
const newCardBody = document.createElement('div')
const newBookTitle = document.createElement('h4')
const newAuthor =document.createElement('p')
const newPages = document.createElement('p')
const newDescription = document.createElement('p')
const newCheckbox = document.createElement('input')
const deleteButton = document.createElement('button')

//      Initial library
const currentLibrary = [
  {
    title: 'The Parfum',
    author: 'Patrick Suskind',
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

//      Prototyping both info and read status toggler functions for Book

Book.prototype.info = () => `${this.title} by ${this.author}, ${this.pages}, ${this.readStatus}`

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

const addBookToLibrary = function (book, library = myLibrary) {
  library.push(book)
  log(`${book.title} by ${book.author} was added to library
  ${log(library)}`)
}

let secondBook = new Book('4323452345', '8757567', 24, true)

//log(firstBook.title)
addBookToLibrary(secondBook, myLibrary)
log(myLibrary)


//      Update page with lastest books



//      Submit new book event handler

bookCreatorForm.addEventListener('submit', (e) => {
  e.preventDefault()
  log('form submitted')
  const newTitle = document.querySelector('#title').value
  const newAuthor = document.querySelector('#author').value
  const newPages = document.querySelector('#pages').value
  const newDescription = document.querySelector('#description').value
  const newRead = document.querySelector('#read').value
  let newBook = {} 
  
  newBook = new Book(newTitle, newAuthor, newPages, newDescription, newRead)
  addBookToLibrary(newBook)
  bookCreatorForm.reset();
  updateBookView()
})

//        Delete button event handler
deleteButton.addEventListener('click', () => {
  const index = myLibrary.findIndex(i => i === book)
  myLibrary.splice(index, 1)
  updateBookView()
})

//        Renders all books in page

const updateBookView = () => {
  libraryHolder.innerHTML = ''

  // Create a card with book data and elements
  for (book of myLibrary){
    // Assign attributes to HTML predefined elements
    newCard.className = 'card'
    newCardBody.className = 'card-body'
    newBookTitle.className = 'card-title'
    newAuthor.className = 'author mb-1'
    newPages.className = 'pages mt-0'
    newDescription.className = 'card-text'
    newCheckbox.setAttribute('type', 'checkbox')
    deleteButton.className = 'btn btn-warning'
    
    // Add data to new bootstrap card elements
    newBookTitle.textContent = book.title
    log('title:' + book.title)
    newAuthor.textContent = book.author
    log('author:' + book.author)
    newPages.textContent = book.pages
    log('pages:' + book.pages)
    newDescription.textContent = book.description
    log('descripton:' + book.description)
    newCheckbox.value = false
    deleteButton.textContent = 'Delete'

    // Append bootstrap elements to existing HTML DOM 
    const elementsArray = [newBookTitle,
                          newAuthor,
                          newPages,
                          newDescription,
                          newCheckbox,
                          deleteButton]
    // Iterate over Book card elements and append them to their inmediate parent
    for(const elem of elementsArray) {
      newCardBody.appendChild(elem)
    }
    newCard.appendChild(newCardBody)
    libraryHolder.appendChild(newCard)
    // let colors = ['red', 'green', 'blue'];

    // array.forEach((item, index) => {
    //   console.log(item, index);
    // });

    // for (const color of colors){
    //     console.log(color);
    // }

    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#pages').value = ''
    document.querySelector('#description').value = ''
  }

}


