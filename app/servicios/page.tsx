"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

interface ServiceFeature {
  title: string;
  desc: string;
  icon: string;
}

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  desc: string;
  details: string[];
  features?: ServiceFeature[];
  isUpcoming?: boolean;
  placeholderText: string;
  mediaUrl?: string; // Ruta al video (.mp4) o imagen (.webp, .jpg, .png)
}

export default function ServiciosPage() {
  const services: ServiceItem[] = [
    {
      id: "mantenimiento",
      title: "Mantenimiento Preventivo y Correctivo",
      subtitle: "Cuidado periódico o correctores de urgencia",
      badge: "Servicio Estrella",
      desc: "Garantiza un entorno higiénico, seguro y estéticamente impecable. Nos encargamos de todo el espectro físico y químico para que el agua de tu piscina esté siempre en óptimas condiciones.",
      details: [
        "Chequeo preciso de parámetros químicos de la piscina (Cloro, pH, Alcalinidad)",
        "Cepillado profundo de muros, escalones y líneas de flotación",
        "Aspirado profundo del fondo de la piscina para retirar impurezas finas",
        "Recolección de basura, hojas y residuos flotantes con red sacahojas",
        "Limpieza y vaciado de trampas de cabello y canastillas de skimmer",
        "Retrolavado y enjuague del filtro de arena o limpieza de cartuchos filtrantes",
        "Aplicación y dosificación precisa de químicos premium necesarios"
      ],
      features: [
        {
          title: "Piscinas Armables",
          desc: "Damos el mismo servicio completo de cepillado, aspirado y balance químico a piscinas inflables y estructurales.",
          icon: "layers"
        },
        {
          title: "Bomba Portátil Incluida",
          desc: "Si tu piscina no cuenta con un sistema de filtrado propio, llevamos nuestra bomba portátil para brindar el servicio al 100%.",
          icon: "settings_input_hdmi"
        }
      ],
      placeholderText: "Sube un video en bucle (.mp4) o fotografía de una piscina limpia e impecable.",
      mediaUrl: "/videos/aspirado.mp4"
    },
    {
      id: "rehabilitacion",
      title: "Rehabilitación de Piscinas Abandonadas",
      subtitle: "Restauración integral de piscinas deterioradas",
      badge: "Especialidad",
      desc: "Recuperamos piscinas que han estado sin uso prolongado, con acumulación de sarro severo, manchas, agua verde u óxido en mosaicos. Devolvemos el brillo y funcionalidad original a tu espacio.",
      details: [
        "Vaciado controlado y lavado a presión profunda con químicos ácidos especiales",
        "Eliminación total del sarro, hongos e incrustaciones en muros y pisos",
        "Pegado de mosaicos venecianos faltantes y resane de juntas dañadas",
        "Revisión, reparación y habilitación del sistema de filtrado y tuberías",
        "Tratamiento químico de choque en el primer llenado para garantizar pureza del agua"
      ],
      features: [
        {
          title: "Lista para Usar al 100%",
          desc: "Garantizamos que tanto el revestimiento como el sistema hidráulico y de filtrado queden funcionando a la perfección al terminar.",
          icon: "task_alt"
        }
      ],
      placeholderText: "Sube un video corto de lavado a presión o reparación de venecianos.",
      mediaUrl: "/videos/rehabilitacion.mp4"
    },
    {
      id: "equipamiento",
      title: "Instalación de Sistema de Bomba y Filtro",
      subtitle: "Equipamiento hidráulico y automatización",
      badge: "Soporte Técnico",
      desc: "Diseñamos, instalamos y renovamos el cuarto de máquinas de tu piscina. Colocamos sistemas de filtrado eficientes para piscinas que no los posean o que requieran actualización.",
      details: [
        "Instalación de motobombas autocebantes de alta eficiencia energética",
        "Montaje y carga de filtros de arena de fibra de vidrio y filtros de cartucho",
        "Instalación y configuración de cloradores de sal y dosificadores químicos automáticos",
        "Tendidos de tubería de PVC hidráulica cédula 80 de alta presión libre de fugas",
        "Mantenimiento e instalación de tableros eléctricos y sistemas de automatización"
      ],
      features: [
        {
          title: "Eficiencia Energética",
          desc: "Instalamos bombas de velocidad variable que reducen significativamente el consumo de energía eléctrica.",
          icon: "bolt"
        }
      ],
      placeholderText: "Sube un video o fotografía del agua fluyendo limpia a través de las boquillas de retorno.",
      mediaUrl: "/videos/instalacion.mp4"
    },
    {
      id: "construccion",
      title: "Construcción de Piscinas",
      subtitle: "Diseño y obra civil personalizada",
      badge: "Próximamente",
      isUpcoming: true,
      desc: "Muy pronto ofreceremos el servicio completo de diseño y edificación de piscinas de concreto armado. Llevaremos a la realidad la piscina de tus sueños con la máxima solidez estructural.",
      details: [
        "Diseño arquitectónico personalizado y modelado en 3D del jardín",
        "Excavación, armado de varilla y colado de concreto de alta resistencia",
        "Acabados premium en mosaico veneciano, cuarzo o de textura de mármol",
        "Instalación de iluminación LED subacuática a color y cascadas decorativas"
      ],
      features: [
        {
          title: "Obra Llave en Mano",
          desc: "Nos encargaremos de todo: desde la excavación inicial hasta la puesta en marcha hidráulica y el primer balanceo de agua.",
          icon: "home_repair_service"
        }
      ],
      placeholderText: "Se mostrará un render o video de modelado 3D de proyectos futuros.",
      mediaUrl: "/videos/construccion.mp4"
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
            Soluciones Profesionales para Piscinas
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="font-sans text-base text-on-surface-variant leading-relaxed"
          >
            En Igohez Piscinas brindamos servicios preventivos, correctivos y de equipamiento con el más alto rigor de ingeniería y cuidado estético.
          </motion.p>
        </div>

        {/* Services List - Alternating layout */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Content Card */}
                <div className="flex-1 bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 premium-shadow flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <span className={`text-xs font-bold font-sans px-4 py-1.5 rounded-full uppercase tracking-wider ${
                        service.isUpcoming 
                          ? "bg-slate-100 text-slate-500" 
                          : "bg-primary/10 text-primary"
                      }`}>
                        {service.badge}
                      </span>
                      <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {service.subtitle}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-on-surface">
                      {service.title}
                    </h2>
                    
                    <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
                      {service.desc}
                    </p>

                    {/* What's included checklist */}
                    <div className="space-y-3">
                      <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-primary">
                        ¿Qué incluye este servicio?
                      </h4>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                            <span className={`material-symbols-outlined text-lg mt-0.5 shrink-0 ${
                              service.isUpcoming ? "text-slate-400" : "text-primary"
                            }`}>
                              check_circle
                            </span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Special features/badges */}
                    {service.features && service.features.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className={`material-symbols-outlined text-lg ${
                                service.isUpcoming ? "text-slate-400" : "text-primary"
                              }`}>
                                {feature.icon}
                              </span>
                              <h5 className="font-serif text-xs md:text-sm font-bold text-on-surface">
                                {feature.title}
                              </h5>
                            </div>
                            <p className="font-sans text-[11px] md:text-xs text-on-surface-variant leading-relaxed pl-7">
                              {feature.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-8 mt-8 border-t border-slate-100">
                    {service.isUpcoming ? (
                      <button className="w-full py-4 bg-slate-100 text-slate-400 rounded-2xl font-sans text-sm font-bold cursor-not-allowed">
                        Próximamente Disponible
                      </button>
                    ) : (
                      <Link href={`/contacto?servicio=${encodeURIComponent(service.title)}`}>
                        <button className="w-full py-4 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary hover:text-on-primary text-primary rounded-2xl font-sans text-sm font-bold transition-all cursor-pointer">
                          Cotizar Servicio de {service.title}
                        </button>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Image / Video Media Showcase */}
                <div className="w-full lg:w-[40%] min-h-[350px]">
                  <ServiceMedia 
                    mediaUrl={service.mediaUrl}
                    text={service.placeholderText} 
                    upcoming={service.isUpcoming} 
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Banner Quick Help */}
        <motion.div
          {...fadeInUp}
          className="mt-24 p-8 md:p-12 bg-primary text-on-primary rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10 max-w-2xl text-center md:text-left space-y-2">
            <h3 className="font-serif text-2xl md:text-3xl font-bold">¿Tienes una emergencia técnica en tu piscina?</h3>
            <p className="font-sans text-sm text-white/80">
              ¿El agua de tu piscina amaneció turbia, o el sistema de bombeo tiene fugas severas? Damos soporte de emergencia y diagnóstico exprés.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link href="/contacto">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-sans text-sm font-bold hover:scale-105 transition-all shadow-lg cursor-pointer">
                Agendar Diagnóstico Express
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function ServiceMedia({ 
  mediaUrl, 
  text, 
  upcoming = false 
}: { 
  mediaUrl?: string; 
  text: string; 
  upcoming?: boolean 
}) {
  if (!mediaUrl) {
    return <ImagePlaceholder text={text} upcoming={upcoming} />;
  }

  // Detecta si es un video a partir de su extensión
  const isVideo = /\.(mp4|webm|ogg|mov)($|\?)/i.test(mediaUrl);

  return (
    <div className="relative w-full h-full min-h-[300px] rounded-[2.5rem] overflow-hidden premium-shadow group bg-slate-100 border border-slate-100 flex items-stretch">
      {isVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        >
          <source src={mediaUrl} />
          Tu navegador no soporta reproducción de video.
        </video>
      ) : (
        <div className="relative w-full h-full min-h-[300px]">
          <Image
            src={mediaUrl}
            alt={text}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      
      {/* Dynamic Overlay for upcoming or general hover */}
      {upcoming ? (
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[3px] flex flex-col items-center justify-center p-6 text-center text-white">
          <div className="absolute top-6 right-6 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            Próximamente
          </div>
          <span className="material-symbols-outlined text-4xl mb-2 text-white/90">construction</span>
          <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">Sección en Desarrollo</h4>
          <p className="font-sans text-[11px] opacity-80 max-w-[200px] mt-1 text-white/90">Obra civil y diseño 3D personalizado.</p>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
}

function ImagePlaceholder({ text, upcoming = false }: { text: string; upcoming?: boolean }) {
  return (
    <div className={`relative w-full h-full min-h-[300px] rounded-[2.5rem] border-2 border-dashed flex flex-col items-center justify-center p-8 text-center transition-all duration-500 overflow-hidden group ${
      upcoming 
        ? "border-slate-300 bg-slate-100/50 text-slate-400" 
        : "border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/20 text-primary hover:border-primary/40 hover:from-primary/10 hover:to-primary/25"
    }`}>
      {/* Background decoration bubble */}
      <div className={`absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl opacity-40 transition-all duration-500 group-hover:scale-125 ${
        upcoming ? "bg-slate-300" : "bg-primary/30"
      }`} />
      
      {upcoming && (
        <div className="absolute top-6 right-6 bg-slate-200 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Próximamente
        </div>
      )}
      
      <span className={`material-symbols-outlined text-5xl font-light mb-4 transition-transform duration-500 group-hover:scale-110 ${
        upcoming ? "text-slate-400" : "text-primary"
      } ${upcoming ? "" : "animate-pulse"}`}>
        {upcoming ? "construction" : "smart_display"}
      </span>
      <h4 className="font-serif text-sm font-bold mb-2 z-10 text-on-surface">
        {upcoming ? "Sección en Desarrollo" : "Espacio para Video o Foto"}
      </h4>
      <p className="font-sans text-xs opacity-75 max-w-[200px] leading-relaxed z-10">
        {text}
      </p>
      <span className="font-sans text-[9px] uppercase tracking-[0.15em] mt-5 opacity-60 z-10 border border-current px-2.5 py-1 rounded-md font-bold">
        Espacio Reservado
      </span>
    </div>
  );
}
