import React from 'react';
import { EDUCATION_CONTENT } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <span className="text-sky-400 font-semibold tracking-wider uppercase text-xs">Pragma Academy</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-4">No solo implementamos, educamos.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                Recursos para líderes y equipos que quieren ir más allá de la superficie.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION_CONTENT.map((item, index) => (
                <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-sky-500/50 transition-all group flex flex-col">
                    <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                            item.type === 'WORKSHOP' ? 'bg-indigo-900 text-indigo-300' :
                            item.type === 'COURSE' ? 'bg-purple-900 text-purple-300' :
                            'bg-green-900 text-green-300'
                        }`}>
                            {item.type}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">{item.description}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                        <span className="text-slate-500 text-xs font-medium">{item.duration}</span>
                        <button className="text-sky-400 text-sm font-medium hover:text-white transition-colors flex items-center">
                            Más info
                            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;