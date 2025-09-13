import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Owner from "./pages/Owner"
import About from "./pages/About"
import Petcare from "./pages/Petcare"
import Emergency from "./pages/Emergency"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Feedback from "./pages/Feedback"
import Owner from "./pages/Owner"
import Shelter from "./pages/Shelter"
import Veterinarian from "./pages/Veterinarian"
import Welcome from "./pages/Welcome"
import Events from "./pages/shelter/Events"
import Gallery from "./pages/shelter/Gallery"
import ShelterContact from "./pages/shelter/ShelterContact"
import Stories from "./pages/shelter/Stories"
import TimeSlots from "./pages/veterinarian/TimeSlots"
import CaseStudies from "./pages/veterinarian/CaseStudies"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/" element={<Welcome />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/owner" element={<Owner />} />
            <Route path="/petcare" element={<Petcare />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact" element={<Contact />} />


            <Route path="/shelter" element={<Shelter />} />
            <Route path="/shelter/gallery" element={<Gallery />} />
            <Route path="/shelter/stories" element={<Stories />} />
            <Route path="/shelter/events" element={<Events />} />
            <Route path="/shelter/shelterContact" element={<ShelterContact />} />

            <Route path="/veterinarian" element={<Veterinarian />} />
            <Route path="/veterinarian/timeSlots" element={<TimeSlots />} />
            <Route path="/veterinarian/caseStudies" element={<CaseStudies />} />
          {/* </Route> */}

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
