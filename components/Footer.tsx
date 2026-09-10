import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-invitation"><p>Tu piscina merece<br /><span className="editorial-emphasis">un cuidado excepcional.</span></p><Link href="/contacto" className="text-link">Hablemos de tu piscina <Icon name="arrow_outward" size={28} /></Link></div>
    <div className="container footer-grid">
      <div className="footer-brand"><Link href="/" className="brand" aria-label="Igohez Piscinas, inicio"><span className="brand-image"><Image src="/images/Logo-h-azulm.png" alt="Igohez Piscinas" fill sizes="200px" className="brand-light" /><Image src="/images/Logo-h-blanco.png" alt="" fill sizes="200px" className="brand-dark" /></span><span className="brand-caption">PISCINAS</span></Link><p>Limpieza, mantenimiento y equipamiento profesional de piscinas con la máxima calidad.</p></div>
      <div><h3>Servicios</h3><ul><li><Link href="/servicios#mantenimiento">Mantenimiento Semanal</Link></li><li><Link href="/servicios#mantenimiento">Balance Químico</Link></li><li><Link href="/servicios#equipamiento">Reparación de Equipos</Link></li></ul></div>
      <div><h3>Empresa</h3><ul><li><Link href="/">Inicio</Link></li><li><Link href="/nosotros">Nosotros</Link></li><li><Link href="/productos">Catálogo de Productos</Link></li><li><Link href="/proyectos">Galería de Proyectos</Link></li></ul></div>
      <div><h3>Contacto</h3><p>Recibe asesoría personalizada o cotiza tu mantenimiento.</p><Link href="/contacto" className="text-link">Escríbenos Hoy <Icon name="arrow_outward" size={20} /></Link></div>
    </div>
    <div className="container footer-bottom"><p>© {new Date().getFullYear()} Igohez Piscinas. Todos los derechos reservados.</p><Icon name="water" size={30} /></div>
  </footer>;
}
