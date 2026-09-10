import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Igohez Piscinas - Limpieza y mantenimiento de piscinas",
  description: "Servicios profesionales de limpieza y mantenimiento de piscinas.",
  icons: {
    icon: "/images/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-background selection:bg-primary/20">
        <a className="skip-link" href="#main-content">Saltar al contenido</a>
        <Navbar />
        <div id="main-content" tabIndex={-1} className="flex-grow flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
