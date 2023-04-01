// function displayBooks() {
//   let bookList = document.getElementById("book-list");
//   bookList.innerHTML = "";

//   for (let i = 0; i < library.books.length; i++) {
//     let book = library.books[i];

//     let bookInfo = document.createElement("p");
//     bookInfo.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.isRead}`;

//     bookList.appendChild(bookInfo);
//   }
// }

// let addBookButton = document.getElementById("add-book");
// addBookButton.addEventListener("click", addBookToLibrary);

// // Function to remove a book from the library
// // function removeBookFromLibrary (title) {
// //   for (let i = 0; i < library.books.length; i++) {
// //     if (library.books[i].title === title) {
// //       library.books.splice(i, 1)
// //       break
// //     }
// //   }
// // }



// Create a library object with an empty books array
const library = {
  books: []
};

// Book constructor function
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// Function to add a book to the library
function addBookToLibrary() {
  let title = prompt("Enter the book's title:");
  if (title === null) { // User clicked cancel or closed the prompt window
    return;
  }

  let author = prompt("Enter the book's author:");
  if (author === null) { // User clicked cancel or closed the prompt window
    return;
  }

  let pages = parseInt(prompt("Enter the number of pages:"));
  if (isNaN(pages)) { // Pages input is not a number
    return;
  }

  let isRead = confirm("Have you read this book?");
  // Pressing okay = true | Pressing cancel = false

  let book = new Book(title, author, pages, isRead);
  library.books.push(book);

  displayBooks();
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

// // addBookToLibrary('Bible', 'God', 1200, true)
// // addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false)
// // addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, false)
// // addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 277, true)