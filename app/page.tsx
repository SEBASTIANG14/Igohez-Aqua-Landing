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
    <main className="overflow-hidden bg-white">
      <Hero />
      <QuickIntro />
      <CoreServicesShowcase />
      <WhyChooseUs />
      <ProcessTimeline />
      <FeaturedStats />
      <Testimonials />
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
              alt="Igohez Piscinas"
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
            Limpieza y mantenimiento profesional de piscinas
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

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/60 font-sans text-[10px] uppercase tracking-[0.3em] font-bold">Desplazar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
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
            Bienvenidos a Igohez Piscinas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-on-surface leading-tight font-extrabold">
            Tu piscina siempre cristalina y lista para disfrutar
          </h2>
          <p className="font-sans text-base text-on-surface-variant leading-relaxed">
            En Igohez Piscinas nos especializamos en brindar soluciones de mantenimiento, balance de químicos y suministro de equipos de la más alta calidad. Nuestro compromiso es garantizar la salud y claridad del agua para que tú solo te preocupes por relajarte.
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
            alt="Mantenimiento de piscinas"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

function CoreServicesShowcase() {
  const services = [
    {
      title: "Mantenimiento Semanal",
      desc: "Limpieza profunda de fondo, cepillado de muros, desnatado y vaciado de trampas para un agua limpia de forma continua.",
      icon: "cleaning_services",
      link: "/servicios"
    },
    {
      title: "Balance Químico",
      desc: "Dosificación exacta de cloro, ajuste de pH, alcalinidad y tratamientos preventivos y correctivos contra algas.",
      icon: "science",
      link: "/servicios"
    },
    {
      title: "Equipos y Reparación",
      desc: "Solución de fallas y mantenimiento preventivo a motobombas, filtros, sistemas de calefacción y tableros.",
      icon: "construction",
      link: "/servicios"
    },
    {
      title: "Productos Premium",
      desc: "Suministro de químicos especializados, repuestos y accesorios de limpieza de las marcas líderes del mercado.",
      icon: "shopping_bag",
      link: "/productos"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-primary font-sans text-sm font-bold uppercase tracking-[0.2em] block">
            Nuestras Especialidades
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-on-surface">
            ¿Qué Hacemos en Igohez Piscinas?
          </h2>
          <p className="font-sans text-base text-on-surface-variant">
            Ofrecemos un catálogo completo de soluciones profesionales para garantizar el funcionamiento óptimo de tus equipos y la máxima pureza del agua.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <motion.div
              key={s.title}
              {...fadeInUp}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 premium-shadow hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl font-light">
                    {s.icon}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-on-surface">{s.title}</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="pt-6">
                <Link href={s.link} className="text-primary text-xs font-bold font-sans flex items-center gap-1.5 hover:gap-3 transition-all">
                  Conoce más <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const benefits = [
    {
      title: "Técnicos Certificados",
      desc: "Nuestro personal recibe capacitación técnica continua en química de agua y mantenimiento de sistemas hidráulicos.",
      icon: "verified_user"
    },
    {
      title: "Químicos de Grado Premium",
      desc: "Utilizamos productos químicos de alta pureza que garantizan la desinfección total sin dañar tus ojos ni tu piel.",
      icon: "health_and_safety"
    },
    {
      title: "Calendarización Confiable",
      desc: "Programamos visitas semanales en fechas y horarios acordados para que planifiques tus actividades con total tranquilidad.",
      icon: "calendar_month"
    },
    {
      title: "Transparencia Absoluta",
      desc: "Te entregamos reportes claros al concluir cada visita de mantenimiento, detallando el estado de tu piscina y las acciones realizadas.",
      icon: "analytics"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left column */}
        <motion.div {...fadeInUp} className="lg:col-span-5 space-y-6">
          <span className="text-primary font-sans text-sm font-bold uppercase tracking-[0.2em] block">
            El Estándar Igohez
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-on-surface leading-tight">
            La diferencia entre un servicio común y un cuidado profesional
          </h2>
          <p className="font-sans text-base text-on-surface-variant leading-relaxed">
            Mantener una piscina cristalina y saludable requiere técnica, consistencia y los productos correctos. En Igohez Piscinas no improvisamos; seguimos estrictos protocolos de calidad en cada visita semanal.
          </p>
          <div className="pt-4">
            <Link href="/contacto">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-sans text-sm font-bold premium-shadow hover:scale-105 transition-all cursor-pointer">
                Agendar una Inspección
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right column */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              {...fadeInUp}
              className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 premium-shadow flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">{b.icon}</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-on-surface">{b.title}</h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Análisis Químico",
      desc: "Medimos parámetros de cloro, pH y alcalinidad total antes de dosificar, para asegurar la dosis exacta."
    },
    {
      number: "02",
      title: "Limpieza Física",
      desc: "Aspiramos el fondo, retiramos impurezas superficiales, cepillamos muros y vaciamos canastillas."
    },
    {
      number: "03",
      title: "Filtrado y Lavado",
      desc: "Realizamos retrolavados de filtro de arena periódicamente para remover sedimentos y liberar la presión."
    },
    {
      number: "04",
      title: "Entrega e Informe",
      desc: "Revisamos el correcto flujo de agua y te entregamos tu piscina lista y libre de bacterias."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-primary font-sans text-sm font-bold uppercase tracking-[0.2em] block">
            Nuestra Metodología
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-on-surface">
            ¿Cómo Cuidamos tu Piscina?
          </h2>
          <p className="font-sans text-base text-on-surface-variant">
            Nuestro servicio semanal sigue una rutina rigurosa de mantenimiento paso a paso para garantizar que el agua esté siempre impecable.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-[56px] left-[15%] right-[15%] h-[2px] bg-primary/10 z-0" />
          
          {steps.map((step) => (
            <motion.div
              key={step.number}
              {...fadeInUp}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 premium-shadow relative z-10 flex flex-col gap-4 text-center md:text-left"
            >
              <div className="w-14 h-14 bg-primary text-on-primary rounded-2xl flex items-center justify-center font-serif text-xl font-bold mx-auto md:mx-0 shadow-lg shadow-primary/20">
                {step.number}
              </div>
              <h3 className="font-serif text-lg font-bold text-on-surface mt-2">{step.title}</h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedStats() {
  const stats = [
    { value: "1.2k+", label: "Piscinas Mantenidas" },
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

function Testimonials() {
  const testimonials = [
    {
      name: "Alejandra Ruiz",
      role: "Propietaria Residencial, Valle de Bravo",
      quote: "Desde que contraté el mantenimiento semanal con Igohez Piscinas, no he tenido que preocuparme por nada. El agua está increíblemente cristalina y la atención de los técnicos es impecable.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      role: "Administrador de Club Deportivo",
      quote: "Excelente servicio técnico. Nos ayudaron a instalar y automatizar el nuevo sistema de filtrado y bomba en tiempo récord. Son sumamente profesionales y puntuales.",
      rating: 5
    },
    {
      name: "Sofia G. L.",
      role: "Propietaria Residencial, San Pedro Garza",
      quote: "El reporte de parámetros semanal es excelente. Me da mucha tranquilidad ver los niveles exactos de pH y saber que la piscina es completamente segura para mis hijos.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-primary font-sans text-sm font-bold uppercase tracking-[0.2em] block">
            Testimonios de Clientes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-on-surface">
            Opiniones que Generan Confianza
          </h2>
          <p className="font-sans text-base text-on-surface-variant">
            La satisfacción de quienes confían en nosotros para el cuidado de sus piscinas es nuestro mejor respaldo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              {...fadeInUp}
              className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 premium-shadow flex flex-col justify-between gap-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg fill-current">star</span>
                  ))}
                </div>
                <p className="font-sans text-sm text-on-surface-variant italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              <div className="border-t border-slate-200/60 pt-4 flex flex-col">
                <span className="font-serif text-sm font-bold text-on-surface">{t.name}</span>
                <span className="font-sans text-xs text-on-surface-variant mt-0.5">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeCTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.h2
          {...fadeInUp}
          className="font-serif text-3xl md:text-4xl text-on-surface font-extrabold"
        >
          ¿Listo para transformar tu piscina?
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
