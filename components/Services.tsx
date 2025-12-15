import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Soluciones diseñadas para generar impacto real en tu operativa diaria.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors group">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;