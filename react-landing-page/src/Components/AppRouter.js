import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Home"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Explore from "./Explore/Explore"



const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/explore" element={<Explore />} />
        </Routes>
       
      </BrowserRouter>
    </div>
  )
}

export default AppRouter