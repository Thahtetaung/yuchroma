import Navbar from './components/Navbar';

import Footer from './components/Footer.jsx';
import {Route , Routes } from 'react-router-dom';
import Aboutme from './pages/Aboutme.jsx';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Hireme from './pages/Hireme.jsx';

export default function App() {
  return (
    <>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/hireme" element={<Hireme />} />
      </Routes>
    </main>
      
    <Footer />
    </>
  );
}