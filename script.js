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
function addBookToLibrary (title, author, pages, isRead) {
  // let title = prompt("Enter the book's title:");
  // let author = prompt("Enter the book's author:");
  // let pages = parseInt(prompt("Enter the number of pages:"));
  // let isRead = confirm("Have you read this book?"); // bug where prompts keep looping and there is no option to verify if book is read through prompt

  let book = new Book(title, author, pages, isRead)
  library.books.push(book)
}

// Function to remove a book from the library
function removeBookFromLibrary (title) {
  for (let i = 0; i < library.books.length; i++) {
    if (library.books[i].title === title) {
      library.books.splice(i, 1)
      break
    }
  }
}

addBookToLibrary('Bible', 'God', 1200, true)
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false)
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, false)
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 277, true)

// console.log(library.books) // Output: [Book, Book, Book, Book]

removeBookFromLibrary('To Kill a Mockingbird')

console.log(library.books) // Output: [Book, Book, Book]
