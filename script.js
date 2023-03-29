let myLibrary = []

function Book (title, author, pages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.sayTitle = function () {
  console.log(this.title)
}

Book.prototype.sayAuthor = function () {
  console.log(this.author)
}

Book.prototype.sayPages = function () {
  console.log(this.pages)
}

Book.prototype.sayRead = function () {
  console.log(this.read)
}

const bookOne = new Book('Bible', 'God', '1200', 'yes')
bookOne.sayTitle()

const bookTwo = new Book('Lord of the Rings', 'J.R.R. Tolkien', '1178', 'no')
bookTwo.sayAuthor()

function addBookToLibrary() {
  // do stuff here
  // create function to loop over items and add them to myLibrary array
}