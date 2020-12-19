function getEl(x) {return document.getElementById(x)} //shorter
function createEl(x) {return document.createElement(x)} // shorter
function querySelect(x) {return document.querySelector(x)} // shorter

let myLibrary = [
  {
    title: "The Parfum",
    author: "Patrick Suskind",
    pages: 354,
    read: true
  },
  {
    title: "100 years of solitude",
    author: "Gabriel García",
    pages: 554,
    read: false
  }];

function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
  }
};
 
book.prototype.updateReadState = function updateReadState() {
  if (this.read == true) {
    this.read = false
  }else {
    this.read = true
  }
}

const name = querySelect("#name");
const author = querySelect("#author");
const pages = querySelect("#pages");
const read = querySelect("#read");
const form = querySelect("form").addEventListener("submit", function(e) {  
  addBookToLibrary();
});

function addBookToLibrary() {
  // do stuff here
}

function render(books) {

}

