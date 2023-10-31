import "./App.css";
import Cars from "./components/carList/Cars";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./components/contactForm/ContactForm";
import About from "./components/about/About";
import CarDetail from "./components/carDetail/CarDetail";
import Allan from "./components/Allan";

function App() {
  return (
    <Router>
        <Nav />
      <Routes>
        <Route path="/allan" exact element={<Allan />}/>
        <Route path="/cars"  element={<Cars />}/>
        <Route path="/cars/:id" element={<CarDetail />}/>
        <Route path="/contactUs" element={<ContactForm />}/>
        <Route path="/aboutus" element={ <About />}/>  
      </Routes>
    </Router>
  );
}

export default App;
