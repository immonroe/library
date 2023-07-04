// Selectors
const addBookButton = document.getElementById("add-book"); // opens modal menu
const bookModal = document.getElementById("book-modal");
const closeBtn = document.querySelector(".close");
const addBookBtn = document.getElementById("add-book-btn"); // appends book to books array in library object

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

class Library {
  constructor() {
    this.books = [
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
      },
      {
        title: "New Book 1",
        author: "Author 1",
        pages: 200,
        isRead: false
      },
      {
        title: "New Book 2",
        author: "Author 2",
        pages: 150,
        isRead: true
      }
    ];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  toggleReadStatus() {
    this.isRead = !this.isRead;
  }
}

function displayBooks() {
  let bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  for (let i = 0; i < library.books.length; i++) {
    let book = library.books[i];

    let bookInfo = document.createElement("div");
    bookInfo.classList.add("card");
    bookInfo.classList.add("book-card");

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

    let bookRead = document.createElement("button");
    bookRead.classList.add("is-read");
    bookRead.textContent = book.isRead ? "Read" : "Unread";
    bookRead.style.backgroundColor = book.isRead ? "green" : "red";
    bookRead.addEventListener("click", function() {
      book.toggleReadStatus();
      this.textContent = book.isRead ? "Read" : "Unread";
      this.style.backgroundColor = book.isRead ? "green" : "red";
    });
    bookInfo.appendChild(bookRead);

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      library.removeBook(book);
      displayBooks();
    });

    bookInfo.appendChild(removeButton);

    bookList.appendChild(bookInfo);
  }
}

function addBookToLibrary() {
  // Get input values
  const addBookForm = document.querySelector("form");
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("read").checked;

  // Create new book object
  const book = new Book(title, author, pages, isRead);

  // Validate input
  if (!title || !author || !pages) {
    alert("Please fill in all required fields.");
    return;
  }

  // Add new book to library
  library.addBook(book);

  // Clear form and close modal
  addBookForm.reset();
  bookModal.style.display = "none";

  // Refresh book list
  displayBooks();
}

// Create a library object
const library = new Library();

// Add event listener to add book button
addBookBtn.addEventListener("click", addBookToLibrary);

// Display initial book list
displayBooks();
