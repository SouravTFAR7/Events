import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx';
import Cocktails from './components/Cocktails.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
        <Footer />
    </main>
  )
}

export default App
