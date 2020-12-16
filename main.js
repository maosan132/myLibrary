let myLibrary = [];

function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.readStatus = function() {
    if (read === true){
      return 'not read yet'
    } else {
      return 'already read'
    }
  }
  this.info = function() {
    return name + 'by ' + author + ', ' + pages + ' pages, ' + readStatus()
  }
}
 

function addBookToLibrary() {
  // do stuff here
}