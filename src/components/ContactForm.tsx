"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          method: formData.get("method"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-cream rounded-2xl p-6 sm:p-8">
      <h2
        className="text-xl sm:text-2xl font-semibold text-text mb-6"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Trimite un mesaj
      </h2>

      {status === "success" ? (
        <div className="text-center py-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-rose/15 flex items-center justify-center">
            <svg className="w-7 h-7 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-text mb-2">Mesaj trimis!</p>
          <p className="text-sm text-text-muted">Voi raspunde in cel mai scurt timp.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm text-rose hover:text-rose-dark transition-colors"
          >
            Trimite alt mesaj
          </button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Nume intreg</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Numele tau"
                className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-text placeholder:text-text-muted/50 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/30 transition-all text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Telefon</label>
              <input
                name="phone"
                type="tel"
                placeholder="07XX XXX XXX"
                className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-text placeholder:text-text-muted/50 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/30 transition-all text-base"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">Adresa de email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="email@exemplu.ro"
              className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-text placeholder:text-text-muted/50 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/30 transition-all text-base"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">Metoda preferata de contact</label>
            <select
              name="method"
              className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-text focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/30 transition-all text-base appearance-none"
            >
              <option value="email">Email</option>
              <option value="telefon">Telefon</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">Mesaj</label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Cum te pot ajuta?"
              className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-text placeholder:text-text-muted/50 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/30 transition-all text-base resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-500 text-center">
              A aparut o eroare. Te rugam incearca din nou.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-rose text-white py-3.5 rounded-xl text-base sm:text-lg font-medium hover:bg-rose-dark transition-all duration-300 hover:shadow-lg hover:shadow-rose/25 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Se trimite..." : "Trimite"}
          </button>
        </form>
      )}
    </div>
  );
}
