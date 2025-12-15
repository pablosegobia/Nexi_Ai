import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold text-white tracking-tight">Pragma<span className="text-indigo-500">.ai</span></span>
          <p className="text-slate-500 text-sm mt-1">© {new Date().getFullYear()} Pragma Solutions. Todos los derechos reservados.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;