import React from 'react';
import { Service, ValueProp, AudienceType } from './types';

export const BRAND_NAME = "Pragma";
export const TAGLINE = "Inteligencia Artificial. Impacto Real.";

export const MISSION = "Democratizar el acceso a la Inteligencia Artificial aplicada, transformando negocios con soluciones tangibles, éticas y centradas en el ser humano. Buscamos eliminar la brecha entre la complejidad tecnológica y la utilidad operativa.";

export const PURPOSE_ITEMS = [
  "La tecnología sin propósito es solo ruido.",
  "No vendemos magia, construimos procesos.",
  "La ética no es un 'feature', es la base.",
  "Diseñamos para humanos, potenciados por máquinas.",
  "Educamos mientras implementamos."
];

export const SERVICES: Service[] = [
  {
    id: 'consulting',
    title: 'Consultoría Estratégica',
    description: 'Diagnóstico de procesos reales. Traducimos problemas de negocio en soluciones técnicas viables.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    )
  },
  {
    id: 'automation',
    title: 'Automatización Inteligente',
    description: 'RPA + IA. Eliminamos tareas repetitivas para que tu equipo se enfoque en el valor añadido.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    id: 'product-design',
    title: 'Diseño de Productos IA',
    description: 'UX/UI especializado. Convertimos algoritmos complejos en interfaces humanas y simples.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    )
  },
  {
    id: 'training',
    title: 'Formación y Cultura',
    description: 'Capacitación no técnica para equipos. Adopción real de herramientas de IA en el día a día.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    )
  }
];

export const VALUES: ValueProp[] = [
  {
    title: "Pragmatismo Radical",
    description: "Si no resuelve un problema real o no mejora un número del negocio, no lo construimos."
  },
  {
    title: "Diseño Humano",
    description: "La tecnología debe adaptarse a las personas, no al revés. UI/UX es nuestra prioridad."
  },
  {
    title: "Transparencia Total",
    description: "Sin cajas negras. Te explicamos qué hace la IA, cómo lo hace y dónde están sus límites."
  }
];

export const TEAM_PROFILES = [
  { role: "Brand Strategist", focus: "Visión & Propósito", initials: "BS" },
  { role: "AI Consultant", focus: "Arquitectura Técnica", initials: "AI" },
  { role: "UX/UI Lead", focus: "Experiencia Humana", initials: "UX" },
  { role: "Copywriter", focus: "Narrativa Clara", initials: "CW" },
];

export const AUDIENCE_CONTENT = {
  [AudienceType.BUSINESS]: {
    title: "Para Empresas",
    items: ["PyMEs buscando eficiencia operativa.", "Bancos y Aseguradoras que necesitan modernizar legacy.", "Retail y Logística optimizando cadenas de valor.", "Estudios profesionales automatizando carga administrativa."]
  },
  [AudienceType.PERSONAL]: {
    title: "Para Personas",
    items: ["Profesionales independientes que quieren escalar.", "Emprendedores validando ideas con IA.", "Docentes innovando en metodología.", "Creators optimizando flujos de contenido."]
  }
};

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Entendemos cómo trabaja tu equipo hoy. Identificamos cuellos de botella y oportunidades de automatización sin fricción."
  },
  {
    step: "02",
    title: "Diseño",
    description: "Diseñamos la solución conceptual. Validamos la viabilidad técnica y el ROI esperado antes de escribir una línea de código."
  },
  {
    step: "03",
    title: "Implementación",
    description: "Construcción ágil. Desarrollamos, integramos y probamos. Entregamos soluciones funcionales, no prototipos eternos."
  },
  {
    step: "04",
    title: "Acompañamiento",
    description: "La tecnología falla si no se usa. Capacitamos a tu equipo y monitoreamos la adopción durante los primeros meses."
  }
];

export const EDUCATION_CONTENT = [
  {
    type: 'WORKSHOP',
    title: 'IA para Directivos',
    description: 'Toma de decisiones estratégicas en la era de la IA generativa. Riesgos, oportunidades y hoja de ruta.',
    duration: '4 Horas'
  },
  {
    type: 'COURSE',
    title: 'Prompt Engineering',
    description: 'Maximiza el potencial de LLMs en flujos de trabajo diarios. Técnicas avanzadas de prompting y automatización.',
    duration: '2 Semanas'
  },
  {
    type: 'WEBINAR',
    title: 'Automatización No-Code',
    description: 'Construye agentes autónomos sin saber programar. Herramientas, casos de uso y mejores prácticas.',
    duration: '1.5 Horas'
  }
];