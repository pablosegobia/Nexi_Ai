import React from 'react';
import { TAGLINE } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm mb-8">
          <span className="flex h-2 w-2 relative mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <span className="text-slate-300 text-sm font-medium">Equipo Interdisciplinario Senior</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
          Inteligencia Artificial <br />
          <span className="gradient-text">sin humo ni espejos.</span>
        </h1>
        
        <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          {TAGLINE} Cerramos la brecha entre la tecnología compleja y los problemas reales de tu negocio. Sin promesas vacías, solo resultados medibles.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#demo" 
            onClick={(e) => scrollToSection(e, 'demo')}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30 cursor-pointer"
          >
            Probar Consultor IA
          </a>
          <a 
            href="#services" 
            onClick={(e) => scrollToSection(e, 'services')}
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Explorar Servicios
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;