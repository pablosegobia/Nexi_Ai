import React, { useState } from 'react';
import { generateConsultation } from '../services/geminiService';

const AiDemo: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [context, setContext] = useState('General');

  const handleConsult = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);
    const result = await generateConsultation(query, context);
    setResponse(result);
    setLoading(false);
  };

  const contexts = ["General", "Retail/Ventas", "Logística", "Administración/Contable", "Marketing", "Salud"];

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-slate-900 to-indigo-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-xs">Pragma Intelligence</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">¿En qué trabajas?</h2>
          <p className="text-slate-300">
            Descubre en tiempo real cómo la IA puede optimizar tu sector específico. <br/>
            <span className="text-sm opacity-70">(Powered by Gemini 2.5)</span>
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-10 shadow-2xl">
            {/* Input Section */}
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Selecciona tu área</label>
                    <div className="flex flex-wrap gap-2">
                        {contexts.map(ctx => (
                            <button 
                                key={ctx}
                                onClick={() => setContext(ctx)}
                                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${context === ctx ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                            >
                                {ctx}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Describe tu desafío o rol actual</label>
                    <div className="relative">
                        <textarea
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Ej: Soy contador y pierdo mucho tiempo cargando facturas..."
                            className="w-full bg-slate-950/50 border border-slate-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none h-32 resize-none placeholder-slate-600"
                        />
                        <button
                            onClick={handleConsult}
                            disabled={loading || !query}
                            className={`absolute bottom-4 right-4 px-4 py-2 rounded-md font-medium text-sm transition-all ${loading || !query ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-white text-indigo-900 hover:bg-slate-200'}`}
                        >
                            {loading ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-indigo-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Pensando...
                                </span>
                            ) : 'Consultar Ahora'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Response Section */}
            {response && (
                <div className="mt-8 pt-8 border-t border-slate-700 animate-fade-in">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-white font-semibold mb-2">Análisis Pragma</h4>
                            <div className="prose prose-invert prose-sm text-slate-300">
                                <p className="whitespace-pre-line">{response}</p>
                            </div>
                            <p className="mt-4 text-xs text-slate-500 italic">
                                *Esto es una demo generativa. Para un plan detallado, agenda una reunión.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default AiDemo;