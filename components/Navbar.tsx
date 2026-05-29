"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Servicios", path: "/servicios" },
    { name: "Productos", path: "/productos" },
    { name: "Proyectos", path: "/proyectos" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-12 flex justify-center">
      <div className="w-full max-w-7xl flex justify-between items-center px-6 md:px-8 py-3 bg-white/90 backdrop-blur-md shadow-lg rounded-full border border-white/20">
        {/* Logo Container */}
        <Link href="/" className="relative h-10 w-[150px] md:w-[180px] overflow-visible">
          <Image
            src="/images/Logo-h-azulm.png"
            alt="Igohez Piscinas"
            fill
            className="object-contain scale-[1.7] origin-left"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative font-sans text-sm font-semibold transition-colors duration-300 py-1 ${isActive ? "text-primary" : "text-on-surface/70 hover:text-primary"
                  }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/contacto" className="hidden sm:inline-block">
            <button className="px-6 py-2.5 bg-primary text-on-primary rounded-full font-sans text-sm font-bold premium-shadow hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Contáctanos
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-on-surface/80 hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-white shadow-2xl rounded-2xl p-6 flex flex-col gap-4 border border-slate-100 md:hidden z-40"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-base font-semibold py-2 px-4 rounded-xl transition-colors ${isActive
                    ? "bg-primary/10 text-primary"
                    : "text-on-surface/75 hover:bg-slate-50 hover:text-primary"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link href="/contacto" onClick={() => setIsOpen(false)} className="w-full mt-2">
              <button className="w-full py-3 bg-primary text-on-primary rounded-full font-sans text-base font-bold shadow-lg">
                Contáctanos
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
