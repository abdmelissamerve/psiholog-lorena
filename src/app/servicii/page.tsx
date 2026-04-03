import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicii | Cernat Lorena-Mariana",
  description: "Psihoterapie integrativa, evaluari clinice si logopedie. Sedinte online si la cabinet in Constanta.",
};

const serviciiOverview = [
  {
    title: "Psihoterapie Integrativa",
    description: "Sedinte individuale pentru adolescenti si adulti care se confrunta cu anxietate, blocaje emotionale sau dificultati relationale.",
    anchor: "#psihoterapie",
    price: "150 RON",
  },
  {
    title: "Evaluari Clinice",
    description: "Evaluari psihologice complexe pentru copii si adulti, cu rapoarte detaliate si recomandari de interventie.",
    anchor: "#evaluari",
    price: "200 RON",
  },
  {
    title: "Logopedie",
    description: "Recuperarea si imbunatatirea limbajului pentru copiii care au nevoie de sprijin in dezvoltarea comunicarii.",
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
            Psihoterapie Integrativa
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-text-light leading-relaxed text-justify mb-8">
            <p>
              Ofer sedinte de psihoterapie individuala pentru adolescenti si adulti,
              atat fata in fata cat si online. Sedintele sunt adaptate nevoilor si
              ritmului fiecarei persoane.
            </p>
            <p>
              Lucrez cu oameni care se simt blocati in propriile tipare, se confrunta
              cu anxietate, atacuri de panica, stres sau dificultati emotionale,
              simt ca &bdquo;ceva nu e in regula&rdquo; dar nu stiu exact ce.
            </p>
            <p>
              Abordarea mea este una calda, profund umana si adaptata fiecarei persoane.
              Nu cred in retete universale, ci in intelegerea contextului de viata, a istoriei
              personale si a modului unic in care fiecare om functioneaza.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="text-sm bg-cream text-text-muted px-4 py-2 rounded-full">Adolescenti si adulti</span>
            <span className="text-sm bg-cream text-text-muted px-4 py-2 rounded-full">Online sau la cabinet</span>
            <span className="text-sm bg-cream text-text-muted px-4 py-2 rounded-full">~50 minute / sedinta</span>
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
            Evaluari Clinice
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-text-light leading-relaxed text-justify mb-8">
            <p>
              Realizez evaluari clinice pentru copii si adulti, fie pentru incadrarea
              in grad de handicap, fie pentru o intelegere mai profunda a personalitatii
              si a dificultatilor cu care se confrunta persoana.
            </p>
            <p>
              Evaluarea include teste psihologice, rapoarte clinice si recomandari
              personalizate de interventie.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="text-sm bg-white text-text-muted px-4 py-2 rounded-full">Copii si adulti</span>
            <span className="text-sm bg-white text-text-muted px-4 py-2 rounded-full">Raport detaliat</span>
            <span className="text-sm bg-white text-text-muted px-4 py-2 rounded-full">Recomandari personalizate</span>
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
              Ofer sedinte de logopedie dedicate recuperarii, corectarii sau
              imbunatatirii limbajului, adaptate copiilor care au nevoie de sprijin
              in dezvoltarea sau optimizarea comunicarii.
            </p>
            <p>
              De multe ori, dificultatile emotionale si cele de comunicare sunt
              strans legate. Experienta mea in ambele domenii imi permite o
              abordare completa.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="text-sm bg-cream text-text-muted px-4 py-2 rounded-full">Copii</span>
            <span className="text-sm bg-cream text-text-muted px-4 py-2 rounded-full">Recuperare limbaj</span>
            <span className="text-sm bg-cream text-text-muted px-4 py-2 rounded-full">Optimizarea comunicarii</span>
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
            Programeaza o consultatie
          </Link>
        </div>
      </section>
    </>
  );
}
