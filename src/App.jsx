import { Route, Routes } from "react-router-dom"

import AllBooks from "./pages/AllBooks"
import NewBooks from "./pages/NewBooks"
import Favorites from "./pages/Favorites"
import MainNavigation from "./components/layout/MainNavigation"
import Layout from "./components/layout/Layout"

function App() {
    return (
        <Layout>
            <Routes>
                  <Route path="/" element={<AllBooks />} />
                  <Route path="/new-books" element={<NewBooks />} />
                  <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </Layout>
    )
}

export default App
