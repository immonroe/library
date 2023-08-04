import { useRef } from 'react';
import Card from '../../ui/Card'
import classes from './NewBookForm.module.css'

function NewBookForm() {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const authorInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAuthor = authorInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            author: enteredAuthor,
            description: enteredDescription,
        }

        console.log(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Book Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Book Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="author">Author</label>
                    <input type="text" required id="author" ref={authorInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows='5' ref={descriptionInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Add Book</button>
                </div>
            </form>
        </Card>
    )
}

export default NewBookForm;
