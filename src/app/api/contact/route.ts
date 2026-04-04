import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, email, method, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Numele, emailul si mesajul sunt obligatorii." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Cabinet Psihologie <contact@psiholog-cernat-lorena.com>",
      to: "cernatlorena@yahoo.com",
      subject: `Mesaj nou de la ${name}`,
      html: `
        <h2>Mesaj nou din formularul de contact</h2>
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone || "Necompletat"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Metoda preferata:</strong> ${method || "Email"}</p>
        <hr />
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "A aparut o eroare. Te rugam incearca din nou." },
      { status: 500 }
    );
  }
}
