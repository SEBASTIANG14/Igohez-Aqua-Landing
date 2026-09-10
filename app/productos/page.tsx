"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/productos";

export default function ProductosPage() {
  const [activeTab, setActiveTab] = useState<"todos" | "quimicos" | "equipos">("todos");
  const filteredProducts = activeTab === "todos" ? products : products.filter(product => product.category === activeTab);
  return <main className="interior-page"><div className="container">
    <div className="page-heading"><p className="eyebrow">Nuestra Tienda</p><h1>Químicos y Equipamiento Esencial</h1><p>Consigue los químicos de mayor pureza y los accesorios básicos de limpieza para mantener tu piscina limpia, desinfectada y lista para disfrutar.</p></div>
    <div className="filter-bar"><div className="filters" role="group" aria-label="Filtrar productos">{([{ id: "todos", label: "Ver Todo" }, { id: "quimicos", label: "Químicos" }, { id: "equipos", label: "Equipos y Accesorios" }] as const).map(filter => <button type="button" className="filter-button" key={filter.id} onClick={() => setActiveTab(filter.id)} aria-pressed={activeTab === filter.id} aria-controls="products-grid">{filter.label}</button>)}</div><p className="result-count" role="status">{filteredProducts.length} productos</p></div>
    <div className="product-grid" id="products-grid">{filteredProducts.map(product => <article className="product-card" key={product.id}>
      <div className="product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 767px) 100vw, (max-width: 900px) 50vw, 33vw" /></div>
      <div className="product-content"><div className="product-meta"><span>{product.brand}</span><span>{product.categoryLabel}</span></div><h2>{product.name}</h2><p className="product-description">{product.desc}</p><div className="product-versions"><p>Presentaciones en stock:</p><div className="version-list">{product.versions.map(version => <span key={version}>{version}</span>)}</div></div><div className="product-bottom"><div><small>Precio</small><strong>{product.price}</strong></div><Link href={`/contacto?producto=${encodeURIComponent(product.name)}`} className="button button-primary" aria-label={`Cotizar ${product.name}`}>Cotizar <Icon name="arrow_outward" size={18} /></Link></div></div>
    </article>)}</div>
    <Reveal className="help-banner"><div><h2>¿Buscas un químico o refacción específica?</h2><p>Contamos con acceso a un catálogo extendido de repuestos hidráulicos, químicos especializados y sistemas automáticos de dosificación. Escríbenos si necesitas un producto que no ves aquí y lo conseguimos.</p></div><Link href="/contacto" className="text-link">Consultar inventario adicional <Icon name="arrow_outward" /></Link></Reveal>
  </div></main>;
}
