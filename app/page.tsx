"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
} as const;

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

export default function LandingPage() {
  return (
    <main className="bg-background selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Services />
      <Chemicals />
      <Stats />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex justify-center">
      <div className="w-full max-w-7xl flex justify-between items-center px-8 py-3 glass-slab rounded-full">
        <div className="text-2xl font-bold tracking-tighter text-on-surface font-serif">
          AquaClarity
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Projects", "Maintenance", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-sans text-sm font-semibold text-on-surface/70 hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="px-6 py-2 bg-primary text-on-primary rounded-full font-sans text-sm font-bold premium-shadow hover:scale-105 active:scale-95 transition-all">
          Book Service
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 scale-105">
        <Image
          src="/images/hero.png"
          alt="Luxury Infinity Pool"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="glass-slab p-12 rounded-[2rem]"
        >
          <motion.h1 
            {...fadeInUp}
            className="font-serif text-5xl md:text-7xl text-on-surface mb-6 leading-tight"
          >
            Pure Clarity. <br />
            <span className="text-primary italic">Effortless Precision.</span>
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10"
          >
            Experience the pinnacle of pool maintenance. Technology-driven care meets luxury aesthetics for homeowners who demand perfection.
          </motion.p>
          <motion.div 
            {...fadeInUp}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-sans text-sm font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
              EXPLORE SERVICES
            </button>
            <button className="glass-slab text-on-surface px-10 py-4 rounded-full font-sans text-sm font-bold hover:bg-white/60 transition-all">
              VIEW GALLERIES
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const serviceItems = [
    {
      title: "Weekly Cleaning",
      icon: "cleaning_services",
      desc: "Meticulous removal of debris, wall brushing, and surface skimming to ensure a pristine environment.",
    },
    {
      title: "Water Balancing",
      icon: "science",
      desc: "Advanced chemical analysis and precision adjustment of pH, alkalinity, and sanitizer levels.",
    },
    {
      title: "Equipment Repair",
      icon: "construction",
      desc: "Expert diagnostic and repair services for pumps, filters, heaters, and automated systems.",
    },
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.span 
          {...fadeInUp}
          className="text-primary font-sans text-sm font-bold uppercase tracking-[0.2em] mb-4 block"
        >
          Our Expertise
        </motion.span>
        <motion.h2 
          {...fadeInUp}
          className="font-serif text-4xl md:text-5xl text-on-surface"
        >
          Curated Maintenance Solutions
        </motion.h2>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {serviceItems.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeInUp}
            className="glass-slab p-8 rounded-[2rem] group hover:-translate-y-3 transition-all duration-500 premium-shadow"
          >
            <div className="w-16 h-16 bg-primary-container/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">
                {item.icon}
              </span>
            </div>
            <h3 className="font-serif text-2xl mb-4 text-on-surface">{item.title}</h3>
            <p className="font-sans text-on-surface-variant mb-8 leading-relaxed">
              {item.desc}
            </p>
            <a href="#" className="text-primary font-sans text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
              LEARN MORE <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Chemicals() {
  return (
    <section className="py-32 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span {...fadeInUp} className="text-primary font-sans text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
              The Laboratory
            </motion.span>
            <motion.h2 {...fadeInUp} className="font-serif text-4xl md:text-5xl text-on-surface">
              Premium Chemical Supplies
            </motion.h2>
            <motion.p {...fadeInUp} className="font-sans text-lg text-on-surface-variant mt-4">
              Professional-grade formulas designed for long-lasting stability and absolute water transparency.
            </motion.p>
          </div>
          <motion.button {...fadeInUp} className="bg-primary text-on-primary px-10 py-4 rounded-full font-sans text-sm font-bold premium-shadow hover:scale-105 transition-all">
            SHOP ALL PRODUCTS
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Featured Product */}
          <motion.div 
            {...fadeInUp}
            className="md:col-span-2 glass-slab rounded-[2rem] overflow-hidden group premium-shadow"
          >
            <div className="h-80 relative overflow-hidden">
              <Image 
                src="/images/chemicals.png" 
                alt="Pro-Series Treatment" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h4 className="font-serif text-2xl mb-2 text-on-surface">Pro-Series Shock Treatment</h4>
              <p className="text-on-surface-variant mb-6 font-sans">Rapid dissolve, low-residue chlorine for instant clarity.</p>
              <div className="flex justify-between items-center">
                <span className="font-serif text-3xl text-primary">$45.00</span>
                <button className="p-4 bg-primary text-on-primary rounded-full hover:scale-110 transition-all">
                  <span className="material-symbols-outlined">shopping_bag</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div {...fadeInUp} className="glass-slab rounded-[2rem] overflow-hidden group premium-shadow">
            <div className="h-64 relative overflow-hidden">
              <Image src="/images/algaecide.png" alt="Algaecide" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <h4 className="font-serif text-xl mb-2 text-on-surface">PureBlue Algaecide</h4>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-primary font-serif">$29.99</span>
                <button className="text-primary font-bold hover:underline font-sans text-sm">Add</button>
              </div>
            </div>
          </motion.div>

          {/* Product 3 */}
          <motion.div {...fadeInUp} className="glass-slab rounded-[2rem] overflow-hidden group premium-shadow">
            <div className="h-64 relative overflow-hidden">
              <Image src="/images/clarifier.png" alt="Clarifier" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <h4 className="font-serif text-xl mb-2 text-on-surface">Crystal Clarifier</h4>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-primary font-serif">$34.50</span>
                <button className="text-primary font-bold hover:underline font-sans text-sm">Add</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "1.2k+", label: "Pools Maintained" },
    { value: "99.9%", label: "Clarity Rating" },
    { value: "15+", label: "Years Experience" },
    { value: "24/7", label: "Support Access" },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#03045E] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
        {stats.map((stat) => (
          <motion.div key={stat.label} {...fadeInUp}>
            <div className="text-5xl md:text-6xl font-serif text-primary-container mb-2">{stat.value}</div>
            <div className="font-sans text-sm font-bold uppercase tracking-widest text-secondary-container/60">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-surface-dim pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-bold font-serif mb-6 text-on-surface">AquaClarity</div>
          <p className="font-sans text-on-surface-variant leading-relaxed">
            Effortless Precision in every drop. Modern pool care for the discerning owner.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-6 text-on-surface">Services</h4>
          <ul className="space-y-4 font-sans text-on-surface-variant text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Chemical Balancing</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Weekly Cleaning</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Equipment Repair</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-6 text-on-surface">Company</h4>
          <ul className="space-y-4 font-sans text-on-surface-variant text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Safety Audits</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-6 text-on-surface">Newsletter</h4>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-white/50 border-none rounded-lg px-4 py-3 text-sm w-full focus:ring-2 focus:ring-primary/20 outline-none"
            />
            <button className="bg-primary text-on-primary p-3 rounded-lg hover:bg-primary/90 transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-on-surface/10 text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-on-surface-variant">
          © 2024 AquaClarity Pool Services. Effortless Precision.
        </p>
      </div>
    </footer>
  );
}
