"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
} as const;

export default function ProyectosPage() {
  const [filter, setFilter] = useState<"todos" | "residencial" | "comercial">("todos");

  const projects = [
    {
      id: 1,
      title: "Alberca Residencial Vista Verde",
      category: "residencial",
      categoryLabel: "Residencial",
      desc: "Limpieza profunda y mantenimiento automatizado semanal en jardín residencial.",
      image: "/images/backyard_pool.png",
      location: "San Pedro Garza",
    },
    {
      id: 2,
      title: "Infinity Pool - Villa Atardecer",
      category: "residencial",
      categoryLabel: "Residencial",
      desc: "Balance químico y puesta a punto de alberca infinita con desbordamiento finlandés.",
      image: "/images/luxury_pool.png",
      location: "Valle de Bravo",
    },
    {
      id: 3,
      title: "Alberca Olímpica - Club Deportivo",
      category: "comercial",
      categoryLabel: "Comercial",
      desc: "Mantenimiento químico intensivo diario y diagnóstico de sistemas de bombeo industriales.",
      image: "/images/hero.png",
      location: "Polanco, CDMX",
    },
    {
      id: 4,
      title: "Puesta a Punto - Residencia Coyoacán",
      category: "residencial",
      categoryLabel: "Residencial",
      desc: "Rehabilitación de agua estancada y remoción profunda de sarro en mosaicos.",
      image: "/images/fondo-inicio.jpeg",
      location: "Coyoacán, CDMX",
    },
    {
      id: 5,
      title: "Mantenimiento Hotel Boutique Aqua",
      category: "comercial",
      categoryLabel: "Comercial",
      desc: "Servicio premium de mantenimiento integral preventivo y balance de cloro automatizado.",
      image: "/images/chubby_man_cleaning_pool.png",
      location: "Cuernavaca, Mor.",
    },
  ];

  const filteredProjects =
    filter === "todos"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <main className="pt-28 md:pt-36 pb-20 px-6 md:px-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <motion.span
            {...fadeInUp}
            className="text-primary font-sans text-sm font-bold uppercase tracking-[0.2em] block"
          >
            Nuestra Galería
          </motion.span>
          <motion.h1
            {...fadeInUp}
            className="font-serif text-4xl md:text-5xl font-extrabold text-on-surface leading-tight"
          >
            Proyectos Realizados
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="font-sans text-base text-on-surface-variant leading-relaxed"
          >
            Explora nuestro portafolio de albercas residenciales y comerciales cuidadas bajo la excelencia de Igohez Aqua.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-200/60 p-1.5 rounded-full flex gap-1 border border-slate-300/30">
            {(
              [
                { id: "todos", label: "Todos" },
                { id: "residencial", label: "Residenciales" },
                { id: "comercial", label: "Comerciales" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-6 py-2 rounded-full font-sans text-xs md:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-primary text-on-primary shadow-md"
                    : "text-on-surface-variant hover:text-primary hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative overflow-hidden rounded-[2rem] bg-slate-900 aspect-[4/3] shadow-lg cursor-pointer"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-75"
                />

                {/* Glass Card Hover Details */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:from-black/90 transition-all duration-300">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                    <span className="bg-primary/90 text-on-primary text-[10px] font-bold font-sans px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-300 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs pt-1 font-sans">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          {...fadeInUp}
          className="mt-20 p-12 bg-white rounded-[2.5rem] border border-slate-100 premium-shadow text-center max-w-4xl mx-auto space-y-6"
        >
          <h3 className="font-serif text-2xl font-bold text-on-surface">
            ¿Quieres que tu alberca luzca así de impecable?
          </h3>
          <p className="font-sans text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Nuestros especialistas certificados están listos para implementar planes de mantenimiento continuo y balance químico que mantendrán el agua transparente los 365 días del año.
          </p>
          <div>
            <Link href="/contacto">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-sans text-sm font-bold premium-shadow hover:scale-105 transition-all cursor-pointer">
                Agendar Diagnóstico Sin Costo
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
