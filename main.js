/*
Main file for My Library project
*/
/* eslint-disable no-alert, no-restricted-globals, func-names, no-unused-expressions */
/* eslint-disable no-restricted-syntax, no-undef, prefer-template, operator-assignment */

//        HTML predefined elements

const bookCreatorForm = document.getElementById('collapseContent');
const libraryHolder = document.querySelector('.card-columns');
const alertDiv = document.getElementById('alert');


//      Initial library

const myLibrary = [{
  title: 'Cien años de soledad',
  author: 'Garcia Marquez, Gabriel',
  pages: 800,
  description: 'Tells the multi-generational story of the Buendí9a family, whose patriarch, José Arcadio Buendía, founded the town of Macondo.',
  readStatus: false,
},
{
  title: 'The Little Prince',
  author: 'Antoine de Saint-Exupéry',
  pages: 93,
  description: 'Few stories are as widely read and as universally cherished by children and adults alike as The Little Prince.',
  readStatus: false,
},
{
  title: 'Practical ES6',
  author: ' Aurelio De Rosa, Byron Houwens',
  pages: 256,
  description: 'This book provides an introduction to many of the powerful new JavaScript language features that were introduced in ECMAScript 2015',
  readStatus: false,
},
{
  title: '1984',
  author: 'George Orwell',
  pages: 400,
  description: 'This book is like the dystopian Lord of the Rings, with its richly developed culture and economics.',
  readStatus: false,
},
{
  title: 'The Hate U Give',
  author: 'Angie Thomas',
  pages: 193,
  description: 'A crucially important portrayal of the difficulties minorities face in our country every single day.',
  readStatus: false,
},
{
  title: 'Beginning Ruby: From Novice to Professional',
  author: 'Peter Cooper',
  pages: 585,
  description: 'Learn the principles behind object-oriented programming and within a few chapters create a fully functional Ruby application.',
  readStatus: false,
}];

//      Book constructor
const Book = function (title, author, pages, description, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.readStatus = read;
};

//      Prototyping functions for Book / for demonstration of the lesson only

Book.prototype.info = () => `${this.title} by ${this.author}, ${this.pages}, ${this.readStatus}`;
Book.prototype.toggleReadStatus = () => {
  this.readStatus = !this.readStatus;
};

//      Functions to build library

const addBookToLibrary = function (book, library = myLibrary) {
  library.unshift(book);
};

const validate = (title, author, pages, description) => {
  alertDiv.style.display = 'block';
  if (title === '') {
    alertDiv.innerHTML = 'Please provide a title for this book.';
  } else if (author === '') {
    alertDiv.innerHTML = 'Please provide an author for this book.';
  } else if (pages === '') {
    alertDiv.innerHTML = 'Please provide a number of pages.';
  } else if (description === '') {
    alertDiv.innerHTML = 'Please provide a short description.';
  } else {
    alertDiv.style.display = 'none';
    return true;
  }
  return null;
};

//        Renders all books in page

const updateBookView = () => {
  libraryHolder.innerHTML = '';
  let counter = 0;
  // Create a card with book data and elements
  for (book of myLibrary) {
    counter = counter + 1;

    const newCard = document.createElement('div');
    const newCardBody = document.createElement('div');
    const newBookTitle = document.createElement('h4');
    const newAuthor = document.createElement('p');
    const newPages = document.createElement('p');
    const newDescription = document.createElement('p');
    const newCheckbox = document.createElement('input');
    const newLabel = document.createElement('label');
    const deleteButton = document.createElement('button');

    // Assign attributes to HTML predefined elements
    newCard.className = 'card counter';
    newCard.setAttribute('data-index', counter);
    newCardBody.className = 'card-body';
    newBookTitle.className = 'card-title';
    newAuthor.className = 'author mb-1';
    newPages.className = 'pages mt-0';
    newDescription.className = 'card-text';
    newCheckbox.setAttribute('type', 'checkbox');
    newCheckbox.id = counter;
    newLabel.className = ('readStatus ml-2');
    newLabel.setAttribute('for', counter);
    deleteButton.className = 'btn btn-warning float-right';
    deleteButton.id = counter;

    // Add data to new bootstrap card elements
    newBookTitle.textContent = counter + '. ' + book.title;
    newAuthor.textContent = 'Author: ' + book.author;
    newPages.textContent = 'Pages: ' + book.pages;
    newDescription.textContent = book.description;
    newCheckbox.checked = book.readStatus;
    newLabel.textContent = 'I have read it';
    deleteButton.textContent = 'Delete book';

    // Append bootstrap elements to existing HTML DOM
    const elementsArray = [
      newBookTitle,
      newAuthor,
      newPages,
      newDescription,
      newCheckbox,
      newLabel,
      deleteButton];
    for (const elem of elementsArray) {
      newCardBody.appendChild(elem);
    }
    newCard.appendChild(newCardBody);
    libraryHolder.appendChild(newCard);

    // Checkbox event handler
    newCheckbox.addEventListener('click', (e) => {
      const readCheckbox = myLibrary[e.target.id - 1];
      newCheckbox.checked ? readCheckbox.readStatus = true : readCheckbox.readStatus = false;
    });

    // Delete button event handler
    deleteButton.addEventListener('click', (e) => {
      const c = confirm('Are you sure?');
      if (c) {
        myLibrary.splice(e.target.id - 1, 1);
        updateBookView();
      }
    });
  }
};

//      Submit new book event handler

bookCreatorForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTitle = document.querySelector('#title').value;
  const newAuthor = document.querySelector('#author').value;
  const newPages = document.querySelector('#pages').value;
  const newDescription = document.querySelector('#description').value;
  const newRead = document.querySelector('#read').checked;
  let newBook = {};
  newBook = new Book(newTitle, newAuthor, newPages, newDescription, newRead);

  // Validation of inputs
  if (validate(newTitle, newAuthor, newPages, newDescription, newRead)) {
    addBookToLibrary(newBook);
    bookCreatorForm.reset();
    updateBookView();
    alertDiv.innerHTML = '';
  }
});

//        Start the rendering of books
updateBookView();