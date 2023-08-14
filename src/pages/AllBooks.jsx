import { useState, useEffect } from 'react';

import BookList from "../components/layout/books/BookList";

function AllBooks() {
    const[isLoading, setIsLoading] = useState(true);
    const[loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(() => {
      setIsLoading(true);
      fetch('https://library-react-app-7dd08-default-rtdb.firebaseio.com/books.json'
      )
        .then(response => {
          return response.json();
        }).
        then((data) => {
          const meetups = [];

          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key]
            }

            meetups.push(meetup)
          }

          setIsLoading(false)
          setLoadedMeetups(meetups)
        });
    }, []); 

    if (isLoading) {
      <section>
        <p>Loading...</p>
      </section>
    }

    return (
      <section>
        <h1>All Books</h1>
        <BookList books={loadedMeetups} />
      </section>
    );
  }

export default AllBooks;