
import Icon from "@/components/Icon";
import Link from "next/link";
import Image from "next/image";



export default function NosotrosPage() {
  return (
    <main className="interior-page about-page">
      <div className="container space-y-24">
        {/* Header */}
        <div className="page-heading">
          <span
            className="text-primary font-sans text-sm font-bold uppercase tracking-[0.2em] block"
          >
            Sobre Nosotros
          </span>
          <h1
            className="font-serif text-4xl md:text-5xl font-semibold text-on-surface leading-tight"
          >
            Nuestra Historia y Compromiso
          </h1>
          <p
            className="font-sans text-base text-on-surface-variant leading-relaxed"
          >
            Somos un negocio familiar cimentado en la confianza, el rigor técnico y la pasión por entregar aguas cristalinas y seguras a nuestros clientes.
          </p>
        </div>

        {/* History / Trayectoria */}
        <div
          className="about-history grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl font-semibold text-on-surface">
              De un sueño familiar a la consolidación comercial
            </h2>
            <div className="space-y-4 font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
              <p>
                Nuestra trayectoria comenzó en el año <strong>2022</strong> en <strong>Ciudad Constitución, BCS</strong>, con la apertura y mantenimiento de un salón de fiestas. Cuidar de ese espacio nos abrió las puertas para especializarnos a fondo en el tratamiento de agua y sistemas hidráulicos.
              </p>
              <p>
                Gracias a nuestro compromiso constante, lo que inició como un proyecto local familiar se expandió rápidamente. Con los años nos hemos consolidado como el servicio líder en la región para el mantenimiento, dosificación y equipamiento de piscinas residenciales y comerciales.
              </p>
              <p>
                Hoy en día, somos un equipo fuerte de padre e hijo que fusiona la experiencia técnica de campo con la ingeniería y modernización de equipos, llevando nuestro estándar de calidad a todo el estado de Baja California Sur.
              </p>
            </div>
          </div>

          <div className="history-timeline lg:col-span-6 bg-surface p-8 rounded-[20px] border border-[var(--line)]  relative overflow-hidden flex flex-col justify-center">
            {/* Timeline graphics */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-2xl rounded-full translate-x-1/3 -translate-y-1/3" />
            <h3 className="font-serif text-xl font-bold mb-6 text-on-surface">Trayectoria Igohez</h3>
            <div className="space-y-6 relative border-l-2 border-primary/20 pl-6 ml-2">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-white shadow" />
                <span className="font-sans text-xs font-bold text-primary block">2022</span>
                <h4 className="font-serif text-sm font-bold text-on-surface mt-0.5">El Origen</h4>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                  Iniciamos operaciones en Ciudad Constitución enfocados en el cuidado integral de un salón de eventos familiar y su piscina.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-white shadow" />
                <span className="font-sans text-xs font-bold text-primary block">2023 - 2024</span>
                <h4 className="font-serif text-sm font-bold text-on-surface mt-0.5">Consolidación Matriz</h4>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                  Establecemos nuestra tienda física en Constitución y multiplicamos nuestra red de mantenimiento de piscinas residenciales y comerciales.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-white shadow" />
                <span className="font-sans text-xs font-bold text-primary block">2025 - Presente</span>
                <h4 className="font-serif text-sm font-bold text-on-surface mt-0.5">Expansión Estatal</h4>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                  Iniciamos operaciones en la ciudad de La Paz para llevar el sello de ingeniería y limpieza Igohez a nuevos clientes residenciales y comerciales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Co-founders / Equipo */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-sans text-xs font-bold uppercase tracking-[0.2em] block">
              Fundadores y Socios
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-on-surface">
              Liderazgo y Dirección Familiar
            </h2>
            <p className="font-sans text-sm text-on-surface-variant">
              Padre e hijo comprometidos en brindar excelencia e innovación técnica en cada proyecto hidráulico y químico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Isbac Card (Owner / Founder) */}
            <div
              className="founder-card bg-surface rounded-[20px] border border-[var(--line)]  p-8 md:p-10 flex flex-col justify-between gap-8"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-on-surface">
                      Isbac Sua Gorostieta Hernandez
                    </h3>
                    <span className="font-sans text-xs font-bold text-primary uppercase tracking-wider block mt-1">
                      Dueño, Líder y Experto en Piscinas
                    </span>
                    <span className="font-sans text-xs text-on-surface-variant block mt-0.5">
                      Sede Principal: Ciudad Constitución, BCS
                    </span>
                  </div>
                </div>

                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Con años de experiencia en campo, Isbac es la mente maestra detrás de los rigurosos procesos de saneamiento químico, rehabilitación estructural y diagnósticos técnicos de Igohez Piscinas. Su visión de servicio garantiza que cada cliente reciba una solución honesta y definitiva.
                </p>
              </div>

              {/* ONLY Place image placeholder for Isbac */}
              <div className="w-full">
                <ProfilePlaceholder name="Isbac Sua Gorostieta" />
              </div>
            </div>

            {/* Sebastian Card (Co-founder / Partner La Paz) */}
            <div
              className="founder-card bg-surface rounded-[20px] border border-[var(--line)]  p-8 md:p-10 flex flex-col justify-between gap-8"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-on-surface">
                      Ing. Sebastian Gorostieta Olivas
                    </h3>
                    <span className="font-sans text-xs font-bold text-primary uppercase tracking-wider block mt-1">
                      Cofundador y Socio de Igohez Piscinas
                    </span>
                    <span className="font-sans text-xs text-on-surface-variant block mt-0.5">
                      Director de Operaciones: La Paz, BCS
                    </span>
                  </div>
                </div>

                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  A cargo del crecimiento y expansión de la empresa en la capital del estado, Sebastian combina los conocimientos de ingeniería hidráulica y automatización para el diseño y optimización de cuartos de máquinas. Es responsable de coordinar las rutas de servicio comercial y residencial en La Paz.
                </p>
              </div>

              <div className="w-full">
                <ProfilePlaceholder name="Ing. Sebastian Gorostieta" imageUrl="/images/sebas.png" />
              </div>
            </div>
          </div>
        </div>

        {/* Physical Store (Tienda Constitución) */}
        <div
          className="about-store grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-[var(--line)]"
        >
          {/* Text Info */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-primary font-sans text-xs font-bold uppercase tracking-[0.2em] block">
              Instalaciones Físicas
            </span>
            <h2 className="font-serif text-3xl font-semibold text-on-surface leading-tight">
              Visita nuestra tienda física en Ciudad Constitución
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
              En nuestra sede central de Ciudad Constitución contamos con una tienda física donde podrás encontrar todo lo necesario para tu piscina. Ofrecemos asesoramiento en el mostrador para resolver dudas de dosificación de cloro, control de pH y compatibilidad de equipos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <Icon name="location_on" className="text-primary text-xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-on-surface">Dirección Sede Constitución</h4>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                    Ciudad Constitución, BCS, México.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="shopping_bag" className="text-primary text-xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-on-surface">Inventario en Tienda</h4>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                    Químicos Poolquim, floculantes Flokant, reactivos, cepillos, mangueras y refacciones de stock.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link href="/contacto" className="button button-primary">
                  Contactar Sucursal Constitución
                </Link>
            </div>
          </div>

          {/* Place image placeholder for Store */}
          <div className="lg:col-span-5 h-[320px]">
            <StorePlaceholder imageUrl="/images/sucursal-igohez.jpg" />
          </div>
        </div>
      </div>
    </main>
  );
}

function ProfilePlaceholder({ name, imageUrl }: { name: string; imageUrl?: string }) {
  return <div className="founder-portrait">{imageUrl ? <Image src={imageUrl} alt={name} fill sizes="(max-width: 767px) 100vw, 40vw" className="cover-image" /> : <div className="founder-monogram" role="img" aria-label={name}><span aria-hidden="true">IG</span><Icon name="water" size={36} /></div>}</div>;
}

function StorePlaceholder({ imageUrl }: { imageUrl?: string }) {
  return <div className="store-photo">{imageUrl && <Image src={imageUrl} alt="Sucursal Igohez en Ciudad Constitución" fill sizes="(max-width: 767px) 100vw, 40vw" className="cover-image" />}</div>;
}
