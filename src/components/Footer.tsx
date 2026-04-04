import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-text text-cream py-10 sm:py-12">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mb-8">
          {/* Brand */}
          <div>
            <p
              className="text-lg font-semibold mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Lorena Cernat
            </p>
            <ul className="text-sm text-cream-dark leading-relaxed space-y-1 mt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-light flex-shrink-0" />
                Psihoterapeut integrativ
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-light flex-shrink-0" />
                Psiholog clinician
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-light flex-shrink-0" />
                Logoped
              </li>
            </ul>
          </div>

          {/* Navigare */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-light mb-3">Pagini</p>
            <ul className="space-y-1.5">
              {[
                { href: "/", label: "Acasă" },
                { href: "/despre", label: "Despre" },
                { href: "/servicii", label: "Servicii" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream-dark hover:text-rose-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-light mb-3">Contact</p>
            <p className="text-sm text-cream-dark mb-1">
              <a href="tel:0769992906" className="hover:text-rose-light transition-colors">0769 992 906</a>
            </p>
            <p className="text-sm text-cream-dark mb-1">
              <a href="mailto:cernatlorena@yahoo.com" className="hover:text-rose-light transition-colors">cernatlorena@yahoo.com</a>
            </p>
            <p className="text-sm text-cream-dark">Str. Șerban Vodă nr. 6D, Constanța</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center sm:justify-between gap-1 text-text-muted">
          <p className="text-sm">&copy; {new Date().getFullYear()} Cabinet de Psihologie Cernat Lorena-Mariana</p>
          <p className="text-sm">Realizat de <a href="https://linkedin.com/in/melissa-abdula-4352131a0" target="_blank" rel="noopener noreferrer" className="hover:text-rose-light transition-colors underline">Abdula Melissa Merve</a></p>
        </div>
      </div>
    </footer>
  );
}
