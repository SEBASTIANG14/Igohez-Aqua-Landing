"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
} as const;

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

export default function ServiciosPage() {
  const services = [
    {
      title: "Mantenimiento y Limpieza Semanal",
      icon: "cleaning_services",
      desc: "Limpieza meticulosa de impurezas, cepillado de paredes, aspirado de fondo y vaciado de canastillas para mantener un entorno completamente higiénico.",
      details: [
        "Aspirado profundo de fondo de alberca",
        "Retiro de hojas y residuos flotantes",
        "Cepillado de muros, escalones y líneas de flotación",
        "Limpieza y vaciado de trampas de cabello y canastillas de skimmer",
        "Pruebas rápidas de cloro y pH"
      ]
    },
    {
      title: "Balance Químico de Precisión",
      icon: "science",
      desc: "Análisis químico avanzado y ajuste milimétrico del pH, alcalinidad, dureza de calcio y niveles de desinfectante para un agua sana y transparente.",
      details: [
        "Análisis detallado de parámetros del agua",
        "Ajuste preciso de pH y alcalinidad total",
        "Tratamiento preventivo y correctivo contra algas",
        "Supercloración (shock) cuando sea requerido",
        "Asesoría en dosificación óptima"
      ]
    },
    {
      title: "Diagnóstico y Reparación de Equipos",
      icon: "construction",
      desc: "Solución de fallas y mantenimiento preventivo a bombas, sistemas de filtración, calentadores y sistemas de automatización.",
      details: [
        "Detección y reparación de fugas en tuberías e instalaciones",
        "Mantenimiento de motobombas y cambio de baleros",
        "Cambio de arena o cartuchos filtrantes",
        "Reparación e instalación de calentadores solares y bombas de calor",
        "Configuración de tableros de control y automatización"
      ]
    },
    {
      title: "Rehabilitación y Lavado de Albercas",
      icon: "plumbing",
      desc: "Lavado a presión con ácidos y químicos especiales para albercas que han estado abandonadas o presentan manchas severas en el mosaico.",
      details: [
        "Vaciado controlado de la alberca",
        "Lavado profundo con ácido especial e inhibidores",
        "Eliminación de sarro e incrustaciones severas",
        "Inspección general de boquillas y dren de fondo",
        "Tratamiento de choque en el primer llenado"
      ]
    }
  ];

  return (
    <main className="pt-28 md:pt-36 pb-20 px-6 md:px-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          <motion.span
            {...fadeInUp}
            className="text-primary font-sans text-sm font-bold uppercase tracking-[0.2em] block"
          >
            Nuestros Servicios
          </motion.span>
          <motion.h1
            {...fadeInUp}
            className="font-serif text-4xl md:text-5xl font-extrabold text-on-surface leading-tight"
          >
            Cuidado Profesional para tu Alberca
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="font-sans text-base text-on-surface-variant leading-relaxed"
          >
            Ofrecemos soluciones integrales y personalizadas para asegurar que el agua de tu alberca cumpla con los más altos estándares de higiene y claridad.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="glass-slab p-8 md:p-10 rounded-[2rem] bg-white hover:-translate-y-2 transition-all duration-500 premium-shadow border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary text-3xl font-light">
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-on-surface">{service.title}</h3>
                <p className="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-primary mb-3">
                  ¿Qué incluye?
                </h4>
                <ul className="space-y-2.5 mb-8">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-sans text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                        check_circle
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link href="/contacto">
                  <button className="w-full py-3 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary hover:text-on-primary text-primary rounded-xl font-sans text-sm font-bold transition-all cursor-pointer">
                    Cotizar este Servicio
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Banner Quick Help */}
        <motion.div
          {...fadeInUp}
          className="mt-20 p-8 md:p-12 bg-primary text-on-primary rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10 max-w-2xl text-center md:text-left space-y-2">
            <h3 className="font-serif text-2xl md:text-3xl font-bold">¿Tienes un problema urgente con tu alberca?</h3>
            <p className="font-sans text-sm text-white/80">
              ¿Tu alberca amaneció verde, o la motobomba emite ruidos extraños? Ofrecemos servicios de diagnóstico express para resolver cualquier eventualidad.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link href="/contacto">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-sans text-sm font-bold hover:scale-105 transition-all shadow-lg cursor-pointer">
                Solicitar Asesoría Express
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
