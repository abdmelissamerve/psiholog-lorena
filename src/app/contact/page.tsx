import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Cernat Lorena-Mariana",
  description: "Programeaza o consultatie. Cabinet de Psihologie in Constanta.",
};

const program = [
  { day: "Luni", hours: "13:30 - 20:30" },
  { day: "Marti", hours: "13:30 - 20:30" },
  { day: "Miercuri", hours: "13:30 - 20:30" },
  { day: "Joi", hours: "13:30 - 20:30" },
  { day: "Vineri", hours: "13:30 - 20:30" },
  { day: "Sambata", hours: "10:00 - 19:00" },
  { day: "Duminica", hours: "10:00 - 18:00" },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 sm:pt-30 pb-12 sm:pb-16 bg-cream">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-rose-dark text-sm sm:text-base font-semibold tracking-widest uppercase mb-4">
            Contact
          </p>
          <h1
            className="text-3xl sm:text-4xl font-semibold text-text mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Programeaza o sedinta
          </h1>
          <p className="text-base sm:text-lg text-text-light leading-relaxed">
            Acesta este un spatiu dedicat intelegerii, cresterii si descoperirii de sine.
            Impreuna putem explora experientele tale si gasi perspective noi, in ritmul tau.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-18 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Formular */}
            <div className="lg:col-span-3">
              <ContactForm />
              {/* Pret + Durata sub formular */}
              {/* <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="bg-cream rounded-xl p-5 text-center border border-rose/20 flex flex-col items-center justify-center">
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Tarif</p>
                  <p className="text-xl font-bold text-text" style={{ fontFamily: "var(--font-playfair)" }}>150 RON</p>
                </div>
                <div className="bg-cream rounded-xl p-5 text-center border border-cream-dark flex flex-col items-center justify-center">
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Durata</p>
                  <p className="text-xl font-bold text-text" style={{ fontFamily: "var(--font-playfair)" }}>50 min</p>
                </div>
              </div> */}
            </div>

            {/* Info laterala */}
            <div className="lg:col-span-2 space-y-6">
              {/* Program */}
              <div>
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-widest mb-3">Program</h3>
                <div className="space-y-2">
                  {program.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm sm:text-base">
                      <span className="text-text">{item.day}</span>
                      <span className="text-text-light">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Telefon */}
              <div>
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-widest mb-3">Telefon</h3>
                <a href="tel:0769992906" className="text-xl sm:text-2xl font-semibold text-text hover:text-rose transition-colors">
                  0769.992.906
                </a>
              </div>

              {/* Harta */}
              <div>
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-widest mb-3">Locatie</h3>
                <div className="rounded-xl overflow-hidden border border-cream-dark/30 mb-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1775246219607!6m8!1m7!1s2fhYC8dF77YiDVIhcF7D2Q!2m2!1d44.19832581741419!2d28.62560607828304!3f50.76!4f-14.760000000000005!5f0.7820865974627469"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Cabinet de Psihologie - Strada Serban Voda 6D, Constanta"
                    className="w-full"
                  />
                </div>
                <p className="text-sm text-text">Strada Serban Voda nr. 6D, Constanta</p>
                <p className="text-xs text-text-muted mt-0.5">Sedinte disponibile si online</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
