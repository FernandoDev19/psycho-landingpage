import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full bg-linear-to-b from-purple-50/80 via-white to-white py-12 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Ambient Glow background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -z-10 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100/80 text-primary border border-purple-200/60 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Psicología &amp; Bienestar Emocional
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight tracking-tight">
              Recupera tu tranquilidad mental y{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-800">
                vuelve a conectar contigo
              </span>
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl">
              ¿Sientes que lo que has vivido esta afectando la forma en la que te ves y te relacionas contigo o con los demas?
            </p>

            <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl">
              Estoy aquí para acompañarte en ese camino de sanación, brindándote un espacio seguro y confidencial para explorar tus emociones y construir herramientas que te permitan recuperar tu bienestar emocional.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 py-2">
              <div className="flex items-center gap-2 bg-white border border-purple-100 px-3.5 py-1.5 rounded-xl shadow-xs text-xs sm:text-sm font-medium text-neutral-700">
                <span className="text-primary font-bold">✓</span> Privacidad y
                Confidencialidad
              </div>
              <div className="flex items-center gap-2 bg-white border border-purple-100 px-3.5 py-1.5 rounded-xl shadow-xs text-xs sm:text-sm font-medium text-neutral-700">
                <span className="text-primary font-bold">✓</span> Consulta
                Virtual o Presencial
              </div>
              <div className="flex items-center gap-2 bg-white border border-purple-100 px-3.5 py-1.5 rounded-xl shadow-xs text-xs sm:text-sm font-medium text-neutral-700">
                <span className="text-primary font-bold">✓</span> Formación
                Constante
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="https://api.whatsapp.com/send/?phone=573142099080&text=Hola%21+Me+gustar%C3%ADa+iniciar+un+proceso+terapeutico&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-primary hover:bg-primary-dark text-white rounded-2xl px-8 py-4 font-bold text-base shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Iniciar mi consulta inicial
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto text-center bg-white hover:bg-purple-50/80 text-primary border border-purple-200/80 rounded-2xl px-7 py-4 font-semibold text-base transition-colors"
              >
                Ver opciones terapéuticas
              </a>
            </div>
          </div>

          {/* Image & Card Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary to-purple-300 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-sm" />

              {/* Main Photo Card */}
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-2xl border border-purple-100 overflow-hidden">
                <Image
                  className="rounded-2xl object-cover w-full h-90 sm:h-105"
                  src="/imgs/isaura-florez-psi.webp"
                  alt="Isaura Flórez - Psicóloga Clínica"
                  width={400}
                  height={500}
                  priority
                  unoptimized
                />

                {/* Floating Badge Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-purple-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-primary flex items-center justify-center font-bold text-xl shrink-0">
                    🌿
                  </div>
                  <div>
                    <p className="font-bold text-neutral-800 text-sm">
                      Acompañamiento Cercano
                    </p>
                    <p className="text-xs text-neutral-500 font-medium">
                      Atención adaptada a tus necesidades
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
