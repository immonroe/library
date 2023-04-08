// selectors
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

// Create a library object with an empty books array
const library = {
  books: [
    {
      title: "Mere Christianity",
      author: "C.S. Lewis",
      pages: 227,
      isRead: false
    },
    // {
    //   title: "The Ruthless Elimination of Hurry",
    //   author: "John Mark Comer",
    //   pages: 304,
    //   isRead: true
    // },
    // {
    //   title: "Atomic Habits",
    //   author: "James Clear",
    //   pages: 320,
    //   isRead: true
    // }
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
    // bookPages.textContent = `Pages: ${book.pages}`;
    bookInfo.appendChild(bookPages);

    let bookRead = document.createElement("button");
    bookRead.classList.add("is-read");
    bookRead.textContent = book.isRead ? "Read" : "Unread";
    bookRead.style.backgroundColor = book.isRead ? "green" : "red";
    bookRead.addEventListener("click", function() {
      book.isRead = !book.isRead; // toggle the isRead status
      this.textContent = book.isRead ? "Read" : "Unread";
      this.style.backgroundColor = book.isRead ? "green" : "red";
    });
    bookInfo.appendChild(bookRead);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      const index = library.books.indexOf(book);
      library.books.splice(index, 1);
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

  // Add new book to library
  library.books.push(book);

  // Validate input
  if (!title || !author || !pages) {
    alert("Please fill in all required fields.");
    return;
  }

  // Clear form and close modal
  addBookForm.reset();
  bookModal.style.display = "none";

  // Refresh book list
  displayBooks();
}

// Add event listener to add book button
addBookBtn.addEventListener("click", addBookToLibrary);

// Display initial book list
displayBooks();