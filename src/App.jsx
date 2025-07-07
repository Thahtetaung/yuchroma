import Navbar from './components/Navbar';

import Footer from './components/Footer.jsx';
import {Route , Routes , Outlet} from 'react-router-dom';
import { useState , useEffect } from 'react';
import Aboutme from './pages/Aboutme.jsx';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Hireme from './pages/Hireme.jsx';
import Food from './pages/Food.jsx';
import Portraits from './pages/Portraits.jsx';
import Street from './pages/Street.jsx';
import Wedding from './pages/Wedding.jsx';

export default function App() {
  const [isDark , setIsDark] = useState(() => {
        const stored = localStorage.getItem("theme");
        if (stored) return stored === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

  useEffect(() => {
    const root = document.documentElement; 
    if(isDark){
        root.classList.add('dark');
        localStorage.setItem("theme" , "dark");
    }else{
        root.classList.remove('dark')
        localStorage.setItem("theme" , "light")
    }
    }, [isDark])
    
  return (
    <>
    <Navbar isDark={isDark} setIsDark={setIsDark}/>
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