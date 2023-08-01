import { Route, Routes } from "react-router-dom"

import AllBooks from "./pages/AllBooks"
import NewBooks from "./pages/NewBooks"
import Favorites from "./pages/Favorites"
import MainNavigation from "./components/layout/MainNavigation"

function App() {
    return (
        <div>
            <MainNavigation />
            <Routes>
                  <Route path="/" element={<AllBooks />} />
                  <Route path="/new-books" element={<NewBooks />} />
                  <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </div>
    )
}

export default App
