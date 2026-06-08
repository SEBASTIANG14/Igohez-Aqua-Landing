"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
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

export default function NosotrosPage() {
  return (
    <main className="pt-28 md:pt-36 pb-20 px-6 md:px-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.span
            {...fadeInUp}
            className="text-primary font-sans text-sm font-bold uppercase tracking-[0.2em] block"
          >
            Sobre Nosotros
          </motion.span>
          <motion.h1
            {...fadeInUp}
            className="font-serif text-4xl md:text-5xl font-extrabold text-on-surface leading-tight"
          >
            Nuestra Historia y Compromiso
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="font-sans text-base text-on-surface-variant leading-relaxed"
          >
            Somos un negocio familiar cimentado en la confianza, el rigor técnico y la pasión por entregar aguas cristalinas y seguras a nuestros clientes.
          </motion.p>
        </div>

        {/* History / Trayectoria */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl font-extrabold text-on-surface">
              De un sueño familiar a la consolidación comercial
            </h2>
            <div className="space-y-4 font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
              <p>
                Nuestra trayectoria comenzó en el año **2022** en **Ciudad Constitución, BCS**, con la apertura y mantenimiento de un salón de fiestas. Cuidar de ese espacio nos abrió las puertas para especializarnos a fondo en el tratamiento de agua y sistemas hidráulicos.
              </p>
              <p>
                Gracias a nuestro compromiso constante, lo que inició como un proyecto local familiar se expandió rápidamente. Con los años nos hemos consolidado como el servicio líder en la región para el mantenimiento, dosificación y equipamiento de piscinas residenciales y comerciales.
              </p>
              <p>
                Hoy en día, somos un equipo fuerte de padre e hijo que fusiona la experiencia técnica de campo con la ingeniería y modernización de equipos, llevando nuestro estándar de calidad a todo el estado de Baja California Sur.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-8 rounded-[2.5rem] border border-slate-100 premium-shadow relative overflow-hidden flex flex-col justify-center">
            {/* Timeline graphics */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-2xl rounded-full translate-x-1/3 -translate-y-1/3" />
            <h3 className="font-serif text-xl font-bold mb-6 text-on-surface">Trayectoria Igohez</h3>
            <div className="space-y-6 relative border-l-2 border-primary/20 pl-6 ml-2">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-white shadow" />
                <span className="font-sans text-xs font-bold text-primary block">2022</span>
                <h4 className="font-serif text-sm font-bold text-on-surface mt-0.5">El Origen</h4>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                  Iniciamos operaciones en Ciudad Constitución enfocados en el cuidado integral de un salón de eventos familiar y su piscina.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-white shadow" />
                <span className="font-sans text-xs font-bold text-primary block">2023 - 2024</span>
                <h4 className="font-serif text-sm font-bold text-on-surface mt-0.5">Consolidación Matriz</h4>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                  Establecemos nuestra tienda física en Constitución y multiplicamos nuestra red de mantenimiento de piscinas residenciales y comerciales.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-white shadow" />
                <span className="font-sans text-xs font-bold text-primary block">2025 - Presente</span>
                <h4 className="font-serif text-sm font-bold text-on-surface mt-0.5">Expansión Estatal</h4>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                  Iniciamos operaciones en la ciudad de La Paz para llevar el sello de ingeniería y limpieza Igohez a nuevos clientes residenciales y comerciales.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Co-founders / Equipo */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-sans text-xs font-bold uppercase tracking-[0.2em] block">
              Fundadores y Socios
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-on-surface">
              Liderazgo y Dirección Familiar
            </h2>
            <p className="font-sans text-sm text-on-surface-variant">
              Padre e hijo comprometidos en brindar excelencia e innovación técnica en cada proyecto hidráulico y químico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Isbac Card (Owner / Founder) */}
            <motion.div
              {...fadeInUp}
              className="bg-white rounded-[2.5rem] border border-slate-100 premium-shadow p-8 md:p-10 flex flex-col justify-between gap-8"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-on-surface">
                      Isbac Sua Gorostieta Hernandez
                    </h3>
                    <span className="font-sans text-xs font-bold text-primary uppercase tracking-wider block mt-1">
                      Dueño, Líder y Experto en Piscinas
                    </span>
                    <span className="font-sans text-[10px] text-slate-400 block mt-0.5">
                      Sede Principal: Ciudad Constitución, BCS
                    </span>
                  </div>
                </div>

                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Con años de experiencia en campo, Isbac es la mente maestra detrás de los rigurosos procesos de saneamiento químico, rehabilitación estructural y diagnósticos técnicos de Igohez Piscinas. Su visión de servicio garantiza que cada cliente reciba una solución honesta y definitiva.
                </p>
              </div>

              {/* ONLY Place image placeholder for Isbac */}
              <div className="w-full">
                <ProfilePlaceholder name="Isbac Sua Gorostieta" />
              </div>
            </motion.div>

            {/* Sebastian Card (Co-founder / Partner La Paz) */}
            <motion.div
              {...fadeInUp}
              className="bg-white rounded-[2.5rem] border border-slate-100 premium-shadow p-8 md:p-10 flex flex-col justify-between gap-8"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-on-surface">
                      Ing. Sebastian Gorostieta Olivas
                    </h3>
                    <span className="font-sans text-xs font-bold text-primary uppercase tracking-wider block mt-1">
                      Cofundador y Socio de Igohez Piscinas
                    </span>
                    <span className="font-sans text-[10px] text-slate-400 block mt-0.5">
                      Director de Operaciones: La Paz, BCS
                    </span>
                  </div>
                </div>

                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  A cargo del crecimiento y expansión de la empresa en la capital del estado, Sebastian combina los conocimientos de ingeniería hidráulica y automatización para el diseño y optimización de cuartos de máquinas. Es responsable de coordinar las rutas de servicio comercial y residencial en La Paz.
                </p>
              </div>

              <div className="w-full">
                <ProfilePlaceholder name="Ing. Sebastian Gorostieta" imageUrl="/images/sebas.png" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Physical Store (Tienda Constitución) */}
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-slate-200/60"
        >
          {/* Text Info */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-primary font-sans text-xs font-bold uppercase tracking-[0.2em] block">
              Instalaciones Físicas
            </span>
            <h2 className="font-serif text-3xl font-extrabold text-on-surface leading-tight">
              Visita nuestra tienda física en Ciudad Constitución
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
              En nuestra sede central de Ciudad Constitución contamos con una tienda física donde podrás encontrar todo lo necesario para tu piscina. Ofrecemos asesoramiento en el mostrador para resolver dudas de dosificación de cloro, control de pH y compatibilidad de equipos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">location_on</span>
                <div>
                  <h4 className="font-serif text-sm font-bold text-on-surface">Dirección Sede Constitución</h4>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                    Ciudad Constitución, BCS, México.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">shopping_bag</span>
                <div>
                  <h4 className="font-serif text-sm font-bold text-on-surface">Inventario en Tienda</h4>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                    Químicos Poolquim, floculantes Flokant, reactivos, cepillos, mangueras y refacciones de stock.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link href="/contacto">
                <button className="bg-primary text-on-primary px-8 py-3.5 rounded-full font-sans text-sm font-bold premium-shadow hover:scale-105 transition-all cursor-pointer">
                  Contactar Sucursal Constitución
                </button>
              </Link>
            </div>
          </div>

          {/* Place image placeholder for Store */}
          <div className="lg:col-span-5 h-[320px]">
            <StorePlaceholder imageUrl="/images/sucursal-igohez.jpg" />
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function ProfilePlaceholder({ name, imageUrl }: { name: string; imageUrl?: string }) {
  if (imageUrl) {
    return (
      <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden premium-shadow group bg-slate-100 border border-slate-100 flex items-stretch">
        <div className="relative w-full h-full min-h-[250px]">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] border-2 border-dashed border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/20 text-primary flex flex-col items-center justify-center p-6 text-center group hover:border-primary/40 hover:from-primary/10 hover:to-primary/25 transition-all duration-500 overflow-hidden">
      <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-primary/30 rounded-full blur-3xl opacity-40 transition-all duration-500 group-hover:scale-125" />
      <span className="material-symbols-outlined text-4xl mb-3 animate-pulse">account_circle</span>
      <h5 className="font-serif text-sm font-bold text-on-surface mb-1">Foto de {name}</h5>
      <p className="font-sans text-[11px] opacity-75 max-w-[160px] leading-relaxed">Espacio reservado para fotografía de perfil</p>
      <span className="font-sans text-[9px] uppercase tracking-wider mt-4 opacity-50 z-10 border border-current px-2.5 py-1 rounded-md font-bold">Recomendado: 600x800 px</span>
    </div>
  );
}

function StorePlaceholder({ imageUrl }: { imageUrl?: string }) {
  if (imageUrl) {
    return (
      <div className="relative w-full h-full min-h-[250px] rounded-[2.5rem] overflow-hidden premium-shadow group bg-slate-100 border border-slate-100">
        <Image
          src={imageUrl}
          alt="Sucursal Igohez"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[250px] rounded-[2.5rem] border-2 border-dashed border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/20 text-primary flex flex-col items-center justify-center p-6 text-center group hover:border-primary/40 hover:from-primary/10 hover:to-primary/25 transition-all duration-500 overflow-hidden">
      <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-primary/30 rounded-full blur-3xl opacity-40 transition-all duration-500 group-hover:scale-125" />
      <span className="material-symbols-outlined text-4xl mb-3 animate-pulse">storefront</span>
      <h5 className="font-serif text-sm font-bold text-on-surface mb-1">Fotografía de la Tienda</h5>
      <p className="font-sans text-[11px] opacity-75 max-w-[200px] leading-relaxed">Espacio reservado para imagen de la fachada o interior de la sucursal Constitución</p>
      <span className="font-sans text-[9px] uppercase tracking-wider mt-4 opacity-50 z-10 border border-current px-2.5 py-1 rounded-md font-bold font-sans">Recomendado: 800x600 px</span>
    </div>
  );
}
