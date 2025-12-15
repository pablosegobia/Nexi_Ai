import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Empecemos a construir</h2>
            <p className="text-slate-400">
              Cuéntanos tu problema de negocio. Si podemos resolverlo con IA, te diremos cómo. Si no, también te lo diremos.
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Nombre</label>
                <input type="text" id="name" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input type="email" id="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Mensaje</label>
              <textarea id="message" rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;