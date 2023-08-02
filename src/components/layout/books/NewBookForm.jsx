import Card from '../../ui/Card'
import classes from './NewBookForm.module.css'

function NewBookForm() {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title">Book Title</label>
                    <input type="text" required id="title" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Book Image</label>
                    <input type="url" required id="image" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="author">Author</label>
                    <input type="text" required id="author" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows={5}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Book</button>
                </div>
            </form>
        </Card>
    )
}

export default NewBookForm;