import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Loading from './loading';
import Home from './home';


function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Loading />} /> 
        <Route path="/loading" element={<Loading />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
