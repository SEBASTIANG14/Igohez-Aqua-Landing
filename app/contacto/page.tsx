"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
} as const;

// The main form component that uses search parameters
function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    interes: "servicio",
    mensaje: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Pre-fill fields based on query parameters
  useEffect(() => {
    const productParam = searchParams.get("producto");
    if (productParam) {
      setFormData((prev) => ({
        ...prev,
        interes: "producto",
        mensaje: `Hola, me interesa cotizar el producto: ${productParam}. Por favor envíenme información sobre precios y disponibilidad.`,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name] : "" }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.correo.trim()) {
      newErrors.correo = "El correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = "El formato de correo no es válido";
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El número telefónico es obligatorio";
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\s+/g, ""))) {
      newErrors.telefono = "Debe ingresar un número de 10 dígitos";
    }
    if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        interes: "servicio",
        mensaje: "",
      });
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
      {/* Contact Info Side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-5 space-y-6"
      >
        <div className="glass-slab p-8 rounded-[2.5rem] bg-white border border-slate-100 premium-shadow space-y-8">
          <h2 className="font-serif text-2xl font-bold text-on-surface">
            Información de Contacto
          </h2>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
            Estamos disponibles para asesorarte en la selección de químicos, refacciones, equipos de bombeo y planes de mantenimiento semanal.
          </p>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-xl">phone</span>
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-400">Teléfono</h4>
                <p className="font-sans text-base text-on-surface font-semibold mt-1">+52 (55) 5555-5555</p>
                <p className="font-sans text-xs text-on-surface-variant">Lunes a Sábado, 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-400">Correo Electrónico</h4>
                <p className="font-sans text-base text-on-surface font-semibold mt-1">contacto@igohezaqua.com</p>
                <p className="font-sans text-xs text-on-surface-variant">Respuesta en menos de 24 horas</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-400">Ubicación</h4>
                <p className="font-sans text-base text-on-surface font-semibold mt-1">CDMX, México</p>
                <p className="font-sans text-xs text-on-surface-variant">Servicio a zona metropolitana y alrededores</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="p-8 bg-[#03045E] text-white rounded-[2.5rem] shadow-xl">
          <h4 className="font-serif text-lg font-bold mb-3">Atención Inmediata</h4>
          <p className="font-sans text-xs text-slate-300 leading-relaxed">
            Si requieres cotización de un equipo especial o tienes una emergencia de filtrado, no dudes en contactar directamente a nuestra línea telefónica de soporte técnico.
          </p>
        </div>
      </motion.div>

      {/* Form Side */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7"
      >
        <form
          onSubmit={handleSubmit}
          className="glass-slab p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 premium-shadow space-y-6"
        >
          <h2 className="font-serif text-2xl font-bold text-on-surface mb-2">
            Envíanos un mensaje
          </h2>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
            Completa los siguientes datos y un especialista técnico te atenderá.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="nombre" className="font-sans text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.nombre ? "border-red-500" : "border-slate-200 focus:border-primary"
                }`}
                placeholder="Juan Pérez"
              />
              {errors.nombre && (
                <p className="text-red-500 text-xs font-sans font-medium">{errors.nombre}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="correo" className="font-sans text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.correo ? "border-red-500" : "border-slate-200 focus:border-primary"
                }`}
                placeholder="juan@ejemplo.com"
              />
              {errors.correo && (
                <p className="text-red-500 text-xs font-sans font-medium">{errors.correo}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="telefono" className="font-sans text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Teléfono de Contacto
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.telefono ? "border-red-500" : "border-slate-200 focus:border-primary"
                }`}
                placeholder="5512345678"
              />
              {errors.telefono && (
                <p className="text-red-500 text-xs font-sans font-medium">{errors.telefono}</p>
              )}
            </div>

            {/* Interest Area */}
            <div className="space-y-2">
              <label htmlFor="interes" className="font-sans text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Área de Interés
              </label>
              <select
                id="interes"
                name="interes"
                value={formData.interes}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                <option value="servicio">Mantenimiento y Limpieza</option>
                <option value="quimicos">Compra de Químicos</option>
                <option value="producto">Equipamiento e Instalación</option>
                <option value="diagnostico">Diagnóstico Técnico</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="mensaje" className="font-sans text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Detalles de tu solicitud
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.mensaje ? "border-red-500" : "border-slate-200 focus:border-primary"
              }`}
              placeholder="Describe detalladamente las dimensiones de tu piscina, los problemas que presenta o los productos químicos/equipos que requieres..."
            />
            {errors.mensaje && (
              <p className="text-red-500 text-xs font-sans font-medium">{errors.mensaje}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-on-primary font-sans text-sm font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/30 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Enviando solicitud...</span>
              </>
            ) : (
              <>
                <span>Enviar Mensaje</span>
                <span className="material-symbols-outlined text-base">send</span>
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* Success Modal Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 max-w-md w-full text-center space-y-6 shadow-2xl border border-slate-100"
            >
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto scale-110">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-on-surface">
                  ¡Mensaje Enviado!
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Muchas gracias por escribirnos. Tu solicitud ha sido recibida con éxito. Un especialista técnico de Igohez Piscinas se pondrá en contacto contigo en breve para brindarte la asesoría correspondiente.
                </p>
              </div>
              <div>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="w-full py-3 bg-primary text-on-primary rounded-xl font-sans text-sm font-bold shadow-md hover:bg-primary/95 transition-all cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactoPage() {
  return (
    <main className="pt-28 md:pt-36 pb-20 px-6 md:px-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto space-y-4">
          <motion.span
            {...fadeInUp}
            className="text-primary font-sans text-sm font-bold uppercase tracking-[0.2em] block"
          >
            Contacto
          </motion.span>
          <motion.h1
            {...fadeInUp}
            className="font-serif text-4xl md:text-5xl font-extrabold text-on-surface leading-tight"
          >
            Ponte en Contacto
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="font-sans text-base text-on-surface-variant leading-relaxed"
          >
            ¿Tienes dudas, necesitas una cotización de químicos o deseas programar un mantenimiento? Escríbenos.
          </motion.p>
        </div>

        {/* Wrap form component with search params in Suspense to satisfy Next.js static builds */}
        <Suspense fallback={
          <div className="flex justify-center items-center py-20">
            <svg className="animate-spin h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        }>
          <ContactFormContent />
        </Suspense>
      </div>
    </main>
  );
}
