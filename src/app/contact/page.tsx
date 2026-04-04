import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Cernat Lorena-Mariana",
  description: "Programează o ședință. Cabinet de Psihologie în Constanța.",
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
            Programează o ședință
          </h1>
          <p className="text-base sm:text-lg text-text-light leading-relaxed">
            Acesta este un spațiu dedicat înțelegerii, creșterii și descoperirii de sine.
            Împreună putem explora experiențele tale și găsi perspective noi, în ritmul tău.
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

              {/* Telefon + Social */}
              <div>
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-widest mb-3">Telefon</h3>
                <div className="flex items-center gap-3">
                  <a href="tel:0769992906" className="text-xl sm:text-2xl font-semibold text-text hover:text-rose transition-colors mr-10">
                    0769 992 906
                  </a>
                  <a
                    href="https://www.facebook.com/people/Cabinet-de-Psihologie-Cernat-Lorena/61556642702400/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-rose/10 flex items-center justify-center text-rose hover:bg-rose hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/psiholog.lorena/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-rose/10 flex items-center justify-center text-rose hover:bg-rose hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Harta */}
              <div>
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-widest mb-3">Locație</h3>
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
                <p className="text-sm text-text">Strada Șerban Vodă nr. 6D, Constanța</p>
                <p className="text-xs text-text-muted mt-0.5">Ședințe disponibile și online</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
