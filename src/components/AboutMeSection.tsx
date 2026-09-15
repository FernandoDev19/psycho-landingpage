import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="w-full bg-white py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photos composition */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative bg-purple-50 p-4 rounded-3xl border border-purple-100 shadow-lg">
                <div className="grid grid-cols-2 gap-3">
                  <Image
                    className="rounded-2xl object-cover w-full h-[220px] shadow-sm transform -rotate-2 hover:rotate-0 transition-transform"
                    src="/imgs/isaura-florez-psi-2.webp"
                    alt="Isaura Flórez Psicóloga"
                    width={240}
                    height={320}
                    unoptimized
                  />
                  <Image
                    className="rounded-2xl object-cover w-full h-[220px] shadow-sm transform rotate-3 hover:rotate-0 transition-transform mt-6"
                    src="/imgs/espacio-para-ti-2.webp"
                    alt="Espacio Terapéutico"
                    width={240}
                    height={320}
                    unoptimized
                  />
                </div>

                {/* Experience Badge */}
                <div className="mt-4 bg-white p-4 rounded-2xl shadow-sm border border-purple-100 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-extrabold text-primary">
                      Enfoque Terapéutico
                    </p>
                    <p className="text-xs font-medium text-neutral-500">
                      Transformando Vidas en la Práctica Psicologica
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-primary flex items-center justify-center font-bold text-lg">
                    ✨
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="w-max bg-purple-100 text-primary text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
              Trayectoria Profesional
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight">
              Conoce a <span className="text-primary">Isaura Flórez</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Soy <strong className="text-primary">psicóloga</strong>, acompaño
              bajo un{" "}
              <strong className="text-primary">
                enfoque cognitivo conductual e integrador
              </strong>{" "}
              a jóvenes y adultos que atraviesan momentos de inseguridad,
              desgaste emocional, dificultades en sus relaciones o desconexión
              de sí mismos.
            </p>

            <p className="text-base text-neutral-600 leading-relaxed">
              Mi propósito es ofrecerte un{" "}
              <strong className="text-primary">espacio cercano</strong>,{" "}
              <strong className="text-primary">
                profesional y libre de juicios
              </strong>
              , donde puedas comprender tu experiencia, resignificar lo vivido y
              construir una relación más amable contigo. la atencion es{" "}
              <strong className="text-primary">virtual o presencial</strong>.
            </p>

            {/* Approach tags */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Metodologías Terapéuticas
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-50 border border-purple-200 text-primary font-semibold text-xs px-3 py-1.5 rounded-xl">
                  Terapia Cognitivo-Conductual
                </span>
                <span className="bg-purple-50 border border-purple-200 text-primary font-semibold text-xs px-3 py-1.5 rounded-xl">
                  Perspectiva Sistémica Familiar
                </span>
                <span className="bg-purple-50 border border-purple-200 text-primary font-semibold text-xs px-3 py-1.5 rounded-xl">
                  Acompañamiento Humanista
                </span>
              </div>
            </div>

            {/* Quote Block */}
            <div className="bg-purple-50/60 p-5 rounded-2xl border-l-4 border-primary">
              <p className="text-sm sm:text-base text-primary font-medium italic">
                &quot;Mi mayor compromiso es ofrecerte un espacio guiado por la
                confidencialidad, el respeto y la empatía, donde puedas
                expresarte con total libertad y trabajar en tu bienestar.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
