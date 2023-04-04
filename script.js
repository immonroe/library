const addBookButton = document.getElementById("add-book");
const bookModal = document.getElementById("book-modal");
const closeBtn = document.querySelector(".close");
const addBookBtn = document.getElementById("add-book-btn");
const books = [];

// Open the modal
addBookButton.addEventListener("click", function() {
  bookModal.style.display = "block";
});

// Close the modal when clicking on the X button
closeBtn.addEventListener("click", function() {
  bookModal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", function(event) {
  if (event.target == bookModal) {
    bookModal.style.display = "none";
  }
});

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

// function addBookToLibrary() {
//   // Get input values
//   const addBookForm = document.querySelector("form");
//   const title = document.getElementById("title").value;
//   const author = document.getElementById("author").value;
//   const pages = document.getElementById("pages").value;
//   const isRead = document.getElementById("read").checked;

//   // Create new book object
//   const newBook = new Book(title, author, pages, isRead);

//   // Add new book to library
//   library.books.push(newBook);

//   // Clear form and close modal
//   document.getElementById("add-book-form").reset();
//   bookModal.style.display = "none";

//   // Refresh book list
//   displayBooks();
// }

function addBookToLibrary() {
  const addBookForm = document.querySelector("form");
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("read").checked;
  const book = new Book(title, author, pages, isRead);
  library.books.push(book);
  addBookForm.reset();
  bookModal.style.display = "none";
  displayBooks();
}

// Add event listener to add book button
addBookBtn.addEventListener("click", addBookToLibrary);

// Display initial book list
displayBooks();
