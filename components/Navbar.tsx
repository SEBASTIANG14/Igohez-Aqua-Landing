"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

const navItems = [{ name: "Inicio", path: "/" }, { name: "Nosotros", path: "/nosotros" }, { name: "Servicios", path: "/servicios" }, { name: "Productos", path: "/productos" }, { name: "Proyectos", path: "/proyectos" }];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { setIsOpen(false); toggleRef.current?.focus(); } };
    const onPointer = (event: PointerEvent) => { if (!menuRef.current?.contains(event.target as Node)) setIsOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onPointer); };
  }, [isOpen]);

  return <header className="site-header">
    <div className="nav-shell" ref={menuRef} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsOpen(false); }}>
      <Link href="/" className="brand" aria-label="Igohez Piscinas, inicio" onClick={() => setIsOpen(false)}>
        <span className="brand-image"><Image src="/images/Logo-h-azulm.png" alt="Igohez Piscinas" fill sizes="200px" className="brand-light" /><Image src="/images/Logo-h-blanco.png" alt="" fill sizes="200px" className="brand-dark" /></span>
        <span className="brand-caption">PISCINAS</span>
      </Link>
      <nav className="desktop-nav" aria-label="Navegación principal">{navItems.map(item => <Link href={item.path} key={item.path} className={pathname === item.path ? "is-active" : ""} aria-current={pathname === item.path ? "page" : undefined}>{item.name}</Link>)}</nav>
      <Link href="/contacto" className="button button-primary nav-contact" aria-current={pathname === "/contacto" ? "page" : undefined}>Cotizar <Icon name="arrow_outward" size={18} /></Link>
      <button ref={toggleRef} className="menu-toggle" type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}><Icon name={isOpen ? "close" : "menu"} size={25} /></button>
      {isOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Navegación móvil">{[...navItems, { name: "Contáctanos", path: "/contacto" }].map(item => <Link key={item.path} href={item.path} aria-current={pathname === item.path ? "page" : undefined} onClick={() => setIsOpen(false)}>{item.name}<Icon name="arrow_outward" size={19} /></Link>)}</nav>}
    </div>
  </header>;
}
