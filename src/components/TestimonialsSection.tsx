"use client";

import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "En las sesiones encontré la comprensión que tanto necesitaba. Isaura me enseñó a comprender el origen de mi ansiedad y a soltar cargas que no me correspondían.",
    name: "M. Rodríguez",
    role: "Madre y Profesional",
    initials: "MR",
    stars: 5,
  },
  {
    quote:
      "Aprender a poner límites sin sentir que fallaba a los demás cambió por completo mi dinámica social. Hoy en día me siento más libre y seguro de mí mismo.",
    name: "L. Pérez",
    role: "Madre de familia",
    initials: "LP",
    stars: 5,
  },
  {
    quote:
      "Creía que vivir en constante tensión era algo inevitable. Gracias al proceso aprendí herramientas muy concretas para gestionar el estrés y volver a disfrutar de mi día a día.",
    name: "C. Mendoza",
    role: "Empresaria y Mamá",
    initials: "CM",
    stars: 5,
  },
  {
    quote:
      "La terapia fue el regalo más valioso para mi salud mental. Entendí que priorizar mi bienestar es indispensable para dar lo mejor a las personas que amo.",
    name: "A. Sánchez",
    role: "Profesional independiente",
    initials: "AS",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 340;
      const scrollTo =
        direction === "left"
          ? scrollRef.current.scrollLeft - cardWidth
          : scrollRef.current.scrollLeft + cardWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = 320;
      const index = Math.round(scrollPosition / cardWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full bg-linear-to-b from-white via-purple-50/30 to-purple-50/60 py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 sm:mb-16 gap-6">
          <div className="text-center md:text-left space-y-3">
            <div className="w-max mx-auto md:mx-0 bg-purple-100 text-primary text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
              Experiencias Terapéuticas
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
              Testimonios de Pacientes
            </h2>
            <p className="text-neutral-600 text-base max-w-xl">
              Relatos de personas que decidieron transformar su vida y recuperar su estabilidad emocional.
            </p>
          </div>

          {/* Navigation Controls for Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-purple-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform active:scale-95 cursor-pointer"
              aria-label="Anterior testimonio"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-purple-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform active:scale-95 cursor-pointer"
              aria-label="Siguiente testimonio"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 pt-2 px-1 scroll-smooth"
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[290px] sm:min-w-[340px] max-w-[360px] bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-purple-100/80 snap-center shrink-0 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle Quote Watermark */}
              <div className="absolute top-3 right-4 text-purple-100 text-6xl font-serif select-none pointer-events-none group-hover:text-purple-200/60 transition-colors">
                “
              </div>

              <div>
                {/* Star Rating */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: item.stars }).map((_, starIdx) => (
                    <svg
                      key={starIdx}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-amber-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 italic relative z-10">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 border-t border-purple-50 pt-5">
                <div className="w-11 h-11 rounded-full bg-linear-to-tr from-primary to-purple-400 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  {item.initials}
                </div>
                <div>
                  <p className="font-bold text-neutral-900 text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-neutral-500 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Indicators */}
        <div className="flex justify-center items-center gap-2 mt-2 sm:hidden">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all ${
                activeIndex === idx
                  ? "w-6 bg-primary"
                  : "w-2 bg-purple-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
