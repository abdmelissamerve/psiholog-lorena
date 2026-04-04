import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicii | Cernat Lorena-Mariana",
  description: "Psihoterapie integrativă, evaluări clinice și logopedie. Ședințe online și la cabinet în Constanța.",
};

const serviciiOverview = [
  {
    title: "Psihoterapie Integrativă",
    description: "Ședințe individuale pentru adolescenți și adulți care se confruntă cu anxietate, blocaje emoționale sau dificultăți relaționale.",
    anchor: "#psihoterapie",
    price: "150 RON",
  },
  {
    title: "Evaluări Clinice",
    description: "Evaluări psihologice complexe pentru copii și adulți, cu rapoarte detaliate și recomandări de intervenție.",
    anchor: "#evaluari",
    price: "200 RON",
  },
  {
    title: "Logopedie",
    description: "Recuperarea și îmbunătățirea limbajului pentru copiii care au nevoie de sprijin în dezvoltarea comunicării.",
    anchor: "#logopedie",
    price: "120 RON",
  },
];

export default function ServiciiPage() {
  return (
    <>
      {/* Header + Overview */}
      <section className="pt-28 sm:pt-30 pb-12 sm:pb-16 bg-cream">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <p className="text-rose-dark text-sm sm:text-base font-semibold tracking-widest uppercase mb-4">
              Ce ofer?
            </p>
            <h1
              className="text-3xl sm:text-4xl font-semibold text-text mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Servicii psihologice
            </h1>

          </div>

          {/* 3 carduri cu descriere scurta */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {serviciiOverview.map((s, i) => (
              <div key={i} className="flex flex-col gap-3">
                <a
                  href={s.anchor}
                  className="group bg-white rounded-2xl p-6 sm:p-7 hover:shadow-lg hover:shadow-rose/5 hover:-translate-y-0.5 transition-all duration-300 flex-1"
                >
                  <h3
                    className="text-lg sm:text-xl font-semibold text-text mb-3 group-hover:text-rose transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-light leading-relaxed">
                    {s.description}
                  </p>
                </a>
                <div className="bg-white rounded-xl px-4 py-3 text-center border border-cream-dark/30">
                  <p className="text-base font-bold text-text" style={{ fontFamily: "var(--font-playfair)" }}>
                    {s.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Psihoterapie - detalii */}
      <section id="psihoterapie" className="py-12 sm:py-18 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-text mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Psihoterapie Integrativă
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-text-light leading-relaxed text-justify mb-8">
            <p>
              Ofer ședințe de psihoterapie individuală pentru adolescenți și adulți,
              atât față în față cât și online. Ședințele sunt adaptate nevoilor și
              ritmului fiecărei persoane.
            </p>
            <p>
              Lucrez cu oameni care se simt blocați în propriile tipare, se confruntă
              cu anxietate, atacuri de panică, stres sau dificultăți emoționale,
              simt că &bdquo;ceva nu e în regulă&rdquo; dar nu știu exact ce.
            </p>
            <p>
              Abordarea mea este una caldă, profund umană și adaptată fiecărei persoane.
              Nu cred în rețete universale, ci în înțelegerea contextului de viață, a istoriei
              personale și a modului unic în care fiecare om funcționează.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="text-sm bg-cream text-text-muted px-4 py-2 rounded-full">Adolescenți și adulți</span>
            <span className="text-sm bg-cream text-text-muted px-4 py-2 rounded-full">Online sau la cabinet</span>
            <span className="text-sm bg-cream text-text-muted px-4 py-2 rounded-full">~50 minute / ședință</span>
          </div>
        </div>
      </section>

      {/* Evaluari - detalii */}
      <section id="evaluari" className="py-12 sm:py-18 bg-cream scroll-mt-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-text mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Evaluări Clinice
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-text-light leading-relaxed text-justify mb-8">
            <p>
              Realizez evaluări clinice pentru copii și adulți, fie pentru încadrarea
              în grad de handicap, fie pentru o înțelegere mai profundă a personalității
              și a dificultăților cu care se confruntă persoana.
            </p>
            <p>
              Evaluarea include teste psihologice, rapoarte clinice și recomandări
              personalizate de intervenție.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="text-sm bg-white text-text-muted px-4 py-2 rounded-full">Copii și adulți</span>
            <span className="text-sm bg-white text-text-muted px-4 py-2 rounded-full">Raport detaliat</span>
            <span className="text-sm bg-white text-text-muted px-4 py-2 rounded-full">Recomandări personalizate</span>
          </div>
        </div>
      </section>

      {/* Logopedie - detalii */}
      <section id="logopedie" className="py-12 sm:py-18 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-text mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Logopedie
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-text-light leading-relaxed text-justify mb-8">
            <p>
              Ofer ședințe de logopedie dedicate recuperării, corectării sau
              îmbunătățirii limbajului, adaptate copiilor care au nevoie de sprijin
              în dezvoltarea sau optimizarea comunicării.
            </p>
            <p>
              De multe ori, dificultățile emoționale și cele de comunicare sunt
              strâns legate. Experiența mea în ambele domenii îmi permite o
              abordare completă.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="text-sm bg-cream text-text-muted px-4 py-2 rounded-full">Copii</span>
            <span className="text-sm bg-cream text-text-muted px-4 py-2 rounded-full">Recuperare limbaj</span>
            <span className="text-sm bg-cream text-text-muted px-4 py-2 rounded-full">Optimizarea comunicării</span>
          </div>
        </div>
      </section>

      {/* Pret + CTA */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-xl mx-auto px-5 sm:px-6 text-center">

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-text text-white px-8 py-4 rounded-full text-base sm:text-lg font-medium hover:bg-text-light transition-all duration-300"
          >
            Programează o ședință
          </Link>
        </div>
      </section>
    </>
  );
}
