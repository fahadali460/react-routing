import { Routes, Route } from "react-router-dom";
import Home from "./sun_work/Home";
import About from "./sun_work/About";
import Contact from "./sun_work/Contact";
import Navbar from "./Navbar";
import NotFound from "./sun_work/NotFound";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </>
  );
}

export default App;