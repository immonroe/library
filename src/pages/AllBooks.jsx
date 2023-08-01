const DUMMY_DATA = [

    {
      id: 'm1',
      title: 'This is the first book',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      Author: 'Testing',
      description:
        'A really good book',
    },
    {
      id: 'm2',
      title: 'This is the second book',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'YAYA YEET',
      description:
        'This book changed my life!',
    },
];

function AllBooks() {
    return (
      <section>
        <h1>All Meetups</h1>
        <ul>
          {DUMMY_DATA.map((book) => {
            return <li key={book.id}>{book.title}</li>;
          })}
        </ul>
      </section>
    );
  }

export default AllBooks;