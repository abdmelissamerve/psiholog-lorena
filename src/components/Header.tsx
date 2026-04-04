"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/despre", label: "Despre" },
  { href: "/servicii", label: "Servicii" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2.5 sm:py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 border border-rose/20">
            <Image
              src="/logo.png"
              alt="Logo Cabinet Psihologie"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="text-xl sm:text-2xl font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Lorena Cernat
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm sm:text-base transition-colors ${
                pathname === link.href
                  ? "text-rose font-medium"
                  : "text-text-light hover:text-rose-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-rose text-white text-sm sm:text-base px-5 py-2 rounded-full hover:bg-rose-dark transition-colors"
          >
            Programează-te
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-5 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg transition-colors ${
                pathname === link.href ? "text-rose font-medium" : "text-text-light hover:text-rose-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-rose text-white text-lg px-7 py-2.5 rounded-full hover:bg-rose-dark transition-colors"
          >
            Programează-te
          </Link>
        </nav>
      </div>
    </header>
  );
}
