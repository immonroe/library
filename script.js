// Create a library object with an empty books array
const library = {
  books: []
}

// Book constructor function
function Book (title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
}

// Function to add a book to the library
function addBookToLibrary(title, author, pages, isRead) {
  let book = new Book(title, author, pages, isRead);
  library.books.push(book);
}

// Function to remove a book from the library
function removeBookFromLibrary(title) {
  for (let i = 0; i < library.books.length; i++) {
    if (library.books[i].title === title) {
      library.books.splice(i, 1)
      break
    }
  }
}
