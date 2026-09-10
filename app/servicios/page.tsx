import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import PoolVideo from "@/components/PoolVideo";
import { services } from "@/lib/servicios";

export default function ServiciosPage() {
  return <main className="interior-page"><div className="container">
    <div className="page-heading"><p className="eyebrow">Nuestros Servicios</p><h1>Soluciones Profesionales para Piscinas</h1><p>En Igohez Piscinas brindamos servicios preventivos, correctivos y de equipamiento con el más alto rigor de ingeniería y cuidado estético.</p></div>
    <div className="service-list">{services.map(service => <section key={service.id} id={service.id} className={`service-detail ${service.isUpcoming ? "service-upcoming" : ""}`}>
      <div className="service-copy"><p className="section-label">{service.badge}</p><p className="service-subtitle">{service.subtitle}</p><h2>{service.title}</h2><p>{service.desc}</p><div className="service-includes"><h3>¿Qué incluye este servicio?</h3><ul>{service.details.map(detail => <li key={detail}><Icon name="check" size={18} /><span>{detail}</span></li>)}</ul></div>
      {service.features && <div className="service-features">{service.features.map(feature => <div key={feature.title}><h4><Icon name={feature.icon} size={20} />{feature.title}</h4><p>{feature.desc}</p></div>)}</div>}
      {service.isUpcoming ? <button className="button button-disabled" disabled>Próximamente Disponible</button> : <Link href={`/contacto?servicio=${encodeURIComponent(service.title)}`} className="button button-primary" aria-label={`Cotizar Servicio de ${service.title}`}>Cotizar servicio <Icon name="arrow_outward" size={20} /></Link>}
      </div><div className="service-media">{service.mediaUrl && <PoolVideo src={service.mediaUrl} label={service.title} poster="/images/fondo-inicio.jpeg" />}</div>
    </section>)}</div>
    <Reveal className="help-banner"><div><h2>¿Tienes una emergencia técnica en tu piscina?</h2><p>¿El agua de tu piscina amaneció turbia, o el sistema de bombeo tiene fugas severas? Damos soporte de emergencia y diagnóstico exprés.</p></div><Link href="/contacto" className="button button-primary">Agendar Diagnóstico Express <Icon name="arrow_outward" size={19} /></Link></Reveal>
  </div></main>;
}
