import { CheckCircleIcon } from "@heroicons/react/24/solid";

const highlights = [
  {
    title: "Comprensión Sin Juzgar",
    desc: "Un espacio seguro para expresarse sin juicios y ser escuchados con empatía.",
  },
  {
    title: "Herramientas Prácticas",
    desc: "Herramientas prácticas y aplicables para el manejo emocional y el autocuidado.",
  },
  {
    title: "Serenidad y Autoconfianza",
    desc: "Disminución de la ansiedad, mejora del estado de ánimo y fortalecimiento de la autoestima.",
  },
  {
    title: "Duelos y Transiciones",
    desc: "Procesamiento de duelos, afrontamiento de rupturas y manejo de etapas de cambio vital.",
  },
];

export default function ResultsSection() {
  return (
    <section
      id="results"
      className="w-full bg-gradient-to-b from-purple-900 via-purple-950 to-slate-950 text-white py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="w-max mx-auto bg-purple-800/80 text-purple-200 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-purple-700">
            Beneficios Clave
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Los cambios que experimentan mis pacientes
          </h2>
          <p className="text-purple-200 text-base sm:text-lg">
            Avances significativos alcanzados a lo largo de su proceso de acompañamiento.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 hover:bg-white/15 hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircleIcon className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-purple-200 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Quote & Action */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-100 italic leading-snug">
            &quot;El trabajo terapéutico no se limita a conversar; es un proceso activo para transformar la forma en que vives y sientes tu presente.&quot;
          </h3>
          <div>
            <a
              href="https://api.whatsapp.com/send/?phone=573142099080&text=Hola%21+Me+gustar%C3%ADa+iniciar+un+proceso+terapeutico&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl px-8 py-4 text-base shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Comenzar mi camino hoy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
