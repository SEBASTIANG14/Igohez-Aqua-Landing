import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import PoolVideo from "@/components/PoolVideo";
import { specialties, benefits, steps, stats, testimonials } from "@/lib/home-content";

export default function LandingPage() {
  return <main className="home-page">
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-heading">
        <p className="eyebrow">Igohez Piscinas · Baja California Sur</p>
        <h1 id="hero-title">Tu piscina,<br />en su <span>mejor momento.</span></h1>
        <p className="hero-description">Limpieza, mantenimiento y equipamiento profesional. Nosotros cuidamos cada detalle; tú disfrutas del agua.</p>
        <div className="hero-actions"><Link href="/contacto" className="button button-primary">Cotizar mi mantenimiento <Icon name="arrow_outward" size={20} /></Link><Link href="/servicios" className="text-link">Explorar servicios <Icon name="arrow_forward" size={19} /></Link></div>
        <div className="hero-location"><Icon name="location_on" size={20} /><p>Ciudad Constitución & La Paz<span>Atención residencial y comercial</span></p></div>
      </div>
      <div className="hero-visual"><div className="hero-media"><PoolVideo src="/videos/video-hero.mp4" poster="/images/fondo-inicio.jpeg" label="Limpieza y mantenimiento profesional de piscinas" eager autoPlay={false} /></div><div className="hero-caption"><span>Agua clara. Tiempo para ti.</span><Icon name="water" size={34} /></div></div>
      <div className="hero-service-line"><span>El cuidado integral de tu piscina</span><span>Mantenimiento</span><span>Balance químico</span><span>Equipamiento</span><Link href="/proyectos">Ver proyectos <Icon name="arrow_outward" size={18} /></Link></div>
    </section>

    <section className="section container intro-section">
      <Reveal className="intro-copy"><p className="eyebrow">01 / Bienvenidos a Igohez Piscinas</p><h2>Menos preocupaciones.<br /><span className="editorial-emphasis">Más tiempo en el agua.</span></h2><p>En Igohez Piscinas nos especializamos en brindar soluciones de mantenimiento, balance de químicos y suministro de equipos de la más alta calidad. Nuestro compromiso es garantizar la salud y claridad del agua para que tú solo te preocupes por relajarte.</p><Link href="/nosotros" className="text-link">Conoce a Igohez <Icon name="arrow_outward" /></Link></Reveal>
      <Reveal className="intro-image"><Image src="/images/chubby_man_cleaning_pool.png" alt="Técnico realizando el mantenimiento de una piscina" fill sizes="(max-width: 767px) 100vw, 45vw" className="cover-image" /></Reveal>
    </section>

    <section className="section section-tint">
      <div className="container"><Reveal className="section-heading"><p className="eyebrow">02 / Nuestras especialidades</p><h2>Cada detalle importa.<br /><span className="editorial-emphasis">Nos ocupamos de todos.</span></h2><p>Del balance del agua al funcionamiento de tus equipos: encuentra el cuidado que necesita tu piscina.</p></Reveal>
        <div className="specialty-grid">{specialties.map((service, i) => <Reveal key={service.title} className={`specialty specialty-${i}`} delay={i * 0.05}>
          {i === 0 && <div className="specialty-image"><Image src="/images/backyard_pool.png" alt="Piscina residencial con agua cristalina" fill sizes="(max-width: 767px) 100vw, 40vw" className="cover-image" /></div>}
          <div className="specialty-content"><Icon name={service.icon} size={30} /><h3>{service.title}</h3><p>{service.desc}</p><Link href={service.link} className="text-link" aria-label={`Conoce más sobre ${service.title}`}>Explorar <Icon name="arrow_outward" size={20} /></Link></div>
        </Reveal>)}</div>
      </div>
    </section>

    <section className="section container benefits-section">
      <Reveal className="benefits-heading"><p className="section-label">El Estándar Igohez</p><h2>La diferencia entre un servicio común y un cuidado profesional</h2><p>Mantener una piscina cristalina y saludable requiere técnica, consistencia y los productos correctos. En Igohez Piscinas no improvisamos; seguimos estrictos protocolos de calidad en cada visita semanal.</p><Link href="/contacto" className="button button-primary">Agendar una Inspección <Icon name="arrow_outward" size={19} /></Link></Reveal>
      <div className="benefit-grid">{benefits.map((benefit, i) => <Reveal key={benefit.title} className="benefit" delay={i * 0.04}><Icon name={benefit.icon} size={30} /><h3>{benefit.title}</h3><p>{benefit.desc}</p></Reveal>)}</div>
    </section>

    <section className="section section-tint process-section"><div className="container"><Reveal className="section-heading"><p className="eyebrow">Nuestra Metodología</p><h2>¿Cómo Cuidamos tu Piscina?</h2><p>Nuestro servicio semanal sigue una rutina rigurosa de mantenimiento paso a paso para garantizar que el agua esté siempre impecable.</p></Reveal><ol className="process-grid">{steps.map((step, i) => <li key={step.number}><Reveal delay={i * 0.07}><div className="step-marker"><span>{step.number}</span><Icon name="arrow_forward" size={23} /></div><h3>{step.title}</h3><p>{step.desc}</p></Reveal></li>)}</ol></div></section>

    <section className="stats-section" aria-label="Igohez en cifras"><div className="container stats-grid">{stats.map(stat => <Reveal key={stat.label}><p className="stat-value">{stat.value}</p><p className="stat-label">{stat.label}</p></Reveal>)}</div></section>

    <section className="section container testimonials-section"><Reveal className="section-heading"><p className="section-label">Testimonios de Clientes</p><h2>Opiniones que Generan Confianza</h2><p>La satisfacción de quienes confían en nosotros para el cuidado de sus piscinas es nuestro mejor respaldo.</p></Reveal><div className="testimonials-grid">{testimonials.map((testimonial, i) => <Reveal key={testimonial.name} className="testimonial" delay={i * 0.05}><div className="stars" role="img" aria-label={`${testimonial.rating} de 5 estrellas`}>{Array.from({ length: testimonial.rating }, (_, index) => <Icon key={index} name="star" size={16} />)}</div><blockquote><p>{testimonial.quote}</p></blockquote><div className="testimonial-person"><span className="initials" aria-hidden="true">{testimonial.name.split(" ").slice(0, 2).map(part => part[0]).join("")}</span><div><h3>{testimonial.name}</h3><p>{testimonial.role}</p></div></div></Reveal>)}</div></section>

    <section className="container home-cta"><div className="cta-copy"><p className="eyebrow">Igohez Piscinas</p><h2>¿Listo para transformar tu piscina?</h2><p>Ya sea que necesites un servicio de mantenimiento urgente, balance de químicos, o la instalación de un nuevo sistema de bombeo, estamos listos para ayudarte.</p><Link href="/contacto" className="button button-primary">Contáctanos ahora <Icon name="arrow_outward" size={20} /></Link></div><div className="cta-image"><Image src="/images/luxury_pool.png" alt="Piscina cuidada y lista para disfrutar" fill sizes="(max-width: 767px) 100vw, 40vw" className="cover-image" /></div></section>
  </main>;
}
