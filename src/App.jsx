import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import LeetCodeStats from './components/LeetCodeStats';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans antialiased selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <LeetCodeStats />
        <Projects />
        <Certificates />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
