import NewBookForm from "../components/layout/books/NewBookForm";

function NewBooks() {
    function addMeetupHandler(meetupData) {
        fetch(
            'https://library-react-app-7dd08-default-rtdb.firebaseio.com/books.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );
    }

    return (
        <section>
            <div>New Books</div>
            <NewBookForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewBooks;
