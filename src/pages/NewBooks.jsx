import { useNavigate } from 'react-router-dom'

import NewBookForm from "../components/books/NewBookForm";

function NewBooks() {
    const navigate = useNavigate();

    function addBookHandler(bookData) {
        fetch(
            'https://library-react-app-7dd08-default-rtdb.firebaseio.com/books.json',
            {
                method: 'POST',
                body: JSON.stringify(bookData),
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
            <NewBookForm onAddBook={addBookHandler} />
        </div>
    );
}

export default NewBooks;