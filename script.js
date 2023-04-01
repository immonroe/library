// Create a library object with an empty books array
const library = {
  books: [
    {
      title: "Mere Christianity",
      author: "C.S. Lewis",
      pages: 227,
      isRead: false
    },
    {
      title: "The Ruthless Elimination of Hurry",
      author: "John Mark Comer",
      pages: 304,
      isRead: true
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      pages: 320,
      isRead: true
    }
  ]
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
  library.books.push(book); // New books created will be added to books array in library object

  displayBooks();
}

// Function to remove a book from the library
// function removeBookFromLibrary (title) {
//   for (let i = 0; i < library.books.length; i++) {
//     if (library.books[i].title === title) {
//       library.books.splice(i, 1)
//       break
//     }
//   }
// }

function displayBooks() {
  let bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  for (let i = 0; i < library.books.length; i++) {
    let book = library.books[i];

    let bookInfo = document.createElement("div");
    bookInfo.classList.add("card");

    let bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;
    bookInfo.appendChild(bookTitle);

    let bookAuthor = document.createElement("p");
    bookAuthor.classList.add("author");
    bookAuthor.textContent = `Author: ${book.author}`;
    bookInfo.appendChild(bookAuthor);

    let bookPages = document.createElement("p");
    bookPages.classList.add("pages");
    bookPages.textContent = `Pages: ${book.pages}`;
    bookInfo.appendChild(bookPages);

    let bookRead = document.createElement("p");
    bookRead.textContent = `Read: ${book.isRead ? "Yes" : "No"}`;
    bookInfo.appendChild(bookRead);

    bookList.appendChild(bookInfo);
  }
}


// Alternate way to add books to library upon load of page (sample books)
// library.books.push(new Book("The Catcher in the Rye", "J.D. Salinger", 234, false));
// library.books.push(new Book("Pride and Prejudice", "Jane Austen", 432, true));

displayBooks();

let addBookButton = document.getElementById("add-book");
addBookButton.addEventListener("click", addBookToLibrary);