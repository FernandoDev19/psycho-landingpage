import {
  HeartIcon,
  HomeIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Suspense } from "react";

const chatCards = [
  {
    text: "Siento que mi paciencia con quienes más quiero se agota muy rápido.",
    time: "9:15 pm",
  },
  {
    text: "Intento despejar mi mente para descansar, pero los pensamientos no paran.",
    time: "9:22 pm",
  },
  {
    text: "Me embarga un sentimiento de culpa cada vez que intento tomar un respiro.",
    time: "10:29 pm",
  },
  {
    text: "El cansancio acumulado y la tensión ya forman parte de mi rutina diaria.",
    time: "10:36 pm",
  },
  {
    text: "Por dentro me siento desbordada aunque por fuera disimule que todo está bien.",
    time: "11:43 pm",
  },
];

const pillars = [
  {
    title: "Regulación emocional",
    desc: "Comprende el origen de tus emociones en un entorno de aceptación y escucha.",
    icon: HeartIcon,
  },
  {
    title: "Establecer límites saludables",
    desc: "Protege tu bienestar sin culpa y aprende a comunicar asertivamente tus necesidades.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Reconstruir tu autoestima",
    desc: "Reconecta con tus fortalezas e identidad más allá de las exigencias cotidianas.",
    icon: SparklesIcon,
  },
  {
    title: "Nutrir tus relaciones",
    desc: "Fomenta pactos de convivencia más sanos, armónicos y empáticos en tu vida.",
    icon: UsersIcon,
  },
  {
    title: "Restaurar la calma en tu entorno",
    desc: "Genera una dinámica de hogar equilibrada y libre de sobrecarga permanente.",
    icon: HomeIcon,
  },
];

export default function EmpathySection() {
  return (
    <section id="empathy" className="w-full flex flex-col">
      {/* Sub-section 1: Empatía e identificación */}
      <div className="w-full bg-linear-to-b from-purple-50/50 via-purple-50/30 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Left */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-block bg-purple-100 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                ¿Reconoces estas situaciones?
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
                Te enfocas en cuidar a los demás…{" "}
                <span className="text-primary">¿pero quién cuida de ti?</span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                <p>
                  ¿Llegas al final de la jornada exhausto pero con la mente
                  llena de preocupaciones inconclusas?
                </p>
                <p>
                  ¿Tratas de mantener todo bajo control mientras sientes una
                  creciente sensación de tensión, cansancio o desconexión
                  interior?
                </p>
                <p>
                  A muchas personas se les ha enseñado a priorizar las
                  expectativas externas sin aprender herramientas para proteger
                  su propio equilibrio emocional.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm space-y-4">
                <p className="text-neutral-800 font-bold text-base sm:text-lg">
                  Posponer tus necesidades de forma prolongada suele generar:
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Dificultad constante para lograr un descanso reparador",
                    "Sensación frecuente de irritabilidad o agobio",
                    "Culpa recurrente al buscar momentos personales",
                    "Distanciamiento o tensión en tus vínculos cercanos",
                    "Impresión de estar viviendo en piloto automático",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm sm:text-base text-neutral-700 font-medium"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-primary font-semibold text-base sm:text-lg italic border-l-4 border-primary pl-4 py-1">
                Lo más agotador es sentir que tu propia esencia se desdibuja
                entre tantas responsabilidades.
              </p>
            </div>

            {/* Image Right */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="relative bg-white p-3 rounded-3xl shadow-xl border border-purple-100">
                  <Suspense fallback={<div>Cargando...</div>}>
                    <Image
                      className="rounded-2xl object-cover w-full h-[380px] sm:h-[440px]"
                      src="/imgs/espacio-para-ti.webp"
                      alt="Bienestar emocional"
                      width={400}
                      height={500}
                      unoptimized
                      priority={false}
                    />
                  </Suspense>
                  <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-4 rounded-2xl shadow-lg border border-purple-100 max-w-[240px]">
                    <p className="text-xs text-neutral-500 font-medium">
                      Recordatorio diario
                    </p>
                    <p className="text-xs font-bold text-primary mt-1">
                      &quot;Cuidar de ti no es egoísmo, es una necesidad
                      fundamental.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-section 2: Chat Cards */}
      <div className="w-full bg-gradient-to-b from-purple-900 to-indigo-950 text-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="w-max mx-auto bg-purple-800/80 text-purple-200 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-purple-700">
              Reflexiones Habituales
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Cuando guardas silencio, el estrés emocional termina pasando
              factura
            </h3>
            <p className="text-purple-200 text-sm sm:text-base">
              Mensajes internos que muchas personas experimentan cuando el
              agotamiento se acumula:
            </p>
          </div>

          {/* Chat bubbles list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            {chatCards.map((card, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl rounded-tl-xs p-4 sm:p-5 shadow-md hover:bg-white/15 transition-colors flex flex-col justify-between gap-3"
              >
                <p className="text-sm sm:text-base text-purple-50 font-medium leading-relaxed">
                  &quot;{card.text}&quot;
                </p>
                <span className="text-xs text-purple-300 font-mono self-end">
                  {card.time}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto pt-4 space-y-6">
            <p className="text-purple-200 text-sm sm:text-base leading-relaxed">
              Si no atiendes estas señales a tiempo, la sobrecarga puede
              debilitar tu salud física, emocional y tus relaciones.
            </p>

            <h4 className="text-xl sm:text-2xl font-bold text-amber-300 tracking-wide">
              Mereces una vida basada en la serenidad, no en el agotamiento.
            </h4>
          </div>
        </div>
      </div>

      {/* Sub-section 3: Pilar de soluciones */}
      <div className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="w-max mx-auto bg-purple-100 text-primary text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
              Tu Proceso de Transformación
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
              Un camino para reencontrar tu equilibrio
            </h3>
            <p className="text-base sm:text-lg text-neutral-600">
              Te brindo una guía estructurada y profesional para acompañarte a:
            </p>
          </div>

          {/* Grid of Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="bg-purple-50/40 hover:bg-purple-50 border border-purple-100/80 rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-lg font-bold text-primary italic">
              No tienes que atravesar esto en soledad.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=573142099080&text=Hola%21+Me+gustar%C3%ADa+iniciar+un+proceso+terapeutico&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white rounded-2xl px-8 py-3.5 font-bold text-base shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Solicitar mi primera consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
