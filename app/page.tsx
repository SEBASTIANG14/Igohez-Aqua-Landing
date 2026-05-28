"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
} as const;

export default function LandingPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <QuickIntro />
      <FeaturedStats />
      <HomeCTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-90 scale-110"
        >
          <source
            src="/videos/video-hero.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Soft bottom fade to white for smooth section transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      {/* Overlay content - Clean with text shadow for maximum legibility */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="p-8 md:p-12 rounded-[2rem]"
        >
          {/* Logo */}
          <motion.div
            {...fadeInUp}
            className="relative h-28 md:h-36 w-full max-w-[300px] md:max-w-[450px] mx-auto mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
          >
            <Image
              src="/images/Logo-h-blanco.png"
              alt="Igohez Aqua"
              fill
              className="object-contain scale-[2.2] origin-center"
              priority
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            {...fadeInUp}
            className="font-sans font-bold text-lg md:text-2xl text-white max-w-2xl mx-auto mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] tracking-wide uppercase"
          >
            Limpieza y mantenimiento profesional de albercas
          </motion.p>

          {/* Actions */}
          <motion.div
            {...fadeInUp}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link href="/servicios">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-sans text-sm font-bold shadow-xl shadow-primary/20 hover:shadow-primary/45 hover:-translate-y-1 transition-all cursor-pointer">
                EXPLORAR SERVICIOS
              </button>
            </Link>
            <Link href="/proyectos">
              <button className="glass-slab text-white border-white/40 bg-white/10 px-10 py-4 rounded-full font-sans text-sm font-bold hover:bg-white/20 transition-all cursor-pointer backdrop-blur-sm drop-shadow-md">
                VER GALERÍA
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function QuickIntro() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeInUp} className="space-y-6">
          <span className="text-primary font-sans text-sm font-bold uppercase tracking-[0.2em] block">
            Bienvenidos a Igohez Aqua
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-on-surface leading-tight font-extrabold">
            Tu alberca siempre cristalina y lista para disfrutar
          </h2>
          <p className="font-sans text-base text-on-surface-variant leading-relaxed">
            En Igohez Aqua nos especializamos en brindar soluciones de mantenimiento, balance de químicos y suministro de equipos de la más alta calidad. Nuestro compromiso es garantizar la salud y claridad del agua para que tú solo te preocupes por relajarte.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="/servicios">
              <span className="text-primary font-sans text-sm font-bold flex items-center gap-2 group cursor-pointer hover:gap-4 transition-all">
                Conoce nuestros servicios <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          {...fadeInUp}
          className="relative h-[350px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/chubby_man_cleaning_pool.png"
            alt="Mantenimiento de albercas"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedStats() {
  const stats = [
    { value: "1.2k+", label: "Albercas Mantenidas" },
    { value: "99.9%", label: "Claridad de Agua" },
    { value: "15+", label: "Años de Experiencia" },
    { value: "24/7", label: "Soporte y Atención" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#03045E] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
        {stats.map((stat) => (
          <motion.div key={stat.label} {...fadeInUp}>
            <div className="text-4xl md:text-5xl font-bold font-serif text-primary-container mb-2">
              {stat.value}
            </div>
            <div className="font-sans text-xs font-bold uppercase tracking-widest text-slate-300">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function HomeCTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-surface-container-low/30 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.h2
          {...fadeInUp}
          className="font-serif text-3xl md:text-4xl text-on-surface font-extrabold"
        >
          ¿Listo para transformar tu alberca?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="font-sans text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed"
        >
          Ya sea que necesites un servicio de mantenimiento urgente, balance de químicos, o la instalación de un nuevo sistema de bombeo, estamos listos para ayudarte.
        </motion.p>
        <motion.div {...fadeInUp} className="pt-4">
          <Link href="/contacto">
            <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-sans text-sm font-bold premium-shadow hover:scale-105 transition-all cursor-pointer">
              CONTÁCTANOS AHORA
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
