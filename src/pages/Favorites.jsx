import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import BookList from "../components/books/BookList";

function Favorites() {
    const favoritesCtx = useContext(FavoritesContext)

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You currently have no favorites.</p>
    } else {
       content = <BookList books={favoritesCtx.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default Favorites;