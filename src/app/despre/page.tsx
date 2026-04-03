import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre mine | Cernat Lorena-Mariana",
  description: "Psihoterapeut integrativ, psiholog clinician si logoped cu experienta in lucrul cu copii si adulti.",
};

const studii = [
  {
    period: "2019 - 2022",
    title: "Licenta in Psihologie",
    place: "Universitatea \"Ovidius\" din Constanta",
  },
  {
    period: "2022 - 2024",
    title: "Master in Psihodiagnoza personalitatii",
    place: "Universitatea \"Ovidius\" din Constanta",
  },
  {
    period: "2023 - prezent",
    title: "Membra a Colegiului Psihologilor din Romania",
    place: "",
  },
  {
    period: "2023 - prezent",
    title: "Formare in Psihoterapie Integrativa",
    place: "IRPI - Institutul Roman de Psihoterapie Integrativa",
  },
];

export default function DesprePage() {
  return (
    <>
      {/* Intro cu poza */}
      <section className="pt-28 sm:pt-30 pb-12 sm:pb-16 bg-cream">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-br from-rose-light/50 via-rose/20 to-rose-light/30 shadow-xl shadow-rose/10">
                <div className="w-64 h-80 sm:w-[340px] sm:h-[460px] rounded-xl overflow-hidden">
                  <Image
                    src="/lorena2.jpeg"
                    alt="Cernat Lorena-Mariana la IRPI"
                    width={340}
                    height={460}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-rose-dark text-sm sm:text-base font-semibold tracking-widest uppercase mb-4">
                Despre mine
              </p>
              <h1
                className="text-3xl sm:text-4xl font-semibold text-text leading-snug mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Cernat Lorena-Mariana
              </h1>
              <p className="text-base sm:text-lg text-text-light leading-relaxed mb-5 text-justify">
                Mi-am dorit sa inteleg oamenii cu mult inainte sa stiu ca asta se va numi,
                mai tarziu, psihologie. M-a fascinat mereu felul diferit in care fiecare persoana
                simte, gandeste si reactioneaza, chiar si in situatii asemanatoare. Aceasta curiozitate
                fata de lumea interioara a oamenilor a fost, de fapt, primul pas catre
                drumul pe care il urmez astazi.
              </p>
              <p className="text-base sm:text-lg text-text-light leading-relaxed mb-5 text-justify">
                Am ales psihologia din dorinta de a intelege mai profund ce se afla dincolo
                de comportamente, dincolo de cuvinte si, uneori, dincolo de taceri.
              </p>
              <p className="text-base sm:text-lg text-text-light leading-relaxed text-justify mb-6">
                Pentru mine, aceasta profesie nu inseamna doar o meserie, ci un mod de a fi
                prezenta pentru oameni, de a le oferi claritate, sens si sprijin real in
                momentele in care au cea mai mare nevoie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializare */}
      <section className="py-12 sm:py-18 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-text mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Specializare
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-text-light leading-relaxed">
            <p className="text-justify">
              Expertiza mea inseamna mai mult decat formari si specializari.
              Inseamna felul in care reusesc sa inteleg omul din fata mea,
              dincolo de ceea ce spune sau arata la prima vedere.
            </p>
            <p className="text-justify">
              Pregatirea in <strong className="text-text">psihologie clinica</strong> imi
              ofera claritate in evaluare, in intelegerea simptomelor si a modului in care
              acestea influenteaza viata de zi cu zi.
            </p>
            <p className="text-justify">
              Formarea in <strong className="text-text">psihoterapie integrativa</strong> ma
              ajuta sa privesc emotiile, tiparele si istoria personala ca pe un intreg,
              nu ca pe lucruri separate.
            </p>
            <p className="text-justify">
              Experienta din <strong className="text-text">logopedie</strong> completeaza
              aceasta perspectiva, pentru ca de multe ori dificultatile emotionale si cele
              de comunicare sunt strans legate.
            </p>
            <p className="text-justify">
              Pentru mine, expertiza inseamna sa pot vedea ceea ce nu este usor de pus
              in cuvinte si sa creez un spatiu in care lucrurile incep, treptat, sa se aseze.
            </p>
          </div>
        </div>
      </section>

      {/* Studii */}
      <section className="py-12 sm:py-18 bg-cream">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-text mb-10"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Studii si formare
          </h2>
          <div className="space-y-0">
            {studii.map((item, i) => (
              <div
                key={i}
                className="relative pl-8 pb-10 last:pb-0 border-l-2 border-rose-light/50 last:border-l-transparent"
              >
                {/* Dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-rose border-4 border-cream" />
                <p className="text-sm text-rose-dark font-medium mb-1">{item.period}</p>
                <h3 className="text-base sm:text-lg font-semibold text-text mb-1">
                  {item.title}
                </h3>
                {item.place && (
                  <p className="text-sm text-text-muted">{item.place}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experienta */}
      <section className="py-12 sm:py-18 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-text mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Experienta
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-text-light leading-relaxed">
            <p className="text-justify">
              Am peste doi ani si jumatate de experienta in cabinet individual de psihologie,
              timp in care am lucrat cu copii si adulti.
            </p>
            <p className="text-justify">
              Aceasta experienta m-a invatat sa observ cu atentie si sa inteleg nu doar
              ceea ce oamenii spun, ci si ceea ce simt si nu exprima verbal.
            </p>
            <p className="text-justify">
              Am acumulat cunostinte practice in evaluari psihologice, psihoterapie si
              logopedie, pe care le folosesc pentru a ghida oamenii spre schimbari reale
              si cresterea calitatii vietii.
            </p>
            <p className="text-justify">
              Fiecare intalnire mi-a consolidat abilitatea de a crea un spatiu sigur,
              in care oamenii pot sa se descopere, sa se inteleaga si sa se dezvolte
              in ritmul lor propriu.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
