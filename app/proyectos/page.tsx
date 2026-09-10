"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/proyectos";

export default function ProyectosPage() {
  const [filter, setFilter] = useState<"todos" | "residencial" | "comercial">("todos");
  const filteredProjects = filter === "todos" ? projects : projects.filter(project => project.category === filter);
  return <main className="interior-page"><div className="container">
    <div className="page-heading"><p className="eyebrow">Nuestra Galería</p><h1>Proyectos Realizados</h1><p>Explora nuestro portafolio de piscinas residenciales y comerciales cuidadas bajo la excelencia de Igohez Piscinas.</p></div>
    <div className="filter-bar"><div className="filters" role="group" aria-label="Filtrar proyectos">{([{ id: "todos", label: "Todos" }, { id: "residencial", label: "Residenciales" }, { id: "comercial", label: "Comerciales" }] as const).map(item => <button type="button" className="filter-button" key={item.id} onClick={() => setFilter(item.id)} aria-pressed={filter === item.id} aria-controls="projects-grid">{item.label}</button>)}</div><p className="result-count" role="status">{filteredProjects.length} proyectos</p></div>
    <div className="project-grid" id="projects-grid">{filteredProjects.map(project => <article className="project-card" key={project.id}><div className="project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 767px) 100vw, 50vw" className="cover-image" /></div><div className="project-content"><div className="project-meta"><span>{project.categoryLabel}</span><span><Icon name="location_on" size={15} />{project.location}</span></div><h2>{project.title}</h2><p>{project.desc}</p></div></article>)}</div>
    <Reveal className="help-banner"><div><h2>¿Quieres que tu piscina luzca así de impecable?</h2><p>Nuestros especialistas certificados están listos para implementar planes de mantenimiento continuo y balance químico que mantendrán el agua transparente los 365 días del año.</p></div><Link href="/contacto" className="button button-primary">Agendar Diagnóstico Sin Costo <Icon name="arrow_outward" size={19} /></Link></Reveal>
  </div></main>;
}
