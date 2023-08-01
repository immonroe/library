import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css'

function MainNavigation() {
    return <header className={classes.header}>
        <div className={classes.logo}>Library</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Books</Link>
                </li>
                <li>
                    <Link to='/new-books'>Add New Book</Link>
                </li>
                <li>
                    <Link to='/favorites'>My Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;