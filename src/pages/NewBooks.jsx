import { useNavigate } from 'react-router-dom'

import NewBookForm from "../components/layout/books/NewBookForm";

function NewBooks() {
    const navigate = useNavigate();

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
        )
        .then(() => {
            navigate('/');
        });
    }

    return (
        <div>
            <h2>Add New Book</h2>
            <NewBookForm onAddMeetup={addMeetupHandler} />
        </div>
    );
}

export default NewBooks;