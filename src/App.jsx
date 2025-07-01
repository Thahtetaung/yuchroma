import Navbar from './components/Navbar';

import Footer from './components/Footer.jsx';
import {Route , Routes } from 'react-router-dom';
import Aboutme from './pages/Aboutme.jsx';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Hireme from './pages/Hireme.jsx';
import Food from './pages/Food.jsx';
import Portraits from './pages/Portraits.jsx';
import Street from './pages/Street.jsx';
import Wedding from './pages/Wedding.jsx';

export default function App() {
  return (
    <>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/food" element={<Food />} />
        <Route path="/portfolio/portraits" element={<Portraits />} />
        <Route path="/portfolio/street" element={<Street />} />
        <Route path="/portfolio/wedding" element={<Wedding />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/hireme" element={<Hireme />} />
      </Routes>
    </main>
      
    <Footer />
    </>
  );
}