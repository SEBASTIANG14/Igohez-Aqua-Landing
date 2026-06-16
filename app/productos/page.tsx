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

interface ProductItem {
  id: string;
  name: string;
  category: "quimicos" | "equipos";
  categoryLabel: string;
  brand: string;
  desc: string;
  versions: string[];
  price: string;
  image: string;
}

export default function ProductosPage() {
  const [activeTab, setActiveTab] = useState<"todos" | "quimicos" | "equipos">("todos");

  const products: ProductItem[] = [
    {
      id: "cloro-poolquim",
      name: "Cloro en Polvo, Pastilla y Granulado",
      category: "quimicos",
      categoryLabel: "Químicos",
      brand: "Poolquim",
      desc: "Cloro de alta pureza diseñado para la desinfección total y mantenimiento microbiológico del agua. Elimina bacterias, hongos y algas.",
      versions: ["1 Kilo", "5 Kilos", "Cuñete 50 Kilos"],
      price: "A cotizar",
      image: "/images/cloro.jpeg",
    },
    {
      id: "ph-mas-poolquim",
      name: "pH + Elevador de pH",
      category: "quimicos",
      categoryLabel: "Químicos",
      brand: "Poolquim",
      desc: "Producto balanceador formulado para aumentar el pH del agua cuando se encuentra en niveles ácidos, evitando irritación en piel y ojos.",
      versions: ["1 Kilo", "5 Kilos", "Cuñete 50 Kilos"],
      price: "A cotizar",
      image: "/images/clarifier.png",
    },
    {
      id: "ph-menos-poolquim",
      name: "pH - Reductor de pH",
      category: "quimicos",
      categoryLabel: "Químicos",
      brand: "Poolquim",
      desc: "Compuesto químico diseñado para disminuir niveles altos de pH y alcalinidad total, asegurando que el cloro trabaje al 100% de eficiencia.",
      versions: ["1 Kilo", "5 Kilos", "Cuñete 50 Kilos"],
      price: "A cotizar",
      image: "/images/chemicals.png",
    },
    {
      id: "floculante-flokant",
      name: "Floculante Clarificador Líquido",
      category: "quimicos",
      categoryLabel: "Químicos",
      brand: "Flokant",
      desc: "Clarificador y coagulante de alto rendimiento. Aglutina sedimentos y micropartículas suspendidas haciéndolas precipitar para su aspirado.",
      versions: ["1 Litro", "10 Litros", "50 Litros"],
      price: "A cotizar",
      image: "/images/floculante.jpeg",
    },
    {
      id: "carrito-aspirador",
      name: "Carrito Aspiradora de Fondo",
      category: "equipos",
      categoryLabel: "Equipos y Accesorios",
      brand: "Básico",
      desc: "Carro barredora manual diseñado para acoplar al maneral y succionar sedimentos, lodo y suciedad depositada en el fondo de la piscina.",
      versions: ["Estándar"],
      price: "A cotizar",
      image: "/images/pool_accessories.png",
    },
    {
      id: "manguera-flexible",
      name: "Manguera de Aspiración Flexible",
      category: "equipos",
      categoryLabel: "Equipos y Accesorios",
      brand: "Básico",
      desc: "Manguera flotante de alta flexibilidad y resistencia a la intemperie y aplastamiento, ideal para interconectar la barredora con la succión.",
      versions: ["Diferentes tamaños"],
      price: "A cotizar",
      image: "/images/pool_accessories.png",
    },
    {
      id: "maneral-aluminio",
      name: "Maneral Telescópico de Aluminio",
      category: "equipos",
      categoryLabel: "Equipos y Accesorios",
      brand: "Básico",
      desc: "Tubo telescópico extensible de aluminio anodizado, ligero y resistente, compatible con redes, cepillos y barredoras.",
      versions: ["Medida Ajustable"],
      price: "A cotizar",
      image: "/images/pool_accessories.png",
    },
    {
      id: "cepillo-muros",
      name: "Cepillo para Paredes y Pisos",
      category: "equipos",
      categoryLabel: "Equipos y Accesorios",
      brand: "Básico",
      desc: "Cepillo de cerdas de nylon reforzado de alta densidad, idóneo para tallar y desprender algas o sarro en muros y rincones.",
      versions: ["Estándar"],
      price: "A cotizar",
      image: "/images/pool_accessories.png",
    },
    {
      id: "reactivos-parametros",
      name: "Kit de Reactivos de Medición",
      category: "equipos",
      categoryLabel: "Equipos y Accesorios",
      brand: "Básico",
      desc: "Kit analizador químico por reactivos líquidos para monitorear con rapidez y exactitud los niveles de Cloro libre y pH en el agua.",
      versions: ["Estándar"],
      price: "A cotizar",
      image: "/images/chemicals.png",
    },
    {
      id: "red-sacahojas",
      name: "Red Sacahojas de Superficie y Fondo",
      category: "equipos",
      categoryLabel: "Equipos y Accesorios",
      brand: "Básico",
      desc: "Red reforzada con malla cerrada de nylon de alta durabilidad para la recolección ágil de hojas, insectos y basura flotante.",
      versions: ["Plana / Con Bolsa"],
      price: "A cotizar",
      image: "/images/pool_accessories.png",
    },
    {
      id: "flotador-pastillas",
      name: "Flotador Dosificador de Cloro",
      category: "equipos",
      categoryLabel: "Equipos y Accesorios",
      brand: "Básico",
      desc: "Dispensador flotante con anillo regulador de disolución lenta, apto para pastillas de cloro compactas de 3 pulgadas.",
      versions: ["Regulable"],
      price: "A cotizar",
      image: "/images/pool_accessories.png",
    }
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
            Químicos y Equipamiento Esencial
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="font-sans text-base text-on-surface-variant leading-relaxed"
          >
            Consigue los químicos de mayor pureza y los accesorios básicos de limpieza para mantener tu piscina limpia, desinfectada y lista para disfrutar.
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
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div className="space-y-4">
                    {/* Brand and category labels */}
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="bg-primary/10 text-primary text-[10px] font-bold font-sans px-3 py-1 rounded-full uppercase tracking-wider">
                        {product.brand}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed mb-4">
                      {product.desc}
                    </p>

                    {/* Versions / presentation sizes */}
                    {product.versions && product.versions.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          Presentaciones en stock:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.versions.map((ver) => (
                            <span key={ver} className="bg-slate-50 text-on-surface-variant text-[10px] font-sans px-2.5 py-1 rounded-lg border border-slate-200/50 font-medium">
                              {ver}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Price and quote button */}
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100">
                    <div className="flex flex-col">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Precio
                      </span>
                      <span className="font-serif text-base md:text-lg font-bold text-primary">
                        {product.price}
                      </span>
                    </div>

                    <Link href={`/contacto?producto=${encodeURIComponent(product.name)}`}>
                      <button className="flex items-center gap-2 px-5 py-3 bg-primary text-on-primary rounded-xl font-sans text-xs font-bold hover:bg-primary/90 transition-all cursor-pointer">
                        Cotizar <span className="material-symbols-outlined text-xs">arrow_forward</span>
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
            ¿Buscas un químico o refacción específica?
          </h3>
          <p className="font-sans text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Contamos con acceso a un catálogo extendido de repuestos hidráulicos, químicos especializados y sistemas automáticos de dosificación. Escríbenos si necesitas un producto que no ves aquí y lo conseguimos.
          </p>
          <Link href="/contacto" className="inline-block mt-2">
            <span className="text-primary font-sans text-sm font-bold hover:underline cursor-pointer">
              Consultar inventario adicional &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
