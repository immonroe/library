let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

const book = new Book('Bible', 'God', '1200', 'yes')
console.log(book.title)

function addBookToLibrary() {
  // do stuff here
}