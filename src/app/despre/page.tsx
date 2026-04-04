import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre mine | Cernat Lorena-Mariana",
  description: "Psihoterapeut integrativ, psiholog clinician și logoped cu experiență în lucrul cu copii și adulți.",
};

const studii = [
  {
    period: "2019 - 2022",
    title: "Licență în Psihologie",
    place: "Universitatea \"Ovidius\" din Constanța",
  },
  {
    period: "2022 - 2024",
    title: "Master în Psihodiagnoza personalității",
    place: "Universitatea \"Ovidius\" din Constanța",
  },
  {
    period: "2023 - prezent",
    title: "Membră a Colegiului Psihologilor din România",
    place: "",
  },
  {
    period: "2023 - prezent",
    title: "Formare în Psihoterapie Integrativă",
    place: "IRPI - Institutul Român de Psihoterapie Integrativă",
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
                Mi-am dorit să înțeleg oamenii cu mult înainte să știu că asta se va numi,
                mai târziu, psihologie. M-a fascinat mereu felul diferit în care fiecare persoană
                simte, gândește și reacționează, chiar și în situații asemănătoare. Această curiozitate
                față de lumea interioară a oamenilor a fost, de fapt, primul pas către
                drumul pe care îl urmez astăzi.
              </p>
              <p className="text-base sm:text-lg text-text-light leading-relaxed mb-5 text-justify">
                Am ales psihologia din dorința de a înțelege mai profund ce se află dincolo
                de comportamente, dincolo de cuvinte și, uneori, dincolo de tăceri.
              </p>
              <p className="text-base sm:text-lg text-text-light leading-relaxed text-justify mb-6">
                Pentru mine, această profesie nu înseamnă doar o meserie, ci un mod de a fi
                prezentă pentru oameni, de a le oferi claritate, sens și sprijin real în
                momentele în care au cea mai mare nevoie.
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
              Expertiza mea înseamnă mai mult decât formări și specializări.
              Înseamnă felul în care reușesc să înțeleg omul din fața mea,
              dincolo de ceea ce spune sau arată la prima vedere.
            </p>
            <p className="text-justify">
              Pregătirea în <strong className="text-text">psihologie clinică</strong> îmi
              oferă claritate în evaluare, în înțelegerea simptomelor și a modului în care
              acestea influențează viața de zi cu zi.
            </p>
            <p className="text-justify">
              Formarea în <strong className="text-text">psihoterapie integrativă</strong> mă
              ajută să privesc emoțiile, tiparele și istoria personală ca pe un întreg,
              nu ca pe lucruri separate.
            </p>
            <p className="text-justify">
              Experiența din <strong className="text-text">logopedie</strong> completează
              această perspectivă, pentru că de multe ori dificultățile emoționale și cele
              de comunicare sunt strâns legate.
            </p>
            <p className="text-justify">
              Pentru mine, expertiza înseamnă să pot vedea ceea ce nu este ușor de pus
              în cuvinte și să creez un spațiu în care lucrurile încep, treptat, să se așeze.
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
            Studii și formare
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

      {/* Experiență */}
      <section className="py-12 sm:py-18 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-text mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Experiență
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-text-light leading-relaxed">
            <p className="text-justify">
              Am peste doi ani și jumătate de experiență în cabinet individual de psihologie,
              timp în care am lucrat cu copii și adulți.
            </p>
            <p className="text-justify">
              Această experiență m-a învățat să observ cu atenție și să înțeleg nu doar
              ceea ce oamenii spun, ci și ceea ce simt și nu exprimă verbal.
            </p>
            <p className="text-justify">
              Am acumulat cunoștințe practice în evaluări psihologice, psihoterapie și
              logopedie, pe care le folosesc pentru a ghida oamenii spre schimbări reale
              și creșterea calității vieții.
            </p>
            <p className="text-justify">
              Fiecare întâlnire mi-a consolidat abilitatea de a crea un spațiu sigur,
              în care oamenii pot să se descopere, să se înțeleagă și să se dezvolte
              în ritmul lor propriu.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
