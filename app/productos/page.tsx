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

export default function ProductosPage() {
  const [activeTab, setActiveTab] = useState<"todos" | "quimicos" | "equipos">("todos");

  const products = [
    {
      id: "pro-shock",
      name: "Pro-Series Shock Treatment",
      category: "quimicos",
      categoryLabel: "Químicos",
      desc: "Cloro de rápida disolución y bajo residuo. Ideal para tratamientos de choque inmediatos y eliminación de bacterias en minutos.",
      price: "$45.00",
      image: "/images/chemicals.png",
    },
    {
      id: "pureblue-algae",
      name: "PureBlue Algaecide",
      category: "quimicos",
      categoryLabel: "Químicos",
      desc: "Alguicida premium altamente concentrado. Previene y elimina el crecimiento de algas verdes, negras y amarillas en tu alberca.",
      price: "$29.99",
      image: "/images/algaecide.png",
    },
    {
      id: "crystal-clarifier",
      name: "Crystal Clarifier",
      category: "quimicos",
      categoryLabel: "Químicos",
      desc: "Coagulante biodegradable de acción rápida que reúne micropartículas suspendidas en el agua para que el filtro las retenga con facilidad.",
      price: "$34.50",
      image: "/images/clarifier.png",
    },
    {
      id: "intelli-pump",
      name: "Motobomba de Velocidad Variable",
      category: "equipos",
      categoryLabel: "Equipos",
      desc: "Bomba inteligente de alta eficiencia energética. Reducción de ruido avanzada y velocidad ajustable programable.",
      price: "$899.00",
      image: "/images/pool_pump.png",
    },
    {
      id: "hayward-filter",
      name: "Filtro de Arena de Fibra de Vidrio",
      category: "equipos",
      categoryLabel: "Equipos",
      desc: "Filtro de alta resistencia y gran capacidad. Garantiza una filtración cristalina con mínimo mantenimiento y durabilidad extendida.",
      price: "$649.00",
      image: "/images/pool_filter.png",
    },
    {
      id: "acc-kit",
      name: "Kit de Limpieza & Accesorios",
      category: "equipos",
      categoryLabel: "Equipos",
      desc: "Set esencial que incluye red sacahojas reforzada, cepillo para muros de alta densidad y canastilla de skimmer resistente al cloro.",
      price: "$79.00",
      image: "/images/pool_accessories.png",
    },
  ];

  const filteredProducts =
    activeTab === "todos"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <main className="pt-28 md:pt-36 pb-20 px-6 md:px-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <motion.span
            {...fadeInUp}
            className="text-primary font-sans text-sm font-bold uppercase tracking-[0.2em] block"
          >
            Nuestra Tienda
          </motion.span>
          <motion.h1
            {...fadeInUp}
            className="font-serif text-4xl md:text-5xl font-extrabold text-on-surface leading-tight"
          >
            Químicos y Equipos Premium
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="font-sans text-base text-on-surface-variant leading-relaxed"
          >
            Mantén tu alberca impecable con nuestras fórmulas químicas profesionales y equipos de filtración de última tecnología.
          </motion.p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-200/60 p-1.5 rounded-full flex gap-1 border border-slate-300/30">
            {(
              [
                { id: "todos", label: "Ver Todo" },
                { id: "quimicos", label: "Químicos" },
                { id: "equipos", label: "Equipos y Accesorios" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full font-sans text-xs md:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-primary text-on-primary shadow-md"
                    : "text-on-surface-variant hover:text-primary hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="glass-slab rounded-[2.5rem] bg-white overflow-hidden group flex flex-col justify-between border border-slate-100 premium-shadow"
              >
                {/* Image Wrapper */}
                <div className="h-64 md:h-72 relative overflow-hidden bg-slate-100 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-primary/95 text-on-primary text-xs font-bold font-sans px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {product.categoryLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed flex-grow mb-6">
                    {product.desc}
                  </p>

                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex flex-col">
                      <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Precio sugerido
                      </span>
                      <span className="font-serif text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                    </div>

                    <Link href={`/contacto?producto=${encodeURIComponent(product.name)}`}>
                      <button className="flex items-center gap-2 px-5 py-3 bg-primary text-on-primary rounded-xl font-sans text-xs font-bold hover:bg-primary/90 transition-all cursor-pointer">
                        Cotizar <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Info Box */}
        <motion.div
          {...fadeInUp}
          className="mt-20 p-8 rounded-[2rem] border border-dashed border-primary/30 bg-primary/5 text-center max-w-4xl mx-auto space-y-4"
        >
          <span className="material-symbols-outlined text-primary text-4xl font-light">
            info
          </span>
          <h3 className="font-serif text-xl font-bold text-on-surface">
            ¿Buscas refacciones o un equipo específico?
          </h3>
          <p className="font-sans text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Contamos con un catálogo extendido de repuestos, químicos especializados y sistemas de automatización. Si no encuentras lo que buscas, contáctanos y lo conseguimos para ti.
          </p>
          <Link href="/contacto" className="inline-block mt-2">
            <span className="text-primary font-sans text-sm font-bold hover:underline cursor-pointer">
              Preguntar por existencias e inventario adicional &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
