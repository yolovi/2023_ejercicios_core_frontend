import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path= "/" element={<Home />}/>
          <Route path= "/Contact" element={<Contact />} />
          <Route path= "/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
