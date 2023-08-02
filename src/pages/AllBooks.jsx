import BookList from "../components/layout/books/BookList";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is the first book',
      image:
        'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg',
      author: 'Manny',
      description:
        'Great book, changed my life and helped me discover my passion for underwater basket weaving!',
    },
    {
      id: 'm2',
      title: 'This is the second book',
      image:
        'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg',
      author: 'Generic author name',
      description:
        'This book was honestly terrible, not sure who decided to write it but hey I finished it so it must have been somewhat enjoyable',
    },
];

function AllBooks() {
    return (
      <section>
        <h1>All Books</h1>
        <BookList books={DUMMY_DATA} />
      </section>
    );
  }

export default AllBooks;