import "bootstrap/dist/css/bootstrap.min.css";
import  './/style.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home";
import Contacto from "./views/Contacto";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
