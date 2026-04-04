"use client";

import { useState, type FormEvent } from "react";

interface FieldErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

function validate(data: { name: string; phone: string; email: string; message: string }): FieldErrors {
  const errors: FieldErrors = {};

  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = "Numele este obligatoriu.";
  } else if (trimmedName.length < 3) {
    errors.name = "Numele trebuie să aibă cel puțin 3 caractere.";
  }

  if (data.phone.trim()) {
    const digits = data.phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 13) {
      errors.phone = "Numărul de telefon nu este valid.";
    }
  }

  const trimmedEmail = data.email.trim();
  if (!trimmedEmail) {
    errors.email = "Emailul este obligatoriu.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = "Adresa de email nu este validă.";
  }

  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = "Mesajul este obligatoriu.";
  } else if (trimmedMessage.length < 10) {
    errors.message = "Mesajul trebuie să aibă cel puțin 10 caractere.";
  }

  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function handleBlur(field: string, value: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));

    // Validate single field on blur
    const dummyData = { name: "", phone: "", email: "", message: "", [field]: value };
    const fieldErrors = validate(dummyData);
    setErrors((prev) => ({
      ...prev,
      [field]: fieldErrors[field as keyof FieldErrors],
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: (formData.get("name") as string) || "",
      phone: (formData.get("phone") as string) || "",
      email: (formData.get("email") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    const validationErrors = validate(data);
    setErrors(validationErrors);
    setTouched({ name: true, phone: true, email: true, message: true });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          method: formData.get("method"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setErrors({});
        setTouched({});
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass = (field: keyof FieldErrors) =>
    `w-full px-4 py-3 rounded-xl border bg-white text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-1 transition-all text-base ${
      touched[field] && errors[field]
        ? "border-red-400 focus:border-red-400 focus:ring-red-300/30"
        : "border-cream-dark focus:border-rose focus:ring-rose/30"
    }`;

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
          <p className="text-sm text-text-muted">Voi răspunde în cel mai scurt timp.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm text-rose hover:text-rose-dark transition-colors"
          >
            Trimite alt mesaj
          </button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Nume întreg</label>
              <input
                name="name"
                type="text"
                placeholder="Numele tău"
                onBlur={(e) => handleBlur("name", e.target.value)}
                className={inputClass("name")}
              />
              {touched.name && errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Telefon</label>
              <input
                name="phone"
                type="tel"
                placeholder="07XX XXX XXX"
                onBlur={(e) => handleBlur("phone", e.target.value)}
                className={inputClass("phone") }
              />
              {touched.phone && errors.phone && (
                <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">Adresa de email</label>
            <input
              name="email"
              type="email"
              placeholder="email@exemplu.ro"
              onBlur={(e) => handleBlur("email", e.target.value)}
              className={inputClass("email")}
            />
            {touched.email && errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">Metoda preferată de contact</label>
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
              placeholder="Cum te pot ajuta?"
              onBlur={(e) => handleBlur("message", e.target.value)}
              className={`${inputClass("message")} resize-none`}
            />
            {touched.message && errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          {status === "error" && (
            <p className="text-sm text-red-500 text-center">
              A apărut o eroare. Te rugăm încearcă din nou.
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
