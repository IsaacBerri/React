import "../styles/App.css";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import About from "../pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";

function App() {

  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/product" Component={Product} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={About} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
