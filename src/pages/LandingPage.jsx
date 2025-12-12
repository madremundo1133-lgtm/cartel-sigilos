import React, { useState } from 'react';
import { Star, Sparkles, Zap, Eye, PenTool, Flame, Ghost, Activity, Crown, Monitor, Scroll, Compass, Users, Gift, Mail, Lock, X, Loader2, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OracleButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [intention, setIntention] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const consultOracle = async () => {
    setResponse({ 
      statement: "ORÁCULO SELLADO", 
      symbolism: "Requiere Iniciación Digital Premium para acceso", 
      advice: "Contacta con Academy Nexus para activar tu acceso al Oráculo." 
    });
  };

  return (
    <>
      <button 
        onClick={() => {
          setResponse({ 
            statement: "ORÁCULO SELLADO", 
            symbolism: "Requiere Iniciación Digital Premium para acceso", 
            advice: "Contacta con Academy Nexus para activar tu acceso al Oráculo." 
          });
          setIsOpen(true);
        }}
        className="bg-gradient-to-r from-amber-600 to-amber-500 text-stone-900 p-4 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-110 transition-transform group border border-amber-400/50 relative"
      >
        <Sparkles size={24} className="animate-pulse" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-stone-900 text-amber-500 text-xs px-2 py-1 rounded border border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Oráculo IA
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-amber-500/30 rounded-lg shadow-2xl max-w-md w-full p-6 relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-stone-500 hover:text-white"><X size={20} /></button>
            <div className="text-center space-y-4">
              <h3 className="text-amber-500 font-serif text-xl tracking-widest uppercase">Oráculo de Intención</h3>
              {!response ? (
                <div className="space-y-4 pt-2">
                  <input 
                    type="text" 
                    placeholder="Tu deseo..." 
                    className="w-full bg-stone-950 border border-stone-700 rounded p-3 text-stone-200 text-sm focus:border-amber-500 outline-none"
                    value={intention}
                    onChange={(e) => setIntention(e.target.value)}
                  />
                  <button 
                    onClick={consultOracle}
                    disabled={loading || !intention}
                    className="w-full bg-amber-600 hover:bg-amber-500 text-stone-900 font-bold py-3 rounded flex items-center justify-center gap-2"
                  >
                    {loading ? <Loader2 size={18} className="animate-spin" /> : <Zap size={18} />}
                    {loading ? "TRANSMUTANDO..." : "PURIFICAR"}
                  </button>
                </div>
              ) : (
                <div className="text-left space-y-4 bg-stone-950/50 p-4 rounded border border-amber-500/20">
                  <p className="text-amber-400 font-serif text-lg font-bold border-l-2 border-amber-500 pl-3">"{response.statement}"</p>
                  <p className="text-stone-300 text-xs">{response.symbolism}</p>
                  <p className="text-stone-400 text-xs italic border-t border-stone-800 pt-2">{response.advice}</p>
                  <button onClick={() => { setResponse(null); setIntention(""); }} className="text-stone-500 text-xs underline w-full text-center hover:text-amber-500">Cerrar</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const LandingPage = () => {
  const logoUrl = new URL('../utils/logo.png', import.meta.url).href;
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const syllabus = [
    { icon: <Eye size={16} />, title: "MOD 1", subtitle: "Mecánica del Deseo" },
    { icon: <PenTool size={16} />, title: "MOD 2", subtitle: "Ingeniería de Sigilos I" },
    { icon: <Sparkles size={16} />, title: "MOD 3", subtitle: "Ingeniería de Sigilos II" },
    { icon: <Activity size={16} />, title: "MOD 4", subtitle: "Ingeniería Rúnica" },
    { icon: <Flame size={16} />, title: "MOD 5", subtitle: "Secreto de la Gnosis" },
    { icon: <Ghost size={16} />, title: "MOD 6", subtitle: "El Arte del Olvido" },
    { icon: <Users size={16} />, title: "MOD 7", subtitle: "Vida Artificial" },
    { icon: <Crown size={16} />, title: "MOD 8", subtitle: "Laboratorio de Vida" },
  ];

  // Simple form submission to a form backend (replace with your endpoint)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = form.nombre?.value || '';
    const email = form.email?.value || '';
    
    // Validación sencilla de email
    const emailOk = /.+@.+\..+/.test(email);
    if (!emailOk) {
      alert('Por favor, introduce un email válido.');
      return;
    }
    
    console.log('Enviando datos:', { nombre, email });
    
    try {
      // Google Apps Script endpoint
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT || 'https://script.google.com/macros/s/AKfycbzouFy3AYKx7jNHAAe0w_Abvjyt9AM_DAsblGf4Q4HXePre6n_JTRlBRNnxPZ4KTgFj/exec';
      console.log('Endpoint:', endpoint);
      
      if (endpoint) {
        // Enviar JSON como espera el Google Apps Script
        const payload = {
          name: nombre,
          email: email
        };
        
        console.log('Payload a enviar:', payload);
        
        // Enviar a Google Apps Script usando FormData para evitar CORS
        const formData = new URLSearchParams();
        formData.append('data', JSON.stringify(payload));
        
        fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        });
        
        console.log('✅ Petición enviada');
      } else {
        console.error('❌ No hay endpoint configurado');
      }
    } catch (err) {
      console.error('❌ Form submit error', err);
    }
    setShowPopup(false);
    navigate('/gracias');
  };

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-4 font-sans selection:bg-amber-500/30">
      <div className="poster-container relative w-full max-w-[480px] bg-stone-900 rounded-sm shadow-2xl border border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-stone-900 -z-10 hidden print:block"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-amber-900/20 via-stone-900/50 to-stone-900"></div>
          <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 pt-4 pb-4 px-8 text-center">
          <div className="mx-auto w-32 h-32 mb-4 bg-stone-950 rounded-full border border-amber-500/40 flex items-center justify-center relative overflow-hidden">
            {logoUrl ? (
              <img src={logoUrl} alt="Logo" className="w-full h-full object-cover object-bottom transform-gpu scale-125 translate-y-2 block" />
            ) : (
              <Sparkles className="text-amber-500 w-24 h-24" />
            )}
          </div>
          <h2 className="text-amber-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-2">Academy Nexus Presenta</h2>
          <h1 className="font-serif text-3xl md:text-4xl text-white leading-none tracking-tight mb-3 drop-shadow-md">
            SIGILOS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 font-bold">INICIANDO LOS CÓDIGOS SECRETOS</span>
          </h1>
          <div className="flex items-center justify-center gap-4 opacity-80 my-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
            <Star size={10} className="text-amber-400 fill-amber-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
          <p className="text-white text-xs md:text-sm font-serif italic leading-relaxed px-2">
            "Estas Navidades, no regales objetos perecederos. Regala el poder eterno de crear la propia realidad."
          </p>
          <p className="text-white text-[10px] md:text-xs font-sans mt-3 px-4 leading-relaxed font-light">
            No es un curso más, Es una <strong className="text-amber-500 font-bold drop-shadow-sm">INICIACIÓN</strong> que te convertirá en un profesional del arte del Sigilo. Es la <strong className="text-amber-500 font-bold drop-shadow-sm">fusión definitiva</strong> entre la tradición antigua y la tecnología mental moderna. 
            <br/><br/>
            <span className="text-amber-100/90 font-medium border-b border-amber-500/30 pb-0.5">
              Las puertas de la ACADEMY NEXUS se abren en Febrero. Asegura tu lugar ahora.
            </span>
          </p>
        </div>

        <div className="relative z-10 px-6 mb-6">
          <div className="bg-stone-950/80 border border-amber-500/20 rounded-sm p-4 backdrop-blur-md shadow-lg">
            <h3 className="text-white text-xs font-serif uppercase tracking-widest text-center mb-4 border-b border-amber-500/30 pb-2">
              El Sistema de Entrenamiento
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 min-w-[28px] h-[28px] bg-amber-900/30 rounded flex items-center justify-center border border-amber-500/30">
                  <Monitor size={14} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="text-amber-100 text-[10px] font-bold uppercase tracking-wide">Campus Virtual Nexus</h4>
                  <p className="text-white text-[10px] leading-relaxed opacity-90">Plataforma profesional de estudio. Acceso estructurado y soporte técnico incluido.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 min-w-[28px] h-[28px] bg-amber-900/30 rounded flex items-center justify-center border border-amber-500/30">
                  <Gift size={14} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="text-amber-100 text-[10px] font-bold uppercase tracking-wide">Entrega Inmediata (Digital)</h4>
                  <p className="text-white text-[10px] leading-relaxed opacity-90">Recibe una <strong>Tarjeta de Iniciación Digital</strong> al instante. Perfecta para imprimir o enviar como el regalo definitivo este día de Reyes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 min-w-[28px] h-[28px] bg-amber-900/30 rounded flex items-center justify-center border border-amber-500/30">
                  <Scroll size={14} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="text-amber-100 text-[10px] font-bold uppercase tracking-wide">Grimorio & Materiales</h4>
                  <p className="text-white text-[10px] leading-relaxed opacity-90">Manuales en PDF, plantillas arcanas y Flashcards de estudio para interiorizar el conocimiento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 px-6 mb-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Compass size={14} className="text-amber-500" />
            <h3 className="text-amber-500 text-xs font-serif uppercase tracking-[0.2em] font-bold">Ruta de Iniciación (8 Semanas)</h3>
            <Compass size={14} className="text-amber-500" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {syllabus.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-2 bg-stone-900 border border-stone-700/50 rounded hover:border-amber-500/40 hover:bg-stone-800 transition-all group shadow-md text-center h-full">
                <div className="text-amber-500 mb-1 group-hover:text-amber-300 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-amber-500 text-[9px] font-black uppercase tracking-wider mb-0.5 leading-tight group-hover:text-amber-200 transition-colors">{item.title}</h4>
                <p className="text-stone-200 text-[8px] font-medium leading-tight group-hover:text-white">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 bg-gradient-to-t from-stone-950 via-stone-900 to-stone-900/80 pt-8 pb-10 px-8 border-t border-amber-500/10">
          <div className="flex flex-col items-center gap-2 mb-4">
            <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-950 to-stone-900 border border-red-500/50 px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(153,27,27,0.3)] w-full max-w-[280px]">
              <Star size={10} className="text-amber-400 fill-amber-400 animate-pulse" />
              <span className="text-white text-[8px] font-bold uppercase tracking-widest text-center">REGALA CONOCIMIENTO • INICIO FEBRERO</span>
              <Star size={10} className="text-amber-400 fill-amber-400 animate-pulse" />
            </div>
            <div className="flex items-center space-x-2 bg-stone-800/80 border border-amber-500/30 px-4 py-1.5 rounded-full w-full justify-center max-w-[280px]">
              <Users size={10} className="text-amber-400" />
              <span className="text-amber-100 text-[9px] font-bold uppercase tracking-widest">INICIACIÓN PRESENCIAL REQUERIDA</span>
            </div>
          </div>

          <div className="text-center mb-2 relative bg-stone-950/50 p-2 rounded border border-stone-800/50">
            <div className="flex flex-col items-center justify-center mb-0.5">
              <p className="text-stone-400 text-[9px] font-sans uppercase tracking-widest mb-0.5">Precio oficial (Febrero 2026)</p>
              <span className="text-white text-lg font-serif line-through decoration-red-600 decoration-2 opacity-60">677€</span>
            </div>
            <div className="w-full h-px bg-stone-800 my-0.5"></div>
            <div className="flex flex-col items-center justify-center mt-0.5">
              <div className="flex items-center space-x-2 mb-0.5">
                <Lock size={8} className="text-amber-400" />
                <p className="text-amber-400 text-[9px] font-bold uppercase tracking-widest">Tu oportunidad ahora</p>
              </div>
              <span className="text-5xl font-serif text-amber-500 font-bold drop-shadow-[0_0_25px_rgba(245,158,11,0.4)]">399€</span>
            </div>
            <p className="text-white text-[9px] font-bold uppercase tracking-wider mt-1">Cristaliza tu acceso antes del cambio de ciclo</p>
          </div>

          <div className="bg-stone-800/60 border border-amber-500/20 rounded p-2 backdrop-blur-sm shadow-lg">
            <p className="text-center text-amber-500 text-[9px] uppercase tracking-[0.2em] font-bold mb-1">CANALES DE INSCRIPCIÓN</p>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <a 
                href="https://wa.me/34679387348?text=Hola%2C%20quiero%20información%20sobre%20el%20curso%20de%20Sigilos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 p-1 rounded hover:bg-white/5 transition-colors cursor-pointer group"
              >
                <div className="bg-amber-500/10 p-1 rounded-full border border-amber-500/20 group-hover:border-amber-500/50 transition-colors">
                  <MessageCircle size={12} className="text-amber-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[7px] text-stone-400 uppercase tracking-wider font-bold">WhatsApp</span>
                  <span className="text-white text-[10px] font-medium tracking-wide font-sans">+34 679 387348</span>
                </div>
              </a>
              <a 
                href="mailto:cursos@academynexus.es?subject=Información%20Curso%20Sigilos"
                className="flex items-center space-x-2 p-1 rounded hover:bg-white/5 transition-colors cursor-pointer group"
              >
                <div className="bg-amber-500/10 p-1 rounded-full border border-amber-500/20 group-hover:border-amber-500/50 transition-colors">
                  <Mail size={12} className="text-amber-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[7px] text-stone-400 uppercase tracking-wider font-bold">Email</span>
                  <span className="text-white text-[8px] font-medium tracking-tight font-sans">cursos@academynexus.es</span>
                </div>
              </a>
            </div>
            <a 
              href="https://t.me/PresenciaViva"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 p-2 rounded bg-gradient-to-r from-sky-900/30 to-blue-900/30 border border-sky-500/30 hover:border-sky-400/50 transition-all cursor-pointer group w-full"
            >
              <div className="bg-sky-500/10 p-1.5 rounded-full border border-sky-500/30 group-hover:border-sky-400/50 transition-colors">
                <MessageCircle size={14} className="text-sky-400" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[7px] text-sky-300 uppercase tracking-wider font-bold">Únete al grupo Telegram</span>
                <span className="text-white text-[10px] font-medium">Comunidad Academy Nexus</span>
              </div>
            </a>
          </div>

          <div className="bg-stone-900/80 border border-amber-500/30 rounded-sm p-3 mt-4 text-center space-y-2">
            <h4 className="text-amber-500 text-[9px] font-serif uppercase tracking-[0.2em] font-bold">RECIBE EL DOSSIER DE LA INICIACIÓN</h4>
            <p className="text-white text-[9px] leading-relaxed">Pincha en este código y deja tu nombre y correo para recibir en tu email el dossier completo de la Iniciación en Sigilos.</p>
            <img 
              src={'/qr-dossier-sigilos.png'} 
              alt="QR Dossier Rito de los Sigilos" 
              className="w-24 h-24 mx-auto mt-2 rounded-sm border border-amber-500/50 shadow-[0_0_18px_rgba(245,158,11,0.4)] bg-stone-900 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setShowPopup(true)}
              style={{ cursor: 'pointer' }}
            />

            {showPopup && (
              <div className="fixed inset-0 bg-stone-950/90 z-50 flex items-center justify-center p-4">
                <div className="bg-stone-900 border border-amber-500/30 rounded-lg p-6 max-w-sm w-full">
                  <div className="flex justify-between items-start">
                    <h4 className="text-amber-500 font-serif uppercase text-sm">Recibe el dossier</h4>
                    <button onClick={() => setShowPopup(false)} className="text-stone-400 hover:text-white">Cerrar</button>
                  </div>
                  <p className="text-white text-[12px] mt-3">Deja tu nombre y correo para recibir el dossier por email.</p>
                  <form className="mt-4 space-y-2" onSubmit={handleFormSubmit}>
                    <input name="nombre" type="text" placeholder="Nombre" className="w-full p-2 rounded bg-stone-800 border border-stone-700 text-white text-sm" required />
                    <input name="email" type="email" placeholder="tu@correo.es" className="w-full p-2 rounded bg-stone-800 border border-stone-700 text-white text-sm" required />
                    <div className="flex justify-end mt-2">
                      <button type="submit" className="bg-amber-500 text-stone-900 px-4 py-2 rounded font-bold">Enviar y descargar</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-4 space-y-1">
            <p className="text-white text-[9px] font-medium tracking-wide">GARANTÍA DE SATISFACCIÓN DE 7 DÍAS</p>
            <p className="text-white text-[9px] opacity-100">Plazas estrictamente limitadas para asegurar soporte personalizado.</p>
          </div>
        </div>

        <div className="absolute inset-0 border-[3px] border-amber-500/10 rounded-sm pointer-events-none"></div>
      </div>

      {/* Botones flotantes */}
      <div className="no-print fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <OracleButton />
      </div>
    </div>
  );
};

export default LandingPage;
