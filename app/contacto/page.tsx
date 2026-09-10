"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Icon from "@/components/Icon";
import { contactMailto, initialContact, interestLabels, validateContact, type ContactData } from "@/lib/contact";

const fieldLabels = { nombre: "Nombre completo", correo: "Correo electrónico", telefono: "Teléfono de contacto", interes: "Área de interés", mensaje: "Detalles de tu solicitud" };

function ContactFormContent() {
  const params = useSearchParams();
  return <ContactForm key={params.toString()} product={params.get("producto")} service={params.get("servicio")} />;
}

function ContactForm({ product, service }: { product: string | null; service: string | null }) {
  const [formData, setFormData] = useState(() => initialContact(product, service));
  const [errors, setErrors] = useState<Partial<Record<keyof ContactData, string>>>({});
  const [prepared, setPrepared] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const draftRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (Object.keys(errors).length) summaryRef.current?.focus(); }, [errors]);
  useEffect(() => { if (prepared) draftRef.current?.focus(); }, [prepared]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData(previous => ({ ...previous, [name]: value }));
    setPrepared(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(formData);
    setErrors(nextErrors);
    setPrepared(Object.keys(nextErrors).length === 0);
  }

  return <div className="contact-grid grid grid-cols-1 lg:grid-cols-12 items-start">
    <aside className="contact-sidebar lg:col-span-5">
      <p className="section-label">Atención personal, de principio a fin</p>
      <h2>Hablemos de<br /><span className="editorial-emphasis">tu piscina.</span></h2>
      <p>Cuéntanos qué necesitas. Te asesoramos en mantenimiento, químicos y equipos para encontrar la solución adecuada.</p>
      <div className="contact-methods">
        <div><Icon name="phone" size={24} /><div><h3>Prefieres una llamada</h3><a href="tel:+526131093611" className="contact-detail-link">+52 (613) 109-3611</a></div></div>
        <div><Icon name="mail" size={24} /><div><h3>Escríbenos directamente</h3><a href="mailto:contacto@igohezaqua.com" className="contact-detail-link">contacto@igohezaqua.com</a></div></div>
        <div><Icon name="location_on" size={24} /><div><h3>Dónde trabajamos</h3><p>Ciudad Constitución y La Paz,<br />Baja California Sur.</p><p>Zonas cercanas: consulta cobertura.</p></div></div>
      </div>
      <div className="contact-urgent"><Icon name="water" size={30} /><h3>¿Un problema con el agua o el equipo?</h3><p>Para una solicitud urgente, llama directamente y consulta disponibilidad.</p><a href="tel:+526131093611" className="text-link">Llamar a Igohez <Icon name="arrow_outward" size={18} /></a></div>
    </aside>

    <form onSubmit={handleSubmit} noValidate className="contact-form lg:col-span-7" aria-labelledby="contact-form-title">
      <p className="eyebrow">El primer paso</p>
      <h2 id="contact-form-title">Cuéntanos qué tienes en mente</h2>
      <p className="form-intro">Prepara tu solicitud y envíala desde tu aplicación de correo. Todos los campos son obligatorios.</p>
      {Object.keys(errors).length > 0 && <div ref={summaryRef} tabIndex={-1} className="form-error-summary" role="alert"><h3>Revisa estos datos para continuar</h3><ul>{Object.entries(errors).map(([key, message]) => <li key={key}><a href={`#${key}`}>{fieldLabels[key as keyof ContactData]}: {message}</a></li>)}</ul></div>}
      <div className="form-fields">
        {([{ name: "nombre", type: "text", autoComplete: "name", placeholder: "Tu nombre", maxLength: 100 }, { name: "correo", type: "email", autoComplete: "email", placeholder: "nombre@correo.com", maxLength: 254 }, { name: "telefono", type: "tel", autoComplete: "tel", placeholder: "+52 613 109 3611", maxLength: 24 }] as const).map(field => <div className="form-field" key={field.name}>
          <label htmlFor={field.name}>{fieldLabels[field.name]}</label>
          <input {...field} id={field.name} required value={formData[field.name]} onChange={handleChange} aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? `${field.name}-error` : undefined} />
          {errors[field.name] && <p id={`${field.name}-error`} className="form-error">{errors[field.name]}</p>}
        </div>)}
        <div className="form-field"><label htmlFor="interes">Área de interés</label><select id="interes" name="interes" required value={formData.interes} onChange={handleChange} aria-invalid={!!errors.interes} aria-describedby={errors.interes ? "interes-error" : undefined}>{Object.entries(interestLabels).map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select>{errors.interes && <p className="form-error" id="interes-error">{errors.interes}</p>}</div>
      </div>
      <div className="form-field"><label htmlFor="mensaje">Detalles de tu solicitud</label><textarea id="mensaje" name="mensaje" required maxLength={2000} rows={5} value={formData.mensaje} onChange={handleChange} placeholder="¿Dónde está tu piscina y qué servicio o producto necesitas?" aria-invalid={!!errors.mensaje} aria-describedby={errors.mensaje ? "mensaje-error mensaje-hint" : "mensaje-hint"} /><p id="mensaje-hint" className="field-hint">Incluye tu ciudad y el motivo de tu consulta. Evita información sensible.</p>{errors.mensaje && <p id="mensaje-error" className="form-error">{errors.mensaje}</p>}</div>
      <button type="submit" className="button button-primary form-submit">Preparar mi solicitud <Icon name="arrow_forward" size={20} /></button>
      <p className="form-note"><Icon name="info" size={17} />Revisarás el mensaje antes de enviarlo desde tu correo.</p>
      {prepared && <div ref={draftRef} tabIndex={-1} className="contact-draft" role="region" aria-labelledby="draft-title">
        <p className="eyebrow">Solicitud preparada</p><h3 id="draft-title">Continúa en tu correo</h3>
        <p>Tu mensaje todavía no se ha enviado. Abre tu aplicación de correo, revísalo y pulsa enviar allí. Tus datos siguen en este formulario para que puedas editarlos.</p>
        <a href={contactMailto(formData)} className="button button-primary">Abrir mi correo <Icon name="mail" size={20} /></a>
        <p className="field-hint">Si no se abre ninguna aplicación, escribe a <a href="mailto:contacto@igohezaqua.com">contacto@igohezaqua.com</a> o <a href="tel:+526131093611">llámanos</a>.</p>
      </div>}
    </form>
  </div>;
}

export default function ContactoPage() {
  return <main className="interior-page contact-page"><div className="container">
    <div className="page-heading"><p className="eyebrow">Contacto · Igohez Piscinas</p><h1>El buen cuidado<br /><span className="editorial-emphasis">empieza aquí.</span></h1><p>Agenda tu mantenimiento, consulta por un equipo o resuelve tus dudas. Estamos para ayudarte.</p></div>
    <Suspense fallback={<div className="contact-loading" role="status">Preparando el formulario… Puedes llamarnos al <a href="tel:+526131093611">+52 (613) 109-3611</a>.</div>}><ContactFormContent /></Suspense>
  </div></main>;
}
