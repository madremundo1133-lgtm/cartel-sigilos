import React, { useState } from 'react';
import { Star, Sparkles, Zap, Eye, PenTool, Flame, Ghost, Activity, Crown, Layers, Book, Clock, Monitor, Scroll, Compass, MapPin, Users, Gift, Mail, MessageCircle, Phone, Lock, X, Loader2, Printer, Download } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const App = () => {
  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-4 font-sans selection:bg-amber-500/30">

      {/* --- ESTILOS DE IMPRESIÓN ANULADOS --- */}
      <style>{`
        /* @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          body {
            background-color: #0c0a09 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0;
          }
          #root {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .poster-container {
            transform: scale(0.65);
            box-shadow: none !important;
            border: none !important;
          }
          .no-print {
            display: none !important;
          }
        } */
      `}</style>

      <Poster />

      {/* --- BOTONES DE ACCIÓN (Clase no-print) --- */}
      <div className="no-print fixed bottom-6 right-6 flex flex-col gap-3 z-50">

        {/* Botón Descargar PDF - ANULADO */}
        <button
          onClick={() => {}} 
          className="bg-stone-800 hover:bg-stone-700 text-amber-500 p-4 rounded-full shadow-lg border border-amber-500/30 transition-transform hover:scale-110 group relative"
          title="Función de impresión deshabilitada"
        >
          <Printer size={24} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-stone-900 text-amber-500 text-xs px-2 py-1 rounded border border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Deshabilitado
          </span>
        </button>

        <OracleButton />
      </div>
    </div>
  );
};

// --- COMPONENTE DEL ORÁCULO ---
const OracleButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [intention, setIntention] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = "";

  const consultOracle = async () => {
    // Mostrar mensaje de Oráculo Sellado
    setResponse({
      statement: "ORÁCULO SELLADO",
