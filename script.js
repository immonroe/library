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
  let book = new Book(title, author, pages, isRead)
  library.books.push(book)
  // Create a button that calls the function with a popout asking for information?
  displayBooks()
}

function displayBooks() {
  let bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  for (let i = 0; i < library.books.length; i++) {
    let book = library.books[i];

    let bookInfo = document.createElement("p");
    bookInfo.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.isRead}`;

    bookList.appendChild(bookInfo);
  }
}

let addBookButton = document.getElementById("add-book");
addBookButton.addEventListener("click", addBookToLibrary);

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
