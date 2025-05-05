import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import Header from "./Components/Header";
import Footer from "./Components/footer";
import Loading from "./pages/loading";
import Home from "./pages/home";
import Introducing from "./pages/introducing";

import "./App.css";

function App() {
    const location = useLocation();

  return (
      <div className="app">
        <Header />
        <main className="main-content">
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Loading />} /> 
            <Route path="/loading" element={<Loading />} />
            <Route path="/home" element={<Home />} />
            <Route path="/introducing" element={<Introducing/>}/>
          </Routes>
          </AnimatePresence>
        </main>
        <Footer/>
      </div>
  );
}

export default App;