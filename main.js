/* 
Main file for My Library project
*/
//        For testing purposes

const log = e => console.log(e) 
const check1 = () => console.log('---------- check -----------')

//        Work with HTML predefined elements

const bookCreatorForm = document.getElementById('collapseContent') //? 
const libraryHolder = document.querySelector('.card-columns')
const bookHolder = document.querySelector('.card')

//      Initial library

let myLibrary = [{
  title: '1. Cien años de soledad',
  author: 'Garcia Marquez, Gabriel',
  pages: 800,
  description: 'Tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the town of Macondo.',
  readStatus: true
},
{
  title: '2. The Little Prince',
  author: 'Antoine de Saint-Exupéry',
  pages: 93,
  description: 'Few stories are as widely read and as universally cherished by children and adults alike as The Little Prince.',
  readStatus: true
},
{
  title: '3. Practical ES6',
  author: ' Aurelio De Rosa, Byron Houwens',
  pages: 256,
  description: 'This book provides an introduction to many of the powerful new JavaScript language features that were introduced in ECMAScript 2015',
  readStatus: true
},
{
  title: '4. 1984',
  author: 'George Orwell',
  pages: 400,
  description: 'This book is like the dystopian Lord of the Rings, with its richly developed culture and economics.',
  readStatus: true
},
{
  title: '5. The Hate U Give',
  author: 'Angie Thomas',
  pages: 193,
  description: 'A crucially important portrayal of the difficulties minorities face in our country every single day.',
  readStatus: true
},
{
  title: '6. Beginning Ruby: From Novice to Professional',
  author: 'Peter Cooper',
  pages: 585,
  description: 'Learn the principles behind object-oriented programming and within a few chapters create a fully functional Ruby application.',
  readStatus: true
}]

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

  //Validation of inputs
  //   if (newTitle.value === "") {
  //     alert("Fill in a title.")
  //     return false
  // } else if (newAuthor === "") {
  //     alert("Fill in an author.")
  //     return false
  // } else if (newPages === "") {
  //     alert("Fill in pages with numbers.")
  //     return false
  // } else if (newDescription === "") {
  //   alert("Fill in a description")
  //   return false
  // }


  //Clear values of form inputs
  document.querySelector('#title').value = ''
  document.querySelector('#author').value = ''
  document.querySelector('#pages').value = ''
  document.querySelector('#description').value = ''
})


//        Renders all books in page

const updateBookView = () => {
  libraryHolder.innerHTML = ''
  let counter = 0
  // Create a card with book data and elements
  for (book of myLibrary){
    counter++
    log('book number: ' + counter)
    
    const newCard = document.createElement('div')
    const newCardBody = document.createElement('div')
    const newBookTitle = document.createElement('h4')
    const newAuthor =document.createElement('p')
    const newPages = document.createElement('p')
    const newDescription = document.createElement('p')
    const newCheckbox = document.createElement('input')
    const deleteButton = document.createElement('button')

    // Assign attributes to HTML predefined elements
    newCard.className = 'card counter'
    newCard.setAttribute('data-index', counter);
    newCardBody.className = 'card-body'
    newBookTitle.className = 'card-title'
    newAuthor.className = 'author mb-1'
    newPages.className = 'pages mt-0'
    newDescription.className = 'card-text'
    newCheckbox.setAttribute('type', 'checkbox')
    deleteButton.className = `btn btn-warning`
    deleteButton.id = counter
    
    // Add data to new bootstrap card elements
    newBookTitle.textContent = book.title
    newAuthor.textContent = 'Author: ' + book.author
    newPages.textContent = 'Pages: ' + book.pages
    newDescription.textContent = book.description
    newCheckbox.value = false
    deleteButton.textContent = 'Delete'

    // Append bootstrap elements to existing HTML DOM 
    const elementsArray = [newBookTitle,
                          newAuthor,
                          newPages,
                          newDescription,
                          newCheckbox,
                          deleteButton]
    for(const elem of elementsArray) {
      newCardBody.appendChild(elem)
    }
    newCard.appendChild(newCardBody)
    libraryHolder.appendChild(newCard)

    //Delete button event handler
    deleteButton.addEventListener('click', (e) => {
      myLibrary.splice(e.target.id-1, 1)
      updateBookView()
    })
  }
}

updateBookView()
log(myLibrary[3])