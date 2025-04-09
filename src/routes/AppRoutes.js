import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/Home"
import MovieDetails from "../pages/MovieDetails"
import Favorites from "../pages/Favorites"
import NotFound from "../pages/NotFound"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default AppRoutes
