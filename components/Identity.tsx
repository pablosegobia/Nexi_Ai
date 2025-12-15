import React from 'react';
import { MISSION, VALUES, TEAM_PROFILES } from '../constants';

const Identity: React.FC = () => {
  return (
    <section id="identity" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Más que consultores, <br/>
              <span className="text-indigo-400">un equipo integrado.</span>
            </h2>
            <div className="p-6 bg-slate-800/50 border-l-4 border-indigo-500 rounded-r-lg">
                <p className="text-xl text-slate-300 italic leading-relaxed">
                    "{MISSION}"
                </p>
            </div>
        </div>

        {/* Team Profiles Section */}
        <div className="mb-24">
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
                Complementariedad de Perfiles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {TEAM_PROFILES.map((profile, idx) => (
                    <div key={idx} className="bg-slate-800/30 border border-slate-700 p-6 rounded-xl hover:bg-slate-800 hover:border-indigo-500/50 transition-all group">
                        <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-indigo-400 font-bold text-lg mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            {profile.initials}
                        </div>
                        <h4 className="text-white font-bold text-lg">{profile.role}</h4>
                        <p className="text-slate-400 text-sm mt-1">{profile.focus}</p>
                    </div>
                ))}
            </div>
            <p className="mt-6 text-slate-500 text-sm max-w-2xl">
                Nuestro enfoque interdisciplinario asegura que cada solución sea técnicamente robusta, estratégicamente viable y humanamente utilizable.
            </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-slate-800 pt-16">
          <div>
             <h3 className="text-3xl font-bold text-white mb-6">Nuestros Valores</h3>
             <p className="text-slate-400 mb-8 leading-relaxed">
                 En un mercado saturado de promesas vacías, nuestra moneda de cambio es la honestidad radical y la ejecución impecable.
             </p>
          </div>
          
          <div className="space-y-6">
              {VALUES.map((val, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-lg hover:bg-slate-800/30 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                     <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/50">
                        <span className="text-indigo-400 text-xs font-bold">{idx + 1}</span>
                     </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">
                        {val.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        {val.description}
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

export default Identity;