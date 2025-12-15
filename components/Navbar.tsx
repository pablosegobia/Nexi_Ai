import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-700' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">{BRAND_NAME}</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Servicios</a>
            <a href="#methodology" onClick={(e) => scrollToSection(e, 'methodology')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Metodología</a>
            <a href="#identity" onClick={(e) => scrollToSection(e, 'identity')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Nosotros</a>
            <a href="#demo" onClick={(e) => scrollToSection(e, 'demo')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Demo IA</a>
            <button 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="bg-white text-slate-900 px-5 py-2 rounded-full font-semibold text-sm hover:bg-slate-200 transition-colors"
            >
              Hablemos
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Servicios</a>
            <a href="#methodology" onClick={(e) => scrollToSection(e, 'methodology')} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Metodología</a>
            <a href="#identity" onClick={(e) => scrollToSection(e, 'identity')} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Nosotros</a>
            <a href="#demo" onClick={(e) => scrollToSection(e, 'demo')} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Demo IA</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block px-3 py-2 rounded-md text-base font-medium text-sky-400 font-bold hover:bg-slate-800">Hablemos</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;