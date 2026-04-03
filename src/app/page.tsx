import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Psihoterapie Integrativa",
    description: "Sedinte individuale pentru adolescenti si adulti, online sau la cabinet.",
    href: "/servicii",
  },
  {
    title: "Evaluari Clinice",
    description: "Evaluari psihologice pentru copii si adulti, cu rapoarte detaliate.",
    href: "/servicii",
  },
  {
    title: "Logopedie",
    description: "Recuperarea si imbunatatirea limbajului la copii.",
    href: "/servicii",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-rose-light/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[200px] md:w-[350px] h-[200px] md:h-[350px] rounded-full bg-rose/10 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-text leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Cernat
              <br />
              Lorena-Mariana
            </h1>
            <p className="text-rose-dark text-sm sm:text-base font-medium tracking-wide mb-8">
              Psihoterapeut integrativ &bull; Psiholog clinician &bull; Logoped
            </p>
            <p
              className="text-xl sm:text-2xl text-text-light leading-relaxed max-w-lg mx-auto lg:mx-0 mb-4 italic"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Cand ai simtit ultima data ca esti cu adevarat bine, nu doar &bdquo;in regula&rdquo;?
            </p>
            <p className="text-base sm:text-lg text-text-light leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              Sunt aici cu o abordare calda si adaptata fiecarui om.
              Lucrez cu emotii, ganduri si dificultati de exprimare, la copii si adulti.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-rose text-white px-8 py-4 rounded-full text-base sm:text-lg font-medium hover:bg-rose-dark transition-all duration-300 hover:shadow-lg hover:shadow-rose/25"
            >
              Programeaza o consultatie
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative p-1.5 sm:p-2 rounded-[2.5rem] bg-gradient-to-br from-rose-light/60 via-rose/30 to-rose-light/40 shadow-2xl shadow-rose/15">
              <div className="w-64 h-80 sm:w-72 sm:h-[400px] md:w-80 md:h-[440px] lg:w-[380px] lg:h-[500px] rounded-[2rem] bg-cream-dark overflow-hidden">
                <Image
                  src="/lorena.jpeg"
                  alt="Cernat Lorena-Mariana - Psihoterapeut Integrativ"
                  width={380}
                  height={500}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicii overview */}
      <section className="py-12 sm:py-18 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-semibold text-text mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Cum te pot ajuta?
            </h2>
            <p className="text-base sm:text-lg text-text-light leading-relaxed">
              Ofer sedinte de psihoterapie individuala, servicii complete de evaluare si sedinte de logopedie,
              adaptate nevoilor si ritmului fiecarei persoane.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group bg-cream rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:shadow-rose/5 hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3
                  className="text-lg sm:text-xl font-semibold text-text mb-3 group-hover:text-rose transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-text-light leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p
            className="text-2xl sm:text-3xl font-semibold text-text mb-4 leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Daca simti ca a venit momentul sa te ocupi
            <span className="text-rose"> cu adevarat de tine</span>,
            poate acesta este primul pas.
          </p>
         
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-rose text-white mt-4 px-8 py-4 rounded-full text-base sm:text-lg font-medium hover:bg-rose-dark transition-all duration-300 hover:shadow-lg hover:shadow-rose/25"
          >
            Contacteaza-ma
          </Link>
        </div>
      </section>
    </>
  );
}
