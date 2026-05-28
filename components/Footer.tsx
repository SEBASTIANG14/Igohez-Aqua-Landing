import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface-dim pt-20 pb-10 px-6 md:px-12 border-t border-slate-100 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        {/* Brand Info */}
        <div className="col-span-1">
          <div className="relative h-14 w-[180px] mb-4">
            <Image
              src="/images/Logo-h-azulm.png"
              alt="Igohez Aqua"
              fill
              className="object-contain scale-[1.5] origin-left"
            />
          </div>
          <p className="font-sans font-medium text-on-surface-variant text-sm leading-relaxed">
            Limpieza, mantenimiento y equipamiento profesional de albercas con la máxima calidad.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-sans font-bold text-sm uppercase tracking-wider mb-6 text-on-surface">Servicios</h4>
          <ul className="space-y-4 font-sans text-on-surface-variant text-sm">
            <li>
              <Link href="/servicios" className="hover:text-primary transition-colors">
                Mantenimiento Semanal
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-primary transition-colors">
                Balance Químico
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-primary transition-colors">
                Reparación de Equipos
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-sans font-bold text-sm uppercase tracking-wider mb-6 text-on-surface">Empresa</h4>
          <ul className="space-y-4 font-sans text-on-surface-variant text-sm">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/productos" className="hover:text-primary transition-colors">
                Catálogo de Productos
              </Link>
            </li>
            <li>
              <Link href="/proyectos" className="hover:text-primary transition-colors">
                Galería de Proyectos
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter / Contact Quick Info */}
        <div>
          <h4 className="font-sans font-bold text-sm uppercase tracking-wider mb-6 text-on-surface">Contacto</h4>
          <p className="font-sans text-on-surface-variant text-sm mb-4">
            Recibe asesoría personalizada o cotiza tu mantenimiento.
          </p>
          <div className="flex gap-2">
            <Link href="/contacto" className="w-full">
              <button className="w-full bg-primary text-on-primary font-sans text-sm font-bold py-3 px-4 rounded-lg hover:bg-primary/95 hover:shadow-md transition-all cursor-pointer text-center">
                Escríbenos Hoy
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-on-surface/10 text-center">
        <p className="font-sans font-bold text-xs uppercase tracking-widest text-on-surface-variant">
          © {new Date().getFullYear()} Igohez Aqua. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
