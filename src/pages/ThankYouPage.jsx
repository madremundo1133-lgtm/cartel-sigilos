import React from 'react';
import { Download, Send } from 'lucide-react';

// --- COMPONENTES AUXILIARES INTERNOS ---

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-5xl font-serif text-amber-500 text-center mt-8 mb-2 tracking-wider drop-shadow-lg leading-tight">
    {children}
  </h2>
);

const GoldButton = ({ children, onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`bg-amber-600 hover:bg-amber-500 text-stone-950 font-serif font-bold py-2.5 px-8 rounded-full transition-all duration-300 uppercase tracking-widest shadow-[0_0_15px_rgba(217,119,6,0.4)] hover:shadow-[0_0_25px_rgba(217,119,6,0.6)] flex items-center justify-center gap-3 mx-auto transform hover:scale-105 active:scale-95 ${className}`}
  >
    {children}
  </button>
);

// --- HEADER ---

const Header = () => {
  const telegramLink = "https://t.me/academynexus";

  return (
    <header className="fixed top-0 w-full z-50 bg-stone-950/95 backdrop-blur-md border-b border-amber-900/30 h-20 transition-all flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">
        <a 
          href="https://academynexus.es"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group cursor-pointer transition-opacity hover:opacity-80"
          title="Ir a Academy Nexus"
        >
          <div className="w-9 h-9 border border-amber-500 rounded-full flex items-center justify-center bg-stone-900 group-hover:bg-amber-900/20 transition-colors shadow-[0_0_10px_rgba(217,119,6,0.2)]">
            <span className="text-amber-500 font-serif text-lg">N</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-amber-500 font-serif uppercase tracking-widest text-xs leading-none">Academy</span>
            <span className="text-white text-[9px] uppercase tracking-[0.2em] leading-none mt-1">Nexus Espiritual</span>
          </div>
        </a>

        <a 
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            px-5 py-2
            bg-gradient-to-r from-amber-700 to-amber-600
            border border-amber-500/50 
            text-white 
            text-[10px] font-bold uppercase tracking-widest 
            rounded-full
            shadow-[0_0_15px_rgba(217,119,6,0.3)]
            hover:shadow-[0_0_25px_rgba(217,119,6,0.5)]
            hover:scale-105
            active:scale-95
            transition-all duration-300
          "
        >
          <span>Únete a nuestro Canal</span>
          <Send size={12} className="ml-1" />
        </a>
      </div>
    </header>
  );
};

// --- COMPONENTE PRINCIPAL EXPORTADO ---

const ThankYouPage = () => {

  const downloadDossier = () => {
    try {
      const pdfUrl = '/dossier-sigilos.pdf';
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', 'Dossier-Informativo-Iniciacion.pdf');
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Error descarga:", err);
      window.open('/dossier-sigilos.pdf', '_blank');
    }
  };

  return (
    <div className="h-screen bg-stone-950 text-white font-sans selection:bg-amber-900 selection:text-white flex flex-col overflow-hidden">
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 relative mt-16 md:mt-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-stone-950 to-stone-950 -z-10"></div>
        
        <div className="max-w-3xl w-full mx-auto bg-gradient-to-b from-stone-900/80 to-stone-950/80 backdrop-blur-sm border border-amber-900/30 py-6 px-8 md:p-10 rounded-2xl text-center relative overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          
          <SectionTitle>
            <span className="block text-5xl md:text-7xl font-bold mb-2 drop-shadow-xl">Gracias</span>
            <span className="block text-xl md:text-2xl font-light opacity-90">Tu camino acaba de comenzar</span>
          </SectionTitle>
          
          <div className="max-w-lg mx-auto">
            <p className="text-white mb-4 leading-relaxed text-sm md:text-base opacity-90">
              Pulsa el botón a continuación para obtener tu <strong>Dossier Informativo de la Iniciación</strong>.
            </p>

            <div className="flex flex-col items-center gap-3 mt-2">
              <div className="text-center w-full">
                <h3 className="text-amber-100 font-serif text-base mb-3 opacity-80">Acceso Inmediato</h3>
                
                <GoldButton onClick={downloadDossier} className="w-full md:w-auto min-w-[220px] text-sm">
                  <span>Descargar PDF</span>
                  <Download size={18} />
                </GoldButton>
                
                <p className="text-stone-400 text-[10px] mt-3 uppercase tracking-wider">
                  El archivo se guardará en tu dispositivo.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-amber-900/20">
            <p className="font-serif text-white text-xs italic opacity-70">
              "El conocimiento busca a quien lo busca."
            </p>
          </div>
        </div>
      </main>

      <footer className="py-3 bg-stone-950 border-t border-amber-900/10 text-center text-white/40 text-[9px] uppercase tracking-widest shrink-0 z-10">
        <p>&copy; 2024 Academy Nexus Espiritual • <a href="https://academynexus.es" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">academynexus.es</a></p>
      </footer>
    </div>
  );
};

export default ThankYouPage;
