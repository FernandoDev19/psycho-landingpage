import {
  ExclamationTriangleIcon,
  HeartIcon,
  UserIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: UserIcon,
    title: "Acompañamiento Individual para Jóvenes y Adultos",
    badge: "Enfoque Personalizado",
    tagline: "Espacio de escucha profunda para recuperar tu armonía interior.",
    bullets: [
      "Comprender lo que estás sintiendo",
      "Identificar patrones que te limitan",
      "Desarrollar herramientas prácticas para manejar la ansiedad y el estrés",
      "Reconectar con tu proyecto de vida e identidad",
    ],
    wspText: "Hola Isaura! Quisiera iniciar un proceso terapéutico individual para mujeres."
  },
  {
    icon: HeartIcon,
    title: "Talleres y conferencia",
    badge: "Bienestar Integral",
    tagline: "Encuentros diseñados para reflexionar, aprender y compartir en comunidad.",
    bullets: [
      "Temas de bienestar emocional y crecimiento personal",
      "Herramientas prácticas para la vida diaria",
      "Espacios de conexión y sentido",
      "Modalidad virtual y/o presencial",
    ],
    wspText: "Hola Isaura! Quisiera participar en uno de tus talleres o conferencias."
  },
  {
    icon: ExclamationTriangleIcon,
    title: "Acompañamiento en Momentos de Crisis",
    badge: "Contención Inmediata",
    tagline: "Orientación profesional para superar cambios o duelos.",
    bullets: [
      "Afrontar duelos o rupturas afectivas",
      "Manejo del agotamiento emocional o burnout",
      "Transiciones y nuevos comienzos",
      "Reorientación de metas y propósito de vida",
    ],
    wspText: "Hola Isaura! Quisiera iniciar un proceso terapéutico de acompañamiento en momentos de crisis."
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-linear-to-b from-white via-purple-50/40 to-white py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="w-max mx-auto bg-purple-100 text-primary text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            Especialidades Terapéuticas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
            Modalidades de Atención Profesional
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Procesos adaptados a la etapa de vida que estás transitando.
          </p>
        </div>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative group"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-purple-100/80 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold text-primary bg-purple-50 border border-purple-200/60 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 font-medium mb-6">
                    {service.tagline}
                  </p>

                  {/* Bullet list */}
                  <div className="border-t border-purple-50 pt-5 mb-6">
                    <p className="text-xs uppercase font-bold tracking-wider text-neutral-400 mb-3">
                      Objetivos del Proceso
                    </p>
                    <ul className="space-y-3">
                      {service.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-sm text-neutral-700 font-medium"
                        >
                          <CheckIcon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <a
                  href={`https://api.whatsapp.com/send/?phone=573142099080&text=${encodeURIComponent(service.wspText)}&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-purple-50 hover:bg-primary hover:text-white text-primary border border-purple-200/80 font-bold py-3 px-4 rounded-xl transition-colors text-sm"
                >
                  Consultar detalles de esta modalidad
                </a>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="text-center pt-4">
          <a
            href="https://api.whatsapp.com/send/?phone=573142099080&text=Hola%21+Me+gustar%C3%ADa+agendar+una+cita+de+valoraci%C3%B3n.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white rounded-2xl px-8 py-4 font-bold text-base shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>Reservar mi cita de valoración</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
