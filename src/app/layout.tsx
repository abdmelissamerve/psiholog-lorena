import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Cernat Lorena-Mariana | Psihoterapeut Integrativ & Psiholog Clinician",
  description:
    "Cabinet de psihologie - psihoterapie integrativă, psihologie clinică și logopedie. Ședințe online și față-în-față pentru copii, adolescenți și adulți.",
  keywords: [
    "psiholog",
    "psihoterapeut",
    "psihologie clinică",
    "logopedie",
    "terapie integrativă",
    "Cernat Lorena",
    "anxietate",
    "depresie",
    "ADHD",
    "terapie copii",
  ],
  openGraph: {
    title: "Cernat Lorena-Mariana | Psihoterapeut Integrativ",
    description:
      "Psihoterapie integrativă, psihologie clinică și logopedie. Programează o consultație.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
