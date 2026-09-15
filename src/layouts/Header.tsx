"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { title: "Inicio", href: "#hero" },
  { title: "Servicios", href: "#services" },
  { title: "Sobre mí", href: "#about" },
  { title: "Resultados", href: "#results" },
  { title: "Testimonios", href: "#testimonials" },
  { title: "Contacto", href: "#contact" },
];

function CallActionButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=573142099080&text=Hola%21+Me+gustar%C3%ADa+iniciar+un+proceso+terapeutico&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
    >
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span>Agenda tu sesión</span>
    </a>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-1"
          : "bg-white/80 backdrop-blur-sm border-b border-purple-100/60 py-2"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand Name */}
          <div className="shrink-0 flex items-center">
            <Link href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-linear-to-tr from-primary to-purple-400 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                <Image src="/imgs/isaura-florez.webp" alt="Logo" width={100} height={100} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-neutral-800 group-hover:text-primary transition-colors">
                  Isaura Flórez
                </span>
                <span className="text-xs font-medium text-neutral-500">
                  Psicóloga
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-neutral-700 hover:text-primary font-medium px-3 py-2 text-sm rounded-lg hover:bg-purple-50/60 transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <CallActionButton />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-neutral-700 hover:text-primary hover:bg-purple-50 focus:outline-none transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-100 animate-fadeIn">
            <div className="flex flex-col space-y-2 px-2 pb-3">
              {links.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2.5 text-base font-medium text-neutral-700 hover:text-primary hover:bg-purple-50 rounded-xl transition-colors"
                >
                  {link.title}
                </a>
              ))}
              <div className="pt-3 px-2">
                <CallActionButton />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
