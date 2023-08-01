import { Route, Routes, BrowserRouter } from "react-router-dom"

import AllBooks from "./pages/AllBooks"
import NewBooks from "./pages/NewBooks"
import Favorites from "./pages/Favorites"

function App() {
    return (
        <div>
          <Routes>
                <Route path="/" element={<AllBooks />} />
                <Route path="/new-books" element={<NewBooks />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </div>
    )
}

export default App
