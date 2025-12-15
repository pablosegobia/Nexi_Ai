import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Identity from './components/Identity';
import AiDemo from './components/AiDemo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <Identity />
        <AiDemo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;