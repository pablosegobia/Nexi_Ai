import React from 'react';
import { METHODOLOGY_STEPS } from '../constants';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-xs">Nuestro Proceso</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Metodología paso a paso</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Evitamos el "caos creativo". Aplicamos un proceso de ingeniería estructurado para garantizar resultados predecibles.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {METHODOLOGY_STEPS.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl hover:border-indigo-500 transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 text-white font-bold flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;